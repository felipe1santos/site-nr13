/* Sistema NR12 — Calculadora de nível de risco de máquina ou setor.
   Método HRN (Hazard Rating Number) para a pontuação de risco e o grafo de
   riscos da ABNT NBR 14153 / ISO 13849-1 para a categoria de segurança mínima
   do sistema de comando.

   Regra da casa: o HTML nasce com um resultado válido (preset inicial já
   calculado no servidor não existe aqui, então calculamos no primeiro paint).
   Sem JS, o bloco continua legível como tabela de referência. */
(function () {
  'use strict';

  var raiz = document.getElementById('calcRisco');
  if (!raiz) return;

  var WHATS = '5527992534407';

  /* ---- faixas do HRN ---- */
  var FAIXAS = [
    { max: 1,    nome: 'Risco desprezível',  classe: 'faixa-1', cor: '#62d69a',
      prazo: 'Sem ação corretiva obrigatória. Registre a avaliação no prontuário da máquina e reavalie na próxima inspeção periódica.' },
    { max: 5,    nome: 'Risco muito baixo',  classe: 'faixa-1', cor: '#62d69a',
      prazo: 'Mantenha sob monitoramento. Reavalie sempre que houver troca de ferramental, layout ou turno.' },
    { max: 10,   nome: 'Risco baixo',        classe: 'faixa-2', cor: '#b9d94f',
      prazo: 'Trate no plano de ação anual, junto com a revisão dos procedimentos de operação e manutenção.' },
    { max: 50,   nome: 'Risco significativo', classe: 'faixa-3', cor: '#f2c12e',
      prazo: 'Ação corretiva no plano de 90 dias. A máquina opera, mas com procedimento de trabalho restrito e operador treinado.' },
    { max: 100,  nome: 'Risco alto',         classe: 'faixa-4', cor: '#ff8547',
      prazo: 'Ação prioritária em até 30 dias. Enquanto a proteção não entra, restrinja o acesso à zona de perigo por barreira física provisória.' },
    { max: 500,  nome: 'Risco muito alto',   classe: 'faixa-5', cor: '#ff6b4a',
      prazo: 'Ação imediata. Reduza a exposição hoje: bloqueio de energia (lockout/tagout), acesso restrito e operação apenas sob autorização formal.' },
    { max: 1000, nome: 'Risco extremo',      classe: 'faixa-6', cor: '#ff4d4d',
      prazo: 'Pare o equipamento. A operação só deve voltar depois da medida de proteção instalada e validada por profissional habilitado, com ART.' },
    { max: Infinity, nome: 'Risco inaceitável', classe: 'faixa-6', cor: '#ff4d4d',
      prazo: 'Interdição técnica. Equipamento fora de operação até a adequação completa, com apreciação de risco formal e laudo assinado.' }
  ];

  /* ---- categoria de segurança: grafo de riscos NBR 14153 ---- */
  var CATEGORIA = {
    '1-1-1': 'B', '1-1-2': '1', '1-2-1': '1', '1-2-2': '2',
    '2-1-1': '2', '2-1-2': '3', '2-2-1': '3', '2-2-2': '4'
  };
  var CAT_TXT = {
    'B': 'Componentes do sistema de comando conforme o estado da técnica, capazes de suportar as influências esperadas. Proteção fixa e sinalização resolvem a maior parte dos casos.',
    '1': 'Componentes bem testados e princípios de segurança comprovados. Proteções fixas, distâncias de segurança conforme a NBR ISO 13857 e partida em condição segura.',
    '2': 'A função de segurança precisa ser verificada em intervalos adequados pelo próprio comando. Proteção móvel com chave de segurança e verificação periódica automática.',
    '3': 'Uma falha isolada não pode levar à perda da função de segurança. Exige redundância: chaves com contato de abertura positiva em canal duplo, relé de segurança e cortina de luz.',
    '4': 'A falha isolada precisa ser detectada no momento em que ocorre ou antes da próxima solicitação da função. Arquitetura redundante com autodiagnóstico — relé ou CLP de segurança, monitoramento e comando bimanual.'
  };

  /* ---- medidas recomendadas por perfil de risco ---- */
  function medidas(cat, hrn, eletrico) {
    var m = [];
    m.push('Apreciação de risco formal da máquina conforme ABNT NBR ISO 12100, com registro no prontuário.');
    if (cat === 'B' || cat === '1') {
      m.push('Proteção fixa no ponto de operação e nas transmissões de força, com fixação que exija ferramenta para remoção.');
      m.push('Distâncias de segurança verificadas conforme ABNT NBR ISO 13857.');
    } else if (cat === '2') {
      m.push('Proteção móvel intertravada com chave de segurança e verificação periódica da função pelo comando.');
      m.push('Parada de emergência acessível de qualquer posição de operação, conforme item 12.56 da NR-12.');
    } else if (cat === '3') {
      m.push('Intertravamento redundante em canal duplo com relé de segurança monitorando as chaves.');
      m.push('Cortina de luz ou scanner de área na zona de alimentação, com distância mínima calculada pelo tempo de parada.');
      m.push('Medição do tempo de parada total da máquina para dimensionar a distância de segurança.');
    } else {
      m.push('Sistema de comando em categoria 4 / PL e: redundância com autodiagnóstico por relé ou CLP de segurança.');
      m.push('Cortina de luz com muting, comando bimanual e monitoramento de válvula quando houver acionamento hidráulico ou pneumático.');
      m.push('Medição do tempo de parada total e validação da função de segurança antes da liberação para operação.');
    }
    m.push('Procedimento de bloqueio e etiquetagem de energias (lockout/tagout) para manutenção, limpeza e set-up.');
    if (hrn > 50) {
      m.push('Plano de ação com prazo, responsável e verificação de eficácia — é o documento que a fiscalização cobra junto com o laudo.');
    }
    if (eletrico) {
      m.push('Prontuário de Instalações Elétricas atualizado e análise de risco elétrico conforme a NR-10, incluindo arco elétrico e choque.');
      m.push('Treinamento NR-10 básico válido para quem opera e complementar SEP quando houver sistema elétrico de potência.');
    } else {
      m.push('Manual de instruções, sinalização de segurança conforme ABNT NBR 7195 e capacitação documentada do operador.');
    }
    m.push('Laudo técnico de conformidade NR-12 assinado por profissional legalmente habilitado, com ART registrada no CREA.');
    return m;
  }

  /* ---- presets por tipo de máquina ou setor ---- */
  var PRESETS = {
    prensa:      { S: 2, F: 2, P: 2, LO: 4,   FE: 4,   DPH: 8,  NP: 1, el: false },
    guilhotina:  { S: 2, F: 2, P: 2, LO: 2.5, FE: 2.5, DPH: 8,  NP: 1, el: false },
    serra:       { S: 2, F: 2, P: 2, LO: 4,   FE: 4,   DPH: 4,  NP: 1, el: false },
    torno:       { S: 2, F: 2, P: 1, LO: 2.5, FE: 2.5, DPH: 2,  NP: 1, el: false },
    injetora:    { S: 2, F: 1, P: 2, LO: 1.5, FE: 1.5, DPH: 8,  NP: 1, el: false },
    calandra:    { S: 2, F: 2, P: 2, LO: 2.5, FE: 4,   DPH: 4,  NP: 1, el: false },
    transporte:  { S: 2, F: 1, P: 2, LO: 1.5, FE: 1,   DPH: 4,  NP: 2, el: false },
    bancada:     { S: 1, F: 2, P: 2, LO: 2.5, FE: 2.5, DPH: 0.5, NP: 1, el: false },
    icamento:    { S: 2, F: 1, P: 2, LO: 1.5, FE: 1,   DPH: 15, NP: 2, el: false },
    eletrico:    { S: 2, F: 1, P: 2, LO: 1.5, FE: 1.5, DPH: 15, NP: 1, el: true  },
    empilhadeira:{ S: 2, F: 2, P: 2, LO: 1.5, FE: 2.5, DPH: 8,  NP: 2, el: false },
    alimentos:   { S: 2, F: 2, P: 2, LO: 2.5, FE: 4,   DPH: 2,  NP: 2, el: false }
  };

  /* ---- elementos ---- */
  var elPreset = document.getElementById('cPreset');
  var selLO    = document.getElementById('cLO');
  var selFE    = document.getElementById('cFE');
  var selDPH   = document.getElementById('cDPH');
  var selNP    = document.getElementById('cNP');
  var outHRN   = document.getElementById('cHRN');
  var outFaixa = document.getElementById('cFaixa');
  var outArco  = document.getElementById('cArco');
  var outCat   = document.getElementById('cCat');
  var outCatTx = document.getElementById('cCatTxt');
  var outPrazo = document.getElementById('cPrazo');
  var outMed   = document.getElementById('cMedidas');
  var outWa    = document.getElementById('cWhats');
  var outCaixa = raiz.querySelector('.calc-out');

  function radio(nome) {
    var m = raiz.querySelector('input[name="' + nome + '"]:checked');
    return m ? m.value : '1';
  }
  function setRadio(nome, valor) {
    var m = raiz.querySelector('input[name="' + nome + '"][value="' + valor + '"]');
    if (m) m.checked = true;
  }
  function faixaDe(hrn) {
    for (var i = 0; i < FAIXAS.length; i++) if (hrn <= FAIXAS[i].max) return FAIXAS[i];
    return FAIXAS[FAIXAS.length - 1];
  }
  /* escala logarítmica: 0,1 a 1000 cobre toda a faixa útil do HRN.
     Devolve a fração 0–1 da semicircunferência do medidor. */
  function fracao(hrn) {
    var v = Math.log(Math.max(hrn, 0.1) / 0.1) / Math.LN10 / 4;
    return Math.max(0.02, Math.min(1, v));
  }

  /* comprimento da semicircunferência de raio 106 do <path> do medidor */
  var ARCO = Math.PI * 106;

  /* ---- fluxograma ---- */
  var caminhos = raiz.querySelectorAll('[data-caminho]');
  var selo = document.getElementById('fSelo');
  /* y de cada folha da árvore, na ordem S1F1P1 … S2F2P2 */
  var FOLHA_Y = [70, 115, 160, 205, 250, 295, 340, 385];
  var SELO_BASE = 385;

  var chainNum = {
    LO: document.getElementById('fLO'), FE: document.getElementById('fFE'),
    DPH: document.getElementById('fDPH'), NP: document.getElementById('fNP')
  };
  var chainTxt = {
    LO: document.getElementById('fLOtxt'), FE: document.getElementById('fFEtxt'),
    DPH: document.getElementById('fDPHtxt'), NP: document.getElementById('fNPtxt')
  };
  var fHRN = document.getElementById('fHRN');
  var fFaixa = document.getElementById('fFaixa');

  function num(sel) {
    var v = parseFloat(sel.value);
    return (Math.round(v * 10) / 10).toFixed(v < 10 ? 1 : 0).replace('.', ',');
  }
  function rotulo(sel) { return sel.options[sel.selectedIndex].text; }

  function desenharFluxo(S, F, P, hrnTexto, faixa) {
    if (!caminhos.length) return;
    var chave = S + '-' + F + '-' + P;
    for (var i = 0; i < caminhos.length; i++) {
      var el = caminhos[i];
      var pref = el.getAttribute('data-caminho');
      if (chave.indexOf(pref) === 0) el.classList.add('on');
      else el.classList.remove('on');
    }
    if (selo) {
      var idx = (S - 1) * 4 + (F - 1) * 2 + (P - 1);
      selo.setAttribute('transform', 'translate(0,' + (FOLHA_Y[idx] - SELO_BASE) + ')');
    }
    if (chainNum.LO) {
      chainNum.LO.textContent = num(selLO);   chainTxt.LO.textContent = rotulo(selLO);
      chainNum.FE.textContent = num(selFE);   chainTxt.FE.textContent = rotulo(selFE);
      chainNum.DPH.textContent = num(selDPH); chainTxt.DPH.textContent = rotulo(selDPH);
      chainNum.NP.textContent = num(selNP);   chainTxt.NP.textContent = rotulo(selNP);
      fHRN.textContent = hrnTexto;
      fFaixa.textContent = faixa.nome;
    }
  }

  function calcular() {
    var S = radio('cS'), F = radio('cF'), P = radio('cP');
    var hrn = parseFloat(selLO.value) * parseFloat(selFE.value) *
              parseFloat(selDPH.value) * parseFloat(selNP.value);
    var faixa = faixaDe(hrn);
    var cat = CATEGORIA[S + '-' + F + '-' + P] || '1';
    var preset = PRESETS[elPreset.value];
    var eletrico = !!(preset && preset.el);
    var nomeMaquina = elPreset.options[elPreset.selectedIndex].text;

    var mostrado = hrn >= 100 ? String(Math.round(hrn)) : String(Math.round(hrn * 10) / 10);
    outHRN.textContent = mostrado.replace('.', ',');   /* decimal em pt-BR */
    outFaixa.textContent = faixa.nome;
    outFaixa.className = 'calc-faixa ' + faixa.classe;
    if (outArco) {
      outArco.style.strokeDasharray = ARCO;
      outArco.style.strokeDashoffset = ARCO * (1 - fracao(hrn));
      outArco.style.stroke = faixa.cor;
    }
    if (outCaixa) outCaixa.style.setProperty('--risco-cor', faixa.cor);
    desenharFluxo(Number(S), Number(F), Number(P), outHRN.textContent, faixa);
    outCat.textContent = cat;
    outCatTx.textContent = CAT_TXT[cat];
    outPrazo.textContent = faixa.prazo;

    outMed.innerHTML = '';
    var lista = medidas(cat, hrn, eletrico);
    for (var i = 0; i < lista.length; i++) {
      var li = document.createElement('li');
      li.textContent = lista[i];
      outMed.appendChild(li);
    }

    var msg = 'Olá! Usei a calculadora de risco NR-12 do site.\n' +
              'Máquina/setor: ' + nomeMaquina + '\n' +
              'HRN: ' + outHRN.textContent + ' (' + faixa.nome + ')\n' +
              'Categoria de segurança sugerida: ' + cat + '\n' +
              'Quero falar sobre a adequação e o Sistema NR12.';
    outWa.href = 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(msg);
  }

  function aplicarPreset() {
    var p = PRESETS[elPreset.value];
    if (!p) return;
    setRadio('cS', p.S); setRadio('cF', p.F); setRadio('cP', p.P);
    selLO.value = p.LO; selFE.value = p.FE; selDPH.value = p.DPH; selNP.value = p.NP;
    calcular();
  }

  elPreset.addEventListener('change', aplicarPreset);
  raiz.addEventListener('change', function (e) {
    if (e.target === elPreset) return;
    calcular();
  });

  aplicarPreset();
})();
