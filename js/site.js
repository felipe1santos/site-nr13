/* Sistema NR13 — comportamento do site.
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

  /* ---- reveal no scroll ----
     Só entra em cena se o IntersectionObserver existir e o usuário não pedir
     menos movimento. O estado escondido depende da classe .js-anim no <html>,
     então página sem JS nasce com tudo visível. */
  var reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var alvos = document.querySelectorAll('[data-reveal]');
  if (alvos.length) {
    if (reduz || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js-anim');
      for (var i = 0; i < alvos.length; i++) alvos[i].classList.add('is-in');
    } else {
      var obs = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          obs.unobserve(e.target);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      for (var j = 0; j < alvos.length; j++) obs.observe(alvos[j]);

      /* Rede de segurança: o observer não dispara enquanto a aba está oculta, e
         qualquer falha dele deixaria a seção invisível. Depois de 3s, o que
         estiver acima da dobra aparece de qualquer forma. */
      setTimeout(function () {
        for (var k = 0; k < alvos.length; k++) {
          var r = alvos[k].getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            alvos[k].classList.add('is-in');
            obs.unobserve(alvos[k]);
          }
        }
      }, 3000);
    }
  }

  /* ---- abre o <details> da cidade quando a URL aponta pra seção ---- */
  if (location.hash === '#atendimento') {
    var primeira = document.querySelector('#atendimento .cidade-item');
    if (primeira) primeira.open = true;
  }
})();
