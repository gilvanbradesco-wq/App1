import React, { useMemo, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, TextInput, Switch, Button } from 'react-native'

const fmtBRL = v => (new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v||0))
const taxaMensal = aa => Math.pow(1+aa,1/12)-1
const pct = v => (v/100)

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

  const resultado = useMemo(()=>{
    const nMeses = anos*12
    const i_ipca = taxaMensal(ipcaAA/100)
    const i_adm  = taxaMensal(admAA/100)
    const fator  = (1+i_ipca)*(1-i_adm)-1
    let saldo=0, depAcum=0
    for(let m=1;m<=nMeses;m++){
      const anoPassado = Math.floor((m-1)/12)
      const aporteBruto = corrigeAporte ? mensal*Math.pow(1+ipcaAA/100, anoPassado) : mensal
      const carga = aporteBruto * pct(cargaEntrada)
      const aporteLiq = Math.max(0, aporteBruto - carga)
      if(adiantado){ saldo+=aporteLiq; saldo*=(1+fator) } else { saldo*=(1+fator); saldo+=aporteLiq }
      depAcum+=aporteLiq
    }
    const cargaSaida = saldo*pct(cargaResgate)
    const rend = Math.max(0, saldo - depAcum)
    const ir = rend * pct(irPct)
    const vidaLiq = Math.max(0, saldo - cargaSaida - ir)
    return { vidaLiq, depAcum }
  },[anos, ipcaAA, admAA, cargaEntrada, cargaResgate, irPct, adiantado, corrigeAporte, mensal])

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#0b1020'}}>
      <ScrollView contentContainerStyle={{padding:16}}>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'700', marginBottom:12}}>Simulador — Vida Inteira (Mobile)</Text>

        <View style={{backgroundColor:'#0b1326', padding:12, borderRadius:12, marginBottom:12}}>
          <Row label="Idade">
            <TextInput keyboardType="numeric" value={String(idade)} onChangeText={(t)=>setIdade(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Período (anos)">
            <TextInput keyboardType="numeric" value={String(anos)} onChangeText={(t)=>setAnos(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Capital segurado">
            <TextInput keyboardType="numeric" value={String(capital)} onChangeText={(t)=>setCapital(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Valor mensal">
            <TextInput keyboardType="numeric" value={String(mensal)} onChangeText={(t)=>setMensal(+t||0)} style={styles.input}/>
          </Row>
          <Row label="IPCA a.a. (%)">
            <TextInput keyboardType="numeric" value={String(ipcaAA)} onChangeText={(t)=>setIpcaAA(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Taxa adm. a.a. (%)">
            <TextInput keyboardType="numeric" value={String(admAA)} onChangeText={(t)=>setAdmAA(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Carreg. entrada (%)">
            <TextInput keyboardType="numeric" value={String(cargaEntrada)} onChangeText={(t)=>setCargaEntrada(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Carreg. resgate (%)">
            <TextInput keyboardType="numeric" value={String(cargaResgate)} onChangeText={(t)=>setCargaResgate(+t||0)} style={styles.input}/>
          </Row>
          <Row label="IR rend. (%)">
            <TextInput keyboardType="numeric" value={String(irPct)} onChangeText={(t)=>setIrPct(+t||0)} style={styles.input}/>
          </Row>
          <Row label="Anuidade antecipada">
            <Switch value={adiantado} onValueChange={setAdiantado}/>
          </Row>
          <Row label="Corrigir aporte pelo IPCA">
            <Switch value={corrigeAporte} onValueChange={setCorrigeAporte}/>
          </Row>
        </View>

        <View style={{backgroundColor:'#0b1326', padding:12, borderRadius:12}}>
          <Text style={{color:'#e5e7eb'}}>Valor em vida (líquido)</Text>
          <Text style={{color:'#fff', fontSize:22, fontWeight:'800'}}>{fmtBRL(resultado.vidaLiq)}</Text>

          <View style={{height:8}}/>
          <Text style={{color:'#e5e7eb'}}>Depósitos (líquidos)</Text>
          <Text style={{color:'#fff', fontSize:18, fontWeight:'800'}}>{fmtBRL(resultado.depAcum)}</Text>

          <View style={{height:16}}/>
          <Text style={{color:'#e5e7eb'}}>Cenário morte (capital segurado)</Text>
          <Text style={{color:'#fff', fontSize:18, fontWeight:'800'}}>{fmtBRL(capital)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function Row({label, children}){
  return (
    <View style={{marginBottom:10}}>
      <Text style={{color:'#cbd5e1', marginBottom:6}}>{label}</Text>
      {children}
    </View>
  )
}

const styles = {
  input: {backgroundColor:'#0f172a', color:'#fff', padding:10, borderRadius:8}
}
