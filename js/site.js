/* PREENCHER — nome fantasia, ex: Camargo Engenharia — comportamento do site.
   Regra: o HTML já nasce com conteúdo válido. O JS só melhora, nunca preenche vazio. */
(function () {
  'use strict';

  /* ---- menu mobile ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      toggle.textContent = aberto ? '✕' : '☰';
      document.body.style.overflow = aberto ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- ano do rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- badge de cidade por IP (conversão, não ranking) ----
     O HTML já traz "Atendemos em toda a Grande Vitória". Se o fetch falhar, fica isso. */
  var prefixo = document.getElementById('geoPrefixo');
  var cidadeEl = document.getElementById('geoCidade');
  if (prefixo && cidadeEl && 'fetch' in window) {
    var UF_ALVO = 'ES';
    var CIDADES = [
      'vitoria', 'vila velha', 'serra', 'cariacica', 'viana', 'guarapari', 'fundao',
      'anchieta', 'aracruz', 'linhares'
    ];
    var normalizar = function (s) {
      return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
    };
    var aplicar = function (cidade, uf) {
      if (!cidade) return;
      var presencial = uf === UF_ALVO && CIDADES.indexOf(normalizar(cidade)) !== -1;
      prefixo.textContent = presencial ? 'Atendemos em' : 'Atendemos online em';
      cidadeEl.textContent = cidade;
    };
    fetch('https://ipapi.co/json/')
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (d) { aplicar(d.city, d.region_code); })
      .catch(function () {
        return fetch('https://ipwho.is/')
          .then(function (r) { return r.json(); })
          .then(function (d) { aplicar(d.city, (d.region_code || '').toUpperCase()); })
          .catch(function () { /* mantém o texto padrão do HTML */ });
      });
  }

  /* ---- abre o <details> da cidade quando a URL aponta pra seção ---- */
  if (location.hash === '#atendimento') {
    var primeira = document.querySelector('#atendimento .cidade-item');
    if (primeira) primeira.open = true;
  }
})();
