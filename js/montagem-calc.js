/* Páginas de montagem metálica — abas, botões segmentados e calculadoras.
   Regra do site: o HTML já nasce completo (todas as abas visíveis, resultado
   inicial escrito). O JS só organiza em abas e recalcula. */
(function () {
  'use strict';

  var fmt = function (n, d) {
    return Number(n).toLocaleString('pt-BR', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  };
  var num = function (el, def) {
    var v = parseFloat(String(el && el.value || '').replace(',', '.'));
    return isFinite(v) && v > 0 ? v : def;
  };

  /* ---------- abas ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-tabs]'), function (box) {
    var btns = box.querySelectorAll('[role=tab]');
    var panels = box.querySelectorAll('[role=tabpanel]');
    var abrir = function (i, foco) {
      Array.prototype.forEach.call(btns, function (b, j) {
        b.setAttribute('aria-selected', i === j ? 'true' : 'false');
        b.tabIndex = i === j ? 0 : -1;
        if (i === j && foco) b.focus();
      });
      Array.prototype.forEach.call(panels, function (p, j) { p.hidden = i !== j; });
    };
    Array.prototype.forEach.call(btns, function (b, i) {
      b.addEventListener('click', function () { abrir(i); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') abrir((i + 1) % btns.length, true);
        if (e.key === 'ArrowLeft') abrir((i - 1 + btns.length) % btns.length, true);
      });
    });
    abrir(0);
  });

  /* ---------- botões segmentados (valor em data-v) ---------- */
  var segVal = function (form, nome) {
    var b = form.querySelector('[data-seg="' + nome + '"] [aria-pressed=true]');
    return b ? b.getAttribute('data-v') : null;
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-seg]'), function (grp) {
    grp.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || !grp.contains(b)) return;
      e.preventDefault();
      Array.prototype.forEach.call(grp.querySelectorAll('button'), function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      grp.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  var out = function (form, chave, texto) {
    var el = form.querySelector('[data-out="' + chave + '"]');
    if (el) el.textContent = texto;
  };
  var pilaresGrade = function (a, b, vao) {
    return (Math.ceil(a / vao) + 1) * (Math.ceil(b / vao) + 1);
  };
  var G = 9.80665; // kN -> tf

  /* ---------- calculadoras ---------- */
  var CALC = {

    /* laje com fôrma de aço incorporada (steel deck) sobre vigas metálicas */
    laje: function (f) {
      var L = num(f.elements.comp, 8), W = num(f.elements.larg, 6);
      var uso = parseFloat(segVal(f, 'uso') || 1.5);          // sobrecarga NBR 6120, kN/m²
      var h = parseFloat(segVal(f, 'esp') || 12) / 100;         // espessura total, m
      var nerv = parseFloat(f.elements.forma.value || 0.075);  // altura da nervura, m
      var rev = 1.0;                                           // piso e revestimento, kN/m²
      var area = L * W;
      var consumo = Math.max(h - nerv / 2, 0.05);              // m³ de concreto por m²
      var pp = consumo * 25 + 0.12;                            // concreto + fôrma, kN/m²
      var q = pp + rev + uso;
      var vigas = Math.ceil(L / 2.5) + 1;                      // linhas de vigas secundárias
      out(f, 'area', fmt(area, 1) + ' m²');
      out(f, 'conc', fmt(area * consumo, 1) + ' m³');
      out(f, 'deck', fmt(area * 1.05, 0) + ' m²');
      out(f, 'q', fmt(q, 2) + ' kN/m²');
      out(f, 'qkg', '≈ ' + fmt(q * 1000 / G, 0) + ' kgf/m²');
      out(f, 'total', fmt(area * q / G, 1) + ' tf');
      out(f, 'vigas', vigas + ' linhas');
    },

    /* sobrado com esqueleto metálico */
    sobrado: function (f) {
      var ap = num(f.elements.area, 90);
      var pav = parseInt(segVal(f, 'pav') || 2, 10);
      var vao = parseFloat(segVal(f, 'vao') || 5);
      var faixa = { 4: [22, 30], 5: [26, 36], 6: [32, 44] }[vao] || [26, 36];
      var extraCob = segVal(f, 'cob') === 'metal' ? 1.1 : 1.0;
      var a = Math.sqrt(ap / 1.5), b = a * 1.5;                // planta retangular 1:1,5
      var total = ap * pav;
      var pil = pilaresGrade(a, b, vao);
      out(f, 'area', fmt(total, 0) + ' m²');
      out(f, 'pil', pil + ' pilares');
      out(f, 'aco', fmt(total * faixa[0] * extraCob / 1000, 1) + ' a ' + fmt(total * faixa[1] * extraCob / 1000, 1) + ' t');
      out(f, 'taxa', fmt(faixa[0], 0) + '–' + fmt(faixa[1], 0) + ' kg/m²');
      out(f, 'dims', '≈ ' + fmt(a, 1) + ' × ' + fmt(b, 1) + ' m');
    },

    /* mezanino dentro de galpão ou loja */
    mezanino: function (f) {
      var L = num(f.elements.comp, 10), W = num(f.elements.larg, 5);
      var uso = parseFloat(segVal(f, 'uso') || 2.5);
      var piso = parseFloat(segVal(f, 'piso') || 0.5);         // peso do piso, kN/m²
      var vao = parseFloat(segVal(f, 'vao') || 5);
      var estr = 0.35;                                         // vigas e pilares, kN/m²
      var area = L * W, q = uso + piso + estr;
      var pil = pilaresGrade(L, W, vao);
      // área de influência do pilar mais carregado: interno se houver, senão de borda
      var nx = Math.ceil(L / vao), ny = Math.ceil(W / vao);
      var sx = L / nx, sy = W / ny;
      var trib = (nx > 1 ? sx : sx / 2) * (ny > 1 ? sy : sy / 2);
      out(f, 'area', fmt(area, 1) + ' m²');
      out(f, 'pil', pil + ' pilares');
      out(f, 'q', fmt(q, 2) + ' kN/m²');
      out(f, 'total', fmt(area * q / G, 1) + ' tf');
      out(f, 'ppil', '≈ ' + fmt(trib * q / G, 1) + ' tf');
    },

    /* peso de perfis e chapas: geometria × 7.850 kg/m³ */
    perfil: function (f) {
      var tipo = f.elements.tipo.value;
      var d = function (n, def) { return num(f.elements[n], def); };
      var kgm = 0, nome = '';
      Array.prototype.forEach.call(f.querySelectorAll('[data-para]'), function (el) {
        el.hidden = el.getAttribute('data-para').split(' ').indexOf(tipo) === -1;
      });
      if (tipo === 'w') {
        kgm = parseFloat(f.elements.w.value); nome = f.elements.w.options[f.elements.w.selectedIndex].text.split(' ')[0];
      } else {
        var t = d('t', 3), A = 0;                              // área da seção, mm²
        if (tipo === 'tubo') { var B = d('b', 50), H = d('h', 50); A = 2 * t * (B + H) - 4 * t * t; nome = 'Tubo ' + B + '×' + H + '×' + t; }
        if (tipo === 'red') { var D = d('b', 60.3); A = Math.PI * (D - t) * t; nome = 'Tubo Ø' + D + '×' + t; }
        if (tipo === 'ue') { var h = d('h', 150), b = d('b', 60), e = d('e', 20); A = t * (h + 2 * b + 2 * e - 4 * t); nome = 'Ue ' + h + '×' + b + '×' + e + '×' + t; }
        if (tipo === 'l') { var a = d('b', 50); A = t * (2 * a - t); nome = 'L ' + a + '×' + t; }
        if (tipo === 'chapa') { var w = d('b', 300); A = w * t; nome = 'Chapa ' + w + '×' + t; }
        if (tipo === 'barra') { var db = d('b', 16); A = Math.PI * db * db / 4; nome = 'Barra Ø' + db; }
        kgm = A * 0.00785;
      }
      var comp = d('comp', 6), qtd = Math.max(1, Math.round(d('qtd', 1)));
      out(f, 'nome', nome);
      out(f, 'kgm', fmt(kgm, 2) + ' kg/m');
      out(f, 'peca', fmt(kgm * comp, 1) + ' kg');
      out(f, 'total', fmt(kgm * comp * qtd, 1) + ' kg');
      out(f, 'ton', fmt(kgm * comp * qtd / 1000, 3) + ' t');
    }
  };

  Array.prototype.forEach.call(document.querySelectorAll('form[data-calc]'), function (f) {
    var fn = CALC[f.getAttribute('data-calc')];
    if (!fn) return;
    var run = function () { fn(f); };
    f.addEventListener('input', run);
    f.addEventListener('change', run);
    f.addEventListener('submit', function (e) { e.preventDefault(); run(); });
    run();
  });
})();
