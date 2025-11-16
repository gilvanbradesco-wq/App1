Perfeito, vamos direto ao que você pediu.

### O QUE FAZER NO GITHUB

1. No seu repositório, clique em **Add file → Create new file**.
2. No campo de nome do arquivo, escreva: **`index.html`**.
3. **Copie e cole TODO o código abaixo** dentro desse arquivo.
4. Desça a página e clique em **Commit changes**.

Depois é só ativar o GitHub Pages como te expliquei antes.

---

### CÓDIGO COMPLETO DO APP (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Projeto Patrimonial Prime - App Completo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #020617;
      color: #e5e7eb;
    }
    header {
      padding: 16px 24px;
      background: linear-gradient(90deg, #0f172a, #1f2937);
      border-bottom: 1px solid #1f2937;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    header .title {
      font-size: 18px;
      font-weight: 600;
    }
    header .subtitle {
      font-size: 12px;
      color: #9ca3af;
    }
    header .badge {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid #22c55e;
      color: #bbf7d0;
      margin-left: 8px;
    }
    main {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.1fr);
      gap: 20px;
      padding: 20px;
    }
    @media (max-width: 960px) {
      main {
        grid-template-columns: minmax(0, 1fr);
      }
    }
    .card {
      background: #020617;
      border-radius: 16px;
      padding: 16px 18px;
      border: 1px solid #1e293b;
      box-shadow: 0 18px 45px rgba(0,0,0,0.6);
    }
    .card h2 {
      font-size: 16px;
      margin: 0 0 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #e5e7eb;
    }
    .card h3 {
      font-size: 14px;
      margin: 12px 0 6px;
    }
    .tag {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 2px 8px;
      border-radius: 999px;
      background: #0ea5e9;
      color: #0f172a;
    }
    .tag-alt {
      background: #22c55e;
      color: #052e16;
    }
    .helper {
      font-size: 12px;
      color: #9ca3af;
      margin: 0 0 10px;
    }
    label {
      display: block;
      font-size: 12px;
      margin-bottom: 4px;
      color: #cbd5f5;
    }
    input, select, textarea {
      width: 100%;
      padding: 7px 10px;
      border-radius: 8px;
      border: 1px solid #1f2937;
      background: #020617;
      color: #e5e7eb;
      font-size: 13px;
      outline: none;
      resize: vertical;
    }
    input:focus, select:focus, textarea:focus {
      border-color: #0ea5e9;
      box-shadow: 0 0 0 1px rgba(14,165,233,0.2);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
    }
    .field-group {
      margin-bottom: 8px;
    }
    button {
      border-radius: 999px;
      border: none;
      padding: 9px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    button.primary {
      background: linear-gradient(135deg, #0ea5e9, #22c55e);
      color: #020617;
    }
    button.secondary {
      background: transparent;
      color: #9ca3af;
      border: 1px solid #4b5563;
    }
    button.danger {
      background: transparent;
      color: #f97316;
      border: 1px solid #f97316;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 8px;
      align-items: center;
    }
    .pill {
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 999px;
      border: 1px solid #1f2937;
      background: #020617;
      color: #9ca3af;
      cursor: pointer;
    }
    .pill.active {
      border-color: #0ea5e9;
      color: #e5e7eb;
    }
    .result-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 8px;
    }
    .result-card {
      padding: 9px 10px;
      border-radius: 12px;
      background: #020617;
      border: 1px solid #1f2937;
    }
    .result-card .label {
      font-size: 11px;
      color: #9ca3af;
      margin-bottom: 2px;
    }
    .result-card .value {
      font-size: 15px;
      font-weight: 600;
    }
    .result-card .note {
      font-size: 11px;
      color: #64748b;
      margin-top: 4px;
    }
    .tag-ok { color: #22c55e; }
    .tag-alert { color: #f97316; }
    .small {
      font-size: 11px;
      color: #9ca3af;
    }
    .divider {
      border: none;
      border-top: 1px solid #1f2937;
      margin: 8px 0;
    }
    footer {
      padding: 10px 20px 14px;
      font-size: 11px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 6px;
      border-top: 1px solid #1f2937;
    }
    .client-list {
      max-height: 130px;
      overflow-y: auto;
      border-radius: 10px;
      border: 1px solid #1f2937;
      padding: 6px;
      margin-bottom: 10px;
      background: #020617;
    }
    .client-item {
      font-size: 12px;
      padding: 4px 6px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    .client-item span.name {
      max-width: 160px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .client-item:hover {
      background: #0f172a;
    }
    .client-item.active {
      background: #0ea5e9;
      color: #020617;
    }
    .badge-status {
      font-size: 10px;
      padding: 1px 6px;
      border-radius: 999px;
      border: 1px solid #4b5563;
    }
    .badge-status.ontrack { border-color:#22c55e;color:#bbf7d0;}
    .badge-status.alert { border-color:#f97316;color:#fed7aa;}
    .timeline {
      font-size: 11px;
      color: #9ca3af;
      margin-top: 6px;
    }
    .rev-list {
      font-size: 11px;
      color: #9ca3af;
      max-height: 120px;
      overflow-y: auto;
      border-radius: 10px;
      border: 1px solid #1f2937;
      padding: 6px;
      background:#020617;
    }
    .rev-item {
      border-bottom: 1px solid #111827;
      padding: 4px 2px;
    }
    .rev-item:last-child {
      border-bottom: none;
    }
  </style>
</head>
<body>
  <header>
    <div>
      <div class="title">
        Projeto Patrimonial Prime
        <span class="badge">APP LOCAL</span>
      </div>
      <div class="subtitle">Gilvan Oliveira · Consultor Especialista em Gestão de Patrimônio (CEA)</div>
    </div>
    <div class="small">
      Ferramenta conceitual de apoio à consultoria · Dados salvos apenas neste navegador
    </div>
  </header>

  <main>
    <!-- COLUNA ESQUERDA: CLIENTES + ENTREVISTA -->
    <section class="card">
      <h2>
        Área do Consultor · Entrevista & Cadastro
        <span class="tag">JÚNIOR</span>
      </h2>
      <p class="helper">
        Primeiro selecione um cliente existente ou crie um novo. Em seguida preencha a entrevista patrimonial.
      </p>

      <!-- Lista de clientes -->
      <div class="field-group">
        <label>Clientes salvos no navegador</label>
        <div class="client-list" id="listaClientes">
          <!-- Populado via JS -->
        </div>
        <div style="display:flex; gap:8px; margin-bottom:6px; flex-wrap:wrap;">
          <button type="button" class="primary" id="btnNovoCliente">+ Novo cliente</button>
          <button type="button" class="secondary" id="btnSalvarCliente">Salvar / Atualizar cliente</button>
          <button type="button" class="danger" id="btnExcluirCliente">Excluir cliente</button>
        </div>
        <div class="small" id="statusCliente">Nenhum cliente selecionado.</div>
      </div>

      <hr class="divider" />

      <!-- Formulário -->
      <form id="formProjeto">
        <div class="field-group">
          <label for="nomeCliente">Nome do cliente</label>
          <input id="nomeCliente" type="text" placeholder="Ex.: Roberto Silva" />
        </div>

        <div class="grid-3">
          <div class="field-group">
            <label for="idadeAtual">Idade atual</label>
            <input id="idadeAtual" type="number" min="18" max="100" />
          </div>
          <div class="field-group">
            <label for="idadeApos">Idade desejada para aposentadoria</label>
            <input id="idadeApos" type="number" min="40" max="100" />
          </div>
          <div class="field-group">
            <label for="dependentes">Nº de dependentes</label>
            <input id="dependentes" type="number" min="0" max="10" />
          </div>
        </div>

        <div class="grid-3">
          <div class="field-group">
            <label for="rendaTitular">Renda mensal titular (R$)</label>
            <input id="rendaTitular" type="number" min="0" step="100" />
          </div>
          <div class="field-group">
            <label for="rendaConjuge">Renda mensal cônjuge (R$)</label>
            <input id="rendaConjuge" type="number" min="0" step="100" />
          </div>
          <div class="field-group">
            <label for="outrasRendas">Outras rendas mensais (R$)</label>
            <input id="outrasRendas" type="number" min="0" step="100" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-group">
            <label for="custoVida">Custo de vida mensal da família (R$)</label>
            <input id="custoVida" type="number" min="0" step="100" />
          </div>
          <div class="field-group">
            <label for="tempoSuporte">Tempo de suporte desejado em caso de ausência (anos)</label>
            <input id="tempoSuporte" type="number" min="1" max="50" />
          </div>
        </div>

        <div class="grid-3">
          <div class="field-group">
            <label for="patrimonioImob">Patrimônio imobilizado total (R$)</label>
            <input id="patrimonioImob" type="number" min="0" step="10000" />
          </div>
          <div class="field-group">
            <label for="dividas">Dívidas totais (R$)</label>
            <input id="dividas" type="number" min="0" step="1000" />
          </div>
          <div class="field-group">
            <label for="metaRendaApos">Meta de renda na aposentadoria (R$/mês)</label>
            <input id="metaRendaApos" type="number" min="0" step="1000" />
          </div>
        </div>

        <div class="grid-3">
          <div class="field-group">
            <label for="saldoBradesco">Recursos no Bradesco (R$)</label>
            <input id="saldoBradesco" type="number" min="0" step="1000" />
          </div>
          <div class="field-group">
            <label for="saldoOutras">Recursos em outras instituições (R$)</label>
            <input id="saldoOutras" type="number" min="0" step="1000" />
          </div>
          <div class="field-group">
            <label for="saldoExterior">Recursos no exterior (R$)</label>
            <input id="saldoExterior" type="number" min="0" step="1000" />
          </div>
        </div>

        <div class="grid-2">
          <div class="field-group">
            <label for="muralhaPrev">Previdência atual (“muralha previdência”) (R$)</label>
            <input id="muralhaPrev" type="number" min="0" step="1000" />
          </div>
          <div class="field-group">
            <label for="muralhaSeg">Seguros atuais (“muralha seguro”) (R$)</label>
            <input id="muralhaSeg" type="number" min="0" step="1000" />
          </div>
        </div>

        <hr class="divider" />

        <div class="grid-3">
          <div class="field-group">
            <label for="ipca">IPCA anual (ex.: 0,04 = 4%)</label>
            <input id="ipca" type="number" step="0.001" value="0.04" />
          </div>
          <div class="field-group">
            <label for="taxaPrev">Taxa retorno previdência anual (ex.: 0,06)</label>
            <input id="taxaPrev" type="number" step="0.001" value="0.06" />
          </div>
          <div class="field-group">
            <label for="taxaSucessao">Taxa estimada de sucessão (ex.: 0,15 = 15%)</label>
            <input id="taxaSucessao" type="number" step="0.001" value="0.15" />
          </div>
        </div>

        <hr class="divider" />

        <div class="grid-3">
          <div class="field-group">
            <label for="aporteVida">Aporte anual Vida Inteira (R$)</label>
            <input id="aporteVida" type="number" min="0" step="1000" value="20000" />
          </div>
          <div class="field-group">
            <label for="anosVida">Anos de contribuição Vida Inteira</label>
            <input id="anosVida" type="number" min="1" max="30" value="10" />
          </div>
          <div class="field-group">
            <label for="capSegurado">Capital segurado inicial Vida Inteira (R$)</label>
            <input id="capSegurado" type="number" min="0" step="10000" value="300000" />
          </div>
        </div>

        <div style="margin-top:10px; display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <button type="button" class="primary" id="btnCalcular">Calcular projeto</button>
          <button type="reset" class="secondary" id="btnLimpar">Limpar formulário</button>
          <span class="small">Depois de calcular, use a coluna à direita para apresentar ao cliente e registrar a revisão trimestral.</span>
        </div>
      </form>
    </section>

    <!-- COLUNA DIREITA: DIAGNÓSTICO + REVISÃO -->
    <section class="card">
      <h2>
        Diagnóstico · Projeto do Reino & Revisões
        <span class="tag tag-alt">ESPECIALISTA</span>
      </h2>
      <p class="helper">
        Esta visão é para a conversa com o cliente: leitura do padrão de vida, lacunas, Vida Inteira e o compromisso de revisão a cada 3 meses.
      </p>

      <div class="result-grid" id="resumoCliente"></div>

      <h3>Lacuna de Liquidez e Legado</h3>
      <div class="pill-row">
        <span class="pill" id="pillNecessidade"></span>
        <span class="pill" id="pillMuralhas"></span>
      </div>
      <div class="result-grid" style="margin-bottom:10px;">
        <div class="result-card">
          <div class="label">Necessidade total (padrão de vida + sucessão + dívidas)</div>
          <div class="value" id="valNecessidade">–</div>
          <div class="note">Quanto a família precisaria em caso de ausência, para manter o estilo de vida e organizar a sucessão com calma.</div>
        </div>
        <div class="result-card">
          <div class="label">Muralhas atuais (previdência + seguros + reservas líquidas)</div>
          <div class="value" id="valMuralhas">–</div>
          <div class="note">Valor já existente hoje em proteção e liquidez.</div>
        </div>
        <div class="result-card">
          <div class="label">Lacuna de liquidez</div>
          <div class="value" id="valLacunaLiquidez">–</div>
          <div class="note" id="noteLacunaLiquidez"></div>
        </div>
      </div>

      <h3>Lacuna de Aposentadoria</h3>
      <div class="result-grid" style="margin-bottom:10px;">
        <div class="result-card">
          <div class="label">Meta de renda corrigida na aposentadoria</div>
          <div class="value" id="valMetaCorrigida">–</div>
          <div class="note">Renda alvo ajustada pelo IPCA até a idade desejada.</div>
        </div>
        <div class="result-card">
          <div class="label">Capital necessário para aposentadoria</div>
          <div class="value" id="valNecessarioApos">–</div>
          <div class="note">Valor estimado para sustentar 20 anos de aposentadoria no padrão desejado.</div>
        </div>
        <div class="result-card">
          <div class="label">Lacuna de aposentadoria</div>
          <div class="value" id="valLacunaApos">–</div>
          <div class="note" id="noteLacunaApos"></div>
        </div>
        <div class="result-card">
          <div class="label">Aporte mensal sugerido em previdência</div>
          <div class="value" id="valAportePrev">–</div>
          <div class="note">Valor aproximado para construir a “muralha previdenciária” dentro do prazo.</div>
        </div>
      </div>

      <h3>Estratégia Vida Inteira (Planejamento Sucessório)</h3>
      <div class="result-grid" style="margin-bottom:10px;">
        <div class="result-card">
          <div class="label">Total aportado ao longo dos anos (nominal)</div>
          <div class="value" id="valTotalAportado">–</div>
          <div class="note">Soma dos aportes anuais, sem considerar correção.</div>
        </div>
        <div class="result-card">
          <div class="label">Capital segurado projetado</div>
          <div class="value" id="valCapProj">–</div>
          <div class="note">Capital de proteção estimado, corrigido pelo IPCA no horizonte escolhido.</div>
        </div>
        <div class="result-card">
          <div class="label">Alavancagem da proteção</div>
          <div class="value" id="valAlavancagem">–</div>
          <div class="note">Relação entre o que o cliente aporta e o que a família recebe em caso de ausência.</div>
        </div>
      </div>

      <h3>Compromisso de Revisão Trimestral</h3>
      <p class="helper">
        Use este espaço para registrar cada revisão a cada 3 meses. Isso reforça que o cliente está sendo assistido continuamente.
      </p>
      <div class="grid-2">
        <div>
          <div class="field-group">
            <label for="revData">Data da revisão</label>
            <input id="revData" type="date" />
          </div>
          <div class="grid-2">
            <div class="field-group">
              <label for="revSaldoBradesco">Saldo Bradesco (R$)</label>
              <input id="revSaldoBradesco" type="number" min="0" step="1000" />
            </div>
            <div class="field-group">
              <label for="revSaldoOutras">Saldo outras instituições (R$)</label>
              <input id="revSaldoOutras" type="number" min="0" step="1000" />
            </div>
          </div>
          <div class="grid-2">
            <div class="field-group">
              <label for="revSaldoPrev">Saldo previdência (R$)</label>
              <input id="revSaldoPrev" type="number" min="0" step="1000" />
            </div>
            <div class="field-group">
              <label for="revSaldoSeg">Valor de reserva seguro resgatável (R$)</label>
              <input id="revSaldoSeg" type="number" min="0" step="1000" />
            </div>
          </div>
          <div class="field-group">
            <label for="revComentario">Resumo da revisão</label>
            <textarea id="revComentario" rows="3" placeholder="Ex.: Aumentamos aportes, migramos fundo X para Y, mantida estratégia de Vida Inteira..."></textarea>
          </div>
          <button type="button" class="primary" id="btnSalvarRevisao">Salvar revisão trimestral</button>
        </div>
        <div>
          <div class="result-card">
            <div class="label">Linha do tempo do projeto</div>
            <div class="note timeline" id="timelineProjeto">
              Nenhuma revisão registrada ainda. Depois da primeira, este espaço mostrará a evolução do relacionamento.
            </div>
          </div>
          <div class="field-group" style="margin-top:8px;">
            <label>Histórico de revisões</label>
            <div class="rev-list" id="listaRevisoes">
              <!-- Preenchido via JS -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div>Ferramenta conceitual de apoio à consultoria. Não substitui documentos oficiais dos produtos e regulamentos Bradesco.</div>
    <div>Projeto Patrimonial Prime · Dados armazenados localmente no navegador do consultor.</div>
  </footer>

  <script>
    const STORAGE_KEY = "ppp_clientes_v1";

    function formatCurrency(value) {
      if (isNaN(value)) return "–";
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    }

    function pmt(rate, nper, pv, fv, type) {
      if (rate === 0) {
        return (pv + fv) / nper * -1;
      }
      const pow = Math.pow(1 + rate, nper);
      const pmtVal = - (rate * (fv + pow * pv)) / ((-1 + pow) * (1 + rate * (type || 0)));
      return pmtVal;
    }

    function getNum(id) {
      const el = document.getElementById(id);
      if (!el) return 0;
      const v = parseFloat(el.value.replace(",", "."));
      return isNaN(v) ? 0 : v;
    }

    function loadClients() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
      } catch(e) {
        console.error(e);
        return [];
      }
    }

    function saveClients(list) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }

    let currentClientId = null;

    function renderClientList() {
      const listDiv = document.getElementById("listaClientes");
      const status = document.getElementById("statusCliente");
      const clients = loadClients();
      listDiv.innerHTML = "";
      if (clients.length === 0) {
        listDiv.innerHTML = "<div class='small'>Nenhum cliente cadastrado ainda.</div>";
        status.textContent = "Nenhum cliente selecionado.";
        currentClientId = null;
        return;
      }
      clients.forEach(c => {
        const div = document.createElement("div");
        div.className = "client-item" + (c.id === currentClientId ? " active" : "");
        const nameSpan = document.createElement("span");
        nameSpan.className = "name";
        nameSpan.textContent = c.nome || "Sem nome";
        const badge = document.createElement("span");
        badge.className = "badge-status " + (c.status === "em acompanhamento" ? "ontrack" : "alert");
        badge.textContent = c.status === "em acompanhamento" ? "Em acompanhamento" : "Rascunho";
        div.appendChild(nameSpan);
        div.appendChild(badge);
        div.addEventListener("click", () => {
          currentClientId = c.id;
          fillFormFromClient(c);
          renderClientList();
          document.getElementById("statusCliente").textContent =
            "Cliente selecionado: " + (c.nome || "Sem nome") + " · Status: " + (c.status || "rascunho");
          if (c.lastCalc) {
            renderResults(c.lastCalc);
          } else {
            clearResults();
          }
          renderRevisions(c);
        });
        listDiv.appendChild(div);
      });
    }

    function clearForm() {
      document.getElementById("formProjeto").reset();
    }

    function newClient() {
      clearForm();
      currentClientId = null;
      document.getElementById("statusCliente").textContent =
        "Novo cliente em edição (ainda não salvo).";
      clearResults();
      document.getElementById("listaRevisoes").innerHTML = "<div class='small'>Nenhuma revisão registrada ainda.</div>";
      document.getElementById("timelineProjeto").textContent =
        "Nenhuma revisão registrada ainda. Depois da primeira, este espaço mostrará a evolução do relacionamento.";
    }

    function collectFormData() {
      return {
        id: currentClientId || Date.now(),
        nome: document.getElementById("nomeCliente").value || "",
        idadeAtual: getNum("idadeAtual"),
        idadeApos: getNum("idadeApos"),
        dependentes: getNum("dependentes"),
        rendaTitular: getNum("rendaTitular"),
        rendaConjuge: getNum("rendaConjuge"),
        outrasRendas: getNum("outrasRendas"),
        custoVida: getNum("custoVida"),
        tempoSuporte: getNum("tempoSuporte"),
        patrimonioImob: getNum("patrimonioImob"),
        dividas: getNum("dividas"),
        metaRendaApos: getNum("metaRendaApos"),
        saldoBradesco: getNum("saldoBradesco"),
        saldoOutras: getNum("saldoOutras"),
        saldoExterior: getNum("saldoExterior"),
        muralhaPrev: getNum("muralhaPrev"),
        muralhaSeg: getNum("muralhaSeg"),
        ipca: getNum("ipca"),
        taxaPrev: getNum("taxaPrev"),
        taxaSucessao: getNum("taxaSucessao"),
        aporteVida: getNum("aporteVida"),
        anosVida: getNum("anosVida"),
        capSegurado: getNum("capSegurado"),
        status: "em acompanhamento",
        revisoes: []
      };
    }

    function fillFormFromClient(c) {
      document.getElementById("nomeCliente").value = c.nome || "";
      document.getElementById("idadeAtual").value = c.idadeAtual || "";
      document.getElementById("idadeApos").value = c.idadeApos || "";
      document.getElementById("dependentes").value = c.dependentes || "";
      document.getElementById("rendaTitular").value = c.rendaTitular || "";
      document.getElementById("rendaConjuge").value = c.rendaConjuge || "";
      document.getElementById("outrasRendas").value = c.outrasRendas || "";
      document.getElementById("custoVida").value = c.custoVida || "";
      document.getElementById("tempoSuporte").value = c.tempoSuporte || "";
      document.getElementById("patrimonioImob").value = c.patrimonioImob || "";
      document.getElementById("dividas").value = c.dividas || "";
      document.getElementById("metaRendaApos").value = c.metaRendaApos || "";
      document.getElementById("saldoBradesco").value = c.saldoBradesco || "";
      document.getElementById("saldoOutras").value = c.saldoOutras || "";
      document.getElementById("saldoExterior").value = c.saldoExterior || "";
      document.getElementById("muralhaPrev").value = c.muralhaPrev || "";
      document.getElementById("muralhaSeg").value = c.muralhaSeg || "";
      document.getElementById("ipca").value = c.ipca || 0.04;
      document.getElementById("taxaPrev").value = c.taxaPrev || 0.06;
      document.getElementById("taxaSucessao").value = c.taxaSucessao || 0.15;
      document.getElementById("aporteVida").value = c.aporteVida || 20000;
      document.getElementById("anosVida").value = c.anosVida || 10;
      document.getElementById("capSegurado").value = c.capSegurado || 300000;
    }

    function calcularProjeto(dados) {
      const rendaFamiliar = dados.rendaTitular + dados.rendaConjuge + dados.outrasRendas;
      const reservasLiquidas = dados.saldoBradesco + dados.saldoOutras + dados.saldoExterior;

      const necessidadePadroes = dados.custoVida * 12 * dados.tempoSuporte;
      const custoSucessao = dados.patrimonioImob * dados.taxaSucessao;
      const necessidadeTotal = necessidadePadroes + custoSucessao + dados.dividas;

      const muralhasTotais = dados.muralhaPrev + dados.muralhaSeg + reservasLiquidas;
      const lacunaLiquidez = necessidadeTotal - muralhasTotais;

      const anosAteApos = Math.max(0, dados.idadeApos - dados.idadeAtual);
      const metaRendaCorrigida = dados.metaRendaApos * Math.pow(1 + dados.ipca, anosAteApos);
      const valorNecessarioApos = metaRendaCorrigida * 12 * 20;
      const lacunaAposentadoria = valorNecessarioApos - dados.muralhaPrev;

      let aporteMensalPrev = 0;
      if (anosAteApos > 0 && dados.taxaPrev >= 0) {
        const rateMensal = Math.pow(1 + dados.taxaPrev, 1 / 12) - 1;
        const nper = anosAteApos * 12;
        aporteMensalPrev = pmt(rateMensal, nper, -dados.muralhaPrev, valorNecessarioApos, 0);
      }

      const totalAportadoNominal = dados.aporteVida * dados.anosVida;
      const capSeguradoProj = dados.capSegurado * Math.pow(1 + dados.ipca, dados.anosVida);
      const alavancagem = (capSeguradoProj && totalAportadoNominal > 0)
        ? capSeguradoProj / totalAportadoNominal
        : 0;

      return {
        rendaFamiliar,
        reservasLiquidas,
        necessidadePadroes,
        custoSucessao,
        necessidadeTotal,
        muralhasTotais,
        lacunaLiquidez,
        anosAteApos,
        metaRendaCorrigida,
        valorNecessarioApos,
        lacunaAposentadoria,
        aporteMensalPrev,
        totalAportadoNominal,
        capSeguradoProj,
        alavancagem
      };
    }

    function clearResults() {
      document.getElementById('resumoCliente').innerHTML = "";
      document.getElementById('pillNecessidade').textContent = "";
      document.getElementById('pillMuralhas').textContent = "";
      document.getElementById('valNecessidade').textContent = "–";
      document.getElementById('valMuralhas').textContent = "–";
      document.getElementById('valLacunaLiquidez').textContent = "–";
      document.getElementById('noteLacunaLiquidez').textContent = "";
      document.getElementById('valMetaCorrigida').textContent = "–";
      document.getElementById('valNecessarioApos').textContent = "–";
      document.getElementById('valLacunaApos').textContent = "–";
      document.getElementById('noteLacunaApos').textContent = "";
      document.getElementById('valAportePrev').textContent = "–";
      document.getElementById('valTotalAportado').textContent = "–";
      document.getElementById('valCapProj').textContent = "–";
      document.getElementById('valAlavancagem').textContent = "–";
    }

    function renderResults(calc) {
      const nome = document.getElementById('nomeCliente').value || "Cliente";
      const idadeAtual = getNum('idadeAtual');
      const idadeApos = getNum('idadeApos');
      const dependentes = getNum('dependentes');
      const custoVida = getNum('custoVida');
      const tempoSuporte = getNum('tempoSuporte');

      const resumoDiv = document.getElementById('resumoCliente');
      resumoDiv.innerHTML = `
        <div class="result-card">
          <div class="label">Cliente</div>
          <div class="value">${nome}</div>
          <div class="note">Idade ${idadeAtual || "–"} · ${dependentes || 0} dependente(s) · Meta de aposentadoria aos ${idadeApos || "–"} anos.</div>
        </div>
        <div class="result-card">
          <div class="label">Renda familiar mensal estimada</div>
          <div class="value">${formatCurrency(calc.rendaFamiliar)}</div>
          <div class="note">Soma de titular, cônjuge e outras rendas.</div>
        </div>
        <div class="result-card">
          <div class="label">Patrimônio financeiro sob visão</div>
          <div class="value">${formatCurrency(calc.reservasLiquidas)}</div>
          <div class="note">Bradesco + outras instituições + exterior.</div>
        </div>
        <div class="result-card">
          <div class="label">Padrão de vida e horizonte de proteção</div>
          <div class="value">${formatCurrency(custoVida)} / mês · ${tempoSuporte || "–"} anos</div>
          <div class="note">Base para o cálculo da necessidade de liquidez em caso de ausência.</div>
        </div>
      `;

      document.getElementById('pillNecessidade').textContent =
        "Necessidade total em caso de ausência: " + formatCurrency(calc.necessidadeTotal);
      document.getElementById('pillMuralhas').textContent =
        "Muralhas atuais (proteção + liquidez): " + formatCurrency(calc.muralhasTotais);

      document.getElementById('valNecessidade').textContent = formatCurrency(calc.necessidadeTotal);
      document.getElementById('valMuralhas').textContent = formatCurrency(calc.muralhasTotais);
      document.getElementById('valLacunaLiquidez').textContent = formatCurrency(calc.lacunaLiquidez);

      const noteLiq = document.getElementById('noteLacunaLiquidez');
      if (calc.lacunaLiquidez <= 0) {
        noteLiq.innerHTML = "<span class='tag-ok'>Sua família já tem liquidez suficiente para o cenário definido.</span>";
      } else {
        noteLiq.innerHTML =
          "<span class='tag-alert'>Existe uma lacuna de liquidez a ser trabalhada com seguro, previdência e carteira de investimentos.</span>";
      }

      document.getElementById('valMetaCorrigida').textContent = formatCurrency(calc.metaRendaCorrigida);
      document.getElementById('valNecessarioApos').textContent = formatCurrency(calc.valorNecessarioApos);
      document.getElementById('valLacunaApos').textContent = formatCurrency(calc.lacunaAposentadoria);

      const noteApos = document.getElementById('noteLacunaApos');
      if (calc.lacunaAposentadoria <= 0) {
        noteApos.innerHTML = "<span class='tag-ok'>A muralha previdenciária atual já é suficiente para o objetivo informado.</span>";
      } else {
        noteApos.innerHTML =
          "<span class='tag-alert'>Há uma lacuna para a aposentadoria ideal. O aporte mensal sugerido é um ponto de partida para a conversa.</span>";
      }

      document.getElementById('valAportePrev').textContent = formatCurrency(calc.aporteMensalPrev);
      document.getElementById('valTotalAportado').textContent = formatCurrency(calc.totalAportadoNominal);
      document.getElementById('valCapProj').textContent = formatCurrency(calc.capSeguradoProj);
      document.getElementById('valAlavancagem').textContent =
        (!isFinite(calc.alavancagem) || calc.alavancagem === 0)
          ? "–"
          : "≈ " + calc.alavancagem.toFixed(2).replace(".", ",") + "x";
    }

    function renderRevisions(client) {
      const listDiv = document.getElementById("listaRevisoes");
      const timeline = document.getElementById("timelineProjeto");
      const revs = client.revisoes || [];
      if (revs.length === 0) {
        listDiv.innerHTML = "<div class='small'>Nenhuma revisão registrada ainda.</div>";
        timeline.textContent =
          "Nenhuma revisão registrada ainda. Depois da primeira, este espaço mostrará a evolução do relacionamento.";
        return;
      }
      listDiv.innerHTML = "";
      revs.slice().reverse().forEach(r => {
        const div = document.createElement("div");
        div.className = "rev-item";
        div.innerHTML = "<div><strong>" + (r.data || "Sem data") +
          "</strong> · Saldo total sob visão: " + formatCurrency(r.saldoTotal) + "</div>" +
          "<div>" + (r.comentario || "") + "</div>";
        listDiv.appendChild(div);
      });
      const primeira = revs[0];
      const ultima = revs[revs.length - 1];
      timeline.textContent =
        "Projeto iniciado em " + (primeira.data || "–") +
        " · última revisão em " + (ultima.data || "–") +
        ". Recomendado manter o ciclo de revisão a cada 3 meses.";
    }

    document.getElementById("btnNovoCliente").addEventListener("click", () => {
      newClient();
      renderClientList();
    });

    document.getElementById("btnSalvarCliente").addEventListener("click", () => {
      const dados = collectFormData();
      let clients = loadClients();
      const idx = clients.findIndex(c => c.id === dados.id);
      if (idx >= 0) {
        // preservar revisões existentes
        dados.revisoes = clients[idx].revisoes || [];
        dados.lastCalc = clients[idx].lastCalc || null;
        clients[idx] = dados;
      } else {
        clients.push(dados);
      }
      currentClientId = dados.id;
      saveClients(clients);
      document.getElementById("statusCliente").textContent =
        "Cliente salvo: " + (dados.nome || "Sem nome") + ". Agora você pode calcular o projeto.";
      renderClientList();
    });

    document.getElementById("btnExcluirCliente").addEventListener("click", () => {
      if (!currentClientId) {
        alert("Selecione um cliente para excluir.");
        return;
      }
      if (!confirm("Tem certeza que deseja excluir este cliente do aplicativo local?")) return;
      let clients = loadClients();
      clients = clients.filter(c => c.id !== currentClientId);
      saveClients(clients);
      currentClientId = null;
      newClient();
      renderClientList();
    });

    document.getElementById("btnCalcular").addEventListener("click", () => {
      const nome = document.getElementById("nomeCliente").value.trim();
      if (!nome) {
        alert("Preencha pelo menos o nome do cliente antes de calcular.");
        return;
      }
      const dados = collectFormData();
      const calc = calcularProjeto(dados);
      renderResults(calc);

      // salvar calc no cliente
      let clients = loadClients();
      const idx = clients.findIndex(c => c.id === dados.id);
      if (idx >= 0) {
        clients[idx] = { ...clients[idx], ...dados, lastCalc: calc };
      } else {
        dados.lastCalc = calc;
        clients.push(dados);
      }
      currentClientId = dados.id;
      saveClients(clients);
      renderClientList();
      document.getElementById("statusCliente").textContent =
        "Projeto calculado para " + (nome || "cliente") + ". Use a coluna da direita para conduzir a reunião.";
    });

    document.getElementById("btnLimpar").addEventListener("click", () => {
      clearResults();
    });

    document.getElementById("btnSalvarRevisao").addEventListener("click", () => {
      if (!currentClientId) {
        alert("Selecione um cliente antes de registrar a revisão.");
        return;
      }
      const data = document.getElementById("revData").value;
      const saldoBradesco = getNum("revSaldoBradesco");
      const saldoOutras = getNum("revSaldoOutras");
      const saldoPrev = getNum("revSaldoPrev");
      const saldoSeg = getNum("revSaldoSeg");
      const comentario = document.getElementById("revComentario").value;

      const saldoTotal = saldoBradesco + saldoOutras + saldoPrev + saldoSeg;
      const rev = { data, saldoBradesco, saldoOutras, saldoPrev, saldoSeg, saldoTotal, comentario };

      let clients = loadClients();
      const idx = clients.findIndex(c => c.id === currentClientId);
      if (idx < 0) {
        alert("Cliente não encontrado ao salvar revisão.");
        return;
      }
      if (!clients[idx].revisoes) clients[idx].revisoes = [];
      clients[idx].revisoes.push(rev);
      saveClients(clients);
      renderRevisions(clients[idx]);
      document.getElementById("revComentario").value = "";
      document.getElementById("revSaldoBradesco").value = "";
      document.getElementById("revSaldoOutras").value = "";
      document.getElementById("revSaldoPrev").value = "";
      document.getElementById("revSaldoSeg").value = "";
      document.getElementById("revData").value = "";
      alert("Revisão registrada com sucesso para este cliente.");
    });

    // Inicializar
    renderClientList();
    clearResults();
  </script>
</body>
</html>
```
