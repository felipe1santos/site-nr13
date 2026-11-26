/* Documentação: o sumário marca a seção que está na tela e, no celular,
   fecha depois de escolher um item. Sem dependência. */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.docs-indice a[href^="#"]'));
  if (!links.length) return;
  var indice = document.querySelector('.docs-indice');
  var secoes = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);
  var celular = window.matchMedia('(max-width: 960px)');
  if (celular.matches && indice) indice.removeAttribute('open');

  function marcar(id) {
    links.forEach(function (a) { a.classList.toggle('is-ativo', a.getAttribute('href') === '#' + id); });
  }
  if ('IntersectionObserver' in window) {
    var visiveis = {};
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { visiveis[e.target.id] = e.isIntersecting; });
      for (var i = 0; i < secoes.length; i++) {
        if (visiveis[secoes[i].id]) { marcar(secoes[i].id); return; }
      }
    }, { rootMargin: '-90px 0px -70% 0px' });
    secoes.forEach(function (s) { obs.observe(s); });
  }
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      marcar(a.getAttribute('href').slice(1));
      if (celular.matches && indice) indice.removeAttribute('open');
    });
  });
})();
