/* Calculadora "meu padrão aguenta um wallbox?".
   Regra do site: o HTML já nasce com o resultado do cenário padrão escrito.
   O JS só recalcula quando o visitante muda os campos. */
(function () {
  'use strict';

  var form = document.querySelector('form[data-calc="wallbox"]');
  if (!form) return;

  var fmt = function (n, d) {
    return Number(n).toLocaleString('pt-BR', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  };
  var num = function (nome, def) {
    var el = form.querySelector('[name="' + nome + '"]');
    var v = parseFloat(String(el && el.value || '').replace(',', '.'));
    return isFinite(v) && v >= 0 ? v : def;
  };
  var seg = function (nome) {
    var b = form.querySelector('[data-seg="' + nome + '"] [aria-pressed=true]');
    return b ? b.getAttribute('data-v') : null;
  };
  var out = function (k, txt) {
    var el = form.querySelector('[data-out="' + k + '"]');
    if (el) el.textContent = txt;
  };

  // fator de tensão: potência aparente por ampère do disjuntor geral
  var FATOR = { mono127: 127, bi220: 220, tri220: 220 * Math.sqrt(3) };

  function calcular() {
    var lig = seg('lig') || 'bi220';
    var wb = parseFloat(seg('wb') || '7.4');
    var disj = num('disj', 63);
    var cargas = num('chuveiro', 5.5) + num('ar', 1.5) + num('outros', 1);

    var capacidade = disj * FATOR[lig] / 1000;      // kW nominais do disjuntor geral
    var util = capacidade * 0.8;                    // margem para carga contínua de horas
    var sobra = util - cargas;
    var wbReal = lig === 'mono127' ? Math.min(wb, 4) : wb;   // em 127 V o wallbox não passa de ~4 kW

    var veredito;
    if (sobra >= wbReal) veredito = 'Cabe com folga';
    else if (sobra >= 3) veredito = 'Cabe com corrente reduzida';
    else if (sobra > 0) veredito = 'Só fora do horário de pico';
    else veredito = 'Precisa de aumento de carga';

    out('cap', fmt(capacidade, 1) + ' kW');
    out('cargas', fmt(cargas, 1) + ' kW');
    out('sobra', (sobra > 0 ? fmt(sobra, 1) : '0') + ' kW');
    out('ver', veredito);
  }

  form.addEventListener('input', calcular);
  form.addEventListener('change', calcular);
  Array.prototype.forEach.call(form.querySelectorAll('[data-seg]'), function (box) {
    var bs = box.querySelectorAll('button');
    Array.prototype.forEach.call(bs, function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(bs, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        calcular();
      });
    });
  });
  calcular();
})();
