/* Meta Pixel — Sistema NR13.
   Carrega o fbevents.js, dispara PageView em todas as páginas e marca as conversões
   do site: clique no checkout da Kiwify (InitiateCheckout) e clique no WhatsApp (Lead).
   A página do sistema também dispara ViewContent, para separá-la do tráfego de blog. */
(function () {
  'use strict';

  var PIXEL_ID = '1624371105202459';

  /* ---- snippet base da Meta (não alterar: é o loader oficial) ---- */
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/pt_BR/fbevents.js');

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  /* ---- ViewContent na página do sistema ---- */
  if (/sistema-nr13\.html$/.test(location.pathname)) {
    fbq('track', 'ViewContent', {
      content_name: 'Sistema NR13',
      content_category: 'Software NR-13',
      content_type: 'product'
    });
  }

  /* ---- conversões por clique ----
     Delegação no documento: pega os links que já existem e qualquer um inserido depois. */
  document.addEventListener('click', function (e) {
    var alvo = e.target;
    var link = alvo && alvo.closest ? alvo.closest('a[href]') : null;
    if (!link) return;

    var href = link.getAttribute('href') || '';

    if (href.indexOf('pay.kiwify.com.br') !== -1) {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Assinatura Sistema NR13',
        content_type: 'product',
        currency: 'BRL'
      });
      return;
    }

    if (href.indexOf('wa.me/') !== -1 || href.indexOf('api.whatsapp.com') !== -1) {
      fbq('track', 'Lead', {
        content_name: 'WhatsApp',
        content_category: document.title
      });
    }
  }, true);
})();
