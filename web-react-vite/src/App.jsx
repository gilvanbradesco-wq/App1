import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend } from 'chart.js'
import jsPDF from 'jspdf'

ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement, Tooltip, Legend)

const fmtBRL = v => (new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v||0))
const taxaMensal = aa => Math.pow(1+aa,1/12)-1
const pct = v => (v/100)

const defaultCovers = [
  { titulo: 'Morte (Cobertura Básica)', detalhe: 'Pagamento do capital segurado aos beneficiários.' },
  { titulo: 'IPA', detalhe: 'Indenização em caso de invalidez permanente por acidente.' }
]

export default function App(){
  const [idade,setIdade] = useState(35)
  const [anos,setAnos] = useState(10)
  const [capital,setCapital] = useState(300000)
  const [mensal,setMensal] = useState(1000)
  const [ipcaAA,setIpcaAA] = useState(7.8)
  const [admAA,setAdmAA] = useState(0)
  const [cargaEntrada,setCargaEntrada] = useState(0)
  const [cargaResgate,setCargaResgate] = useState(0)
  const [irPct,setIrPct] = useState(0)
  const [adiantado,setAdiantado] = useState(false)
  const [corrigeAporte,setCorrigeAporte] = useState(false)
  const [tabela,setTabela] = useState(null)
  const [usarTabela,setUsarTabela] = useState(false)
  const [covers,setCovers] = useState(defaultCovers)
  const chartRef = useRef(null)

  useEffect(()=>{
    fetch('/age_table.json').then(r=>r.ok?r.json():null).then(j=>{ if(j) setTabela(j) }).catch(()=>{})
    fetch('/coberturas.json').then(r=>r.ok?r.json():null).then(j=>{ if(j) setCovers(j) }).catch(()=>{})
  },[])

  const mensalAtual = useMemo(()=>{
    if(usarTabela && tabela){
      const faixa = tabela.find(f => idade>=f.min && idade<=f.max)
      return faixa ? (faixa.valorMensal ?? faixa.recomendado ?? mensal) : mensal
    }
    return mensal
  },[usarTabela, tabela, idade, mensal])

  const resultado = useMemo(()=>{
    const nMeses = anos*12
    const i_ipca = taxaMensal(ipcaAA/100)
    const i_adm  = taxaMensal(admAA/100)
    const fator  = (1+i_ipca)*(1-i_adm) - 1
    let saldo=0, depAcum=0, labels=[], serieSaldo=[], serieDep=[]
    const linhas=[]
    for(let m=1;m<=nMeses;m++){
      const anoPassado = Math.floor((m-1)/12)
      const aporteBruto = corrigeAporte ? mensalAtual*Math.pow(1+ipcaAA/100, anoPassado) : mensalAtual
      const carga = aporteBruto * pct(cargaEntrada)
      const aporteLiq = Math.max(0, aporteBruto - carga)
      if(adiantado){
        saldo += aporteLiq; saldo *= (1+fator)
      }else{
        saldo *= (1+fator); saldo += aporteLiq
      }
      depAcum += aporteLiq
      labels.push(`M${m}`); serieSaldo.push(saldo); serieDep.push(depAcum)
      linhas.push({m, aporteBruto, carga, aporteLiq, depAcum, saldo})
    }
    const cargaSaida = saldo*pct(cargaResgate)
    const rend = Math.max(0, saldo - depAcum)
    const ir = rend * pct(irPct)
    const vidaLiq = Math.max(0, saldo - cargaSaida - ir)
    return {labels, serieSaldo, serieDep, linhas, vidaLiq, depAcum}
  },[anos, ipcaAA, admAA, cargaEntrada, cargaResgate, irPct, adiantado, corrigeAporte, mensalAtual])

  const data = useMemo(()=> ({
    labels: resultado.labels,
    datasets:[
      { label:'Saldo acumulado (líquido)', data: resultado.serieSaldo, borderWidth:2, tension:.2 },
      { label:'Depósitos acumulados (líquidos)', data: resultado.serieDep, borderWidth:2, borderDash:[6,6], tension:.2 },
      { label:'Capital segurado', data: resultado.labels.map(_=>capital), borderWidth:1.5, borderDash:[2,4], pointRadius:0, tension:0 }
    ]
  }),[resultado, capital])

  const options = {
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{legend:{labels:{color:'#e5e7eb'}}, tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${fmtBRL(ctx.raw)}`}}},
    scales:{x:{ticks:{color:'#cbd5e1'}, grid:{color:'rgba(148,163,184,.15)'}}, y:{ticks:{color:'#cbd5e1', callback:v=>fmtBRL(v)}, grid:{color:'rgba(148,163,184,.15)'}}}
  }

  const baixarPDF = () => {
    const doc = new jsPDF({unit:'pt', format:'a4'})
    let y=40, pad=28
    doc.setFont('helvetica','bold'); doc.setFontSize(14); doc.text('Simulador — Vida Inteira (React)', pad, y); y+=18
    doc.setFont('helvetica','normal'); doc.setFontSize(10)
    doc.text(`Parâmetros: idade ${idade}, período ${anos} anos, CS ${fmtBRL(capital)}, mensal ${fmtBRL(mensalAtual)}`, pad, y); y+=14
    const chart = chartRef.current
    if(chart){
      const url = chart.canvas.toDataURL('image/png', 1.0)
      doc.addImage(url, 'PNG', pad, y, 530, 300); y+=310
    }
    doc.text(`Valor em vida estimado: ${fmtBRL(resultado.vidaLiq)} | Depósitos: ${fmtBRL(resultado.depAcum)}`, pad, y)
    doc.save('simulacao_vida_inteira_react.pdf')
  }

  return (
    <div style={{padding:20, color:'#e5e7eb', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto'}}>
      <h2>Simulador — Vida Inteira (React)</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
        <div style={{background:'#0b1326', padding:14, borderRadius:12, border:'1px solid rgba(255,255,255,.08)'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10}}>
            <label>Idade<input type="number" value={idade} onChange={e=>setIdade(+e.target.value)}/></label>
            <label>Período (anos)<input type="number" value={anos} onChange={e=>setAnos(+e.target.value)}/></label>
            <label>Capital segurado<input type="number" value={capital} onChange={e=>setCapital(+e.target.value)}/></label>
            <label>Valor mensal<input type="number" value={mensalAtual} onChange={e=>setMensal(+e.target.value)} disabled={usarTabela && !!tabela}/></label>
            <label>IPCA a.a. (%)<input type="number" value={ipcaAA} onChange={e=>setIpcaAA(+e.target.value)}/></label>
            <label>Taxa adm. a.a. (%)<input type="number" value={admAA} onChange={e=>setAdmAA(+e.target.value)}/></label>
            <label>Carreg. entrada (%)<input type="number" value={cargaEntrada} onChange={e=>setCargaEntrada(+e.target.value)}/></label>
            <label>Carreg. resgate (%)<input type="number" value={cargaResgate} onChange={e=>setCargaResgate(+e.target.value)}/></label>
            <label>IR rend. (%)<input type="number" value={irPct} onChange={e=>setIrPct(+e.target.value)}/></label>
          </div>
          <div style={{marginTop:8}}>
            <label><input type="checkbox" checked={adiantado} onChange={e=>setAdiantado(e.target.checked)}/> Anuidade antecipada</label>{' '}
            <label style={{marginLeft:10}}><input type="checkbox" checked={corrigeAporte} onChange={e=>setCorrigeAporte(e.target.checked)}/> Corrigir aporte pelo IPCA</label>{' '}
            <label style={{marginLeft:10}}><input type="checkbox" checked={usarTabela} onChange={e=>setUsarTabela(e.target.checked)}/> Usar tabela por idade</label>
          </div>
        </div>
        <div style={{background:'#0b1326', padding:14, borderRadius:12, border:'1px solid rgba(255,255,255,.08)'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10}}>
            <div><div className="kpi">Valor em vida (líquido)</div><div style={{fontWeight:800,fontSize:20}}>{fmtBRL(resultado.vidaLiq)}</div></div>
            <div><div className="kpi">Depósitos (líquidos)</div><div style={{fontWeight:800,fontSize:20}}>{fmtBRL(resultado.depAcum)}</div></div>
            <div><div className="kpi">Capital segurado</div><div style={{fontWeight:800,fontSize:20}}>{fmtBRL(capital)}</div></div>
          </div>
          <div style={{marginTop:10}}>
            <button onClick={baixarPDF}>Baixar PDF</button>
          </div>
        </div>
      </div>

      <div style={{background:'#0b1326', padding:14, marginTop:16, borderRadius:12, border:'1px solid rgba(255,255,255,.08)'}}>
        <Line ref={chartRef} data={data} options={options} height={120}/>
      </div>

      <div style={{background:'#0b1326', padding:14, marginTop:16, borderRadius:12, border:'1px solid rgba(255,255,255,.08)'}}>
        <h3>Coberturas</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          {covers.map((c,i)=>(
            <div key={i} style={{background:'#0f172a', padding:10, borderRadius:10, border:'1px solid rgba(255,255,255,.08)'}}>
              <strong>{c.titulo}</strong>
              <div style={{fontSize:13, opacity:.85}}>{c.detalhe}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
