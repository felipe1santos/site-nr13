/* Página do robô de atendimento: dúvidas em sanfona e globo girando em volta da ilustração do CTA.
   Sem biblioteca: o globo é uma esfera de pontos projetada em perspectiva num <canvas>. */
(function () {
  'use strict';

  /* ---- dúvidas: abrir uma fecha a anterior ---- */
  var faqs = [].slice.call(document.querySelectorAll('.ria-faq details'));
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---- ilustração do CTA: não arrasta, não abre menu de salvar ---- */
  [].slice.call(document.querySelectorAll('.ria-cta-ilu, .ria-cta-ilu img')).forEach(function (el) {
    el.addEventListener('dragstart', function (e) { e.preventDefault(); });
    el.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  });

  /* ---- globo ---- */
  var cv = document.querySelector('.ria-globo');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d');
  var reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* pontos numa esfera (espiral de Fibonacci) */
  var N = 420, pontos = [], i;
  for (i = 0; i < N; i++) {
    var y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
    pontos.push([Math.cos(th) * r, y, Math.sin(th) * r]);
  }

  var W, H, dpr, raio, ang = 0, visivel = true, rafId = null;
  function medir() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    raio = Math.min(W, H) * 0.42;
  }

  function proj(p, ry, rx) {
    var x = p[0] * Math.cos(ry) + p[2] * Math.sin(ry);
    var z = -p[0] * Math.sin(ry) + p[2] * Math.cos(ry);
    var y = p[1] * Math.cos(rx) - z * Math.sin(rx);
    z = p[1] * Math.sin(rx) + z * Math.cos(rx);
    var s = 3 / (3 + z);
    return { x: W / 2 + x * raio * s, y: H / 2 + y * raio * s, z: z, s: s };
  }

  function desenhar() {
    ctx.clearRect(0, 0, W, H);
    var ry = ang, rx = -0.32;
    /* esfera: pontos de trás apagados, da frente ficam escondidos atrás da bola branca */
    for (var k = 0; k < N; k++) {
      var q = proj(pontos[k], ry, rx);
      var frente = q.z < 0;
      ctx.globalAlpha = frente ? 0.42 : 0.14;
      ctx.fillStyle = frente ? '#ff8547' : '#93a6b8';
      ctx.beginPath(); ctx.arc(q.x, q.y, (frente ? 1.3 : 1) * q.s, 0, 6.283); ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function quadro() {
    ang += 0.0025;
    desenhar();
    rafId = visivel ? requestAnimationFrame(quadro) : null;
  }

  medir(); desenhar();
  window.addEventListener('resize', function () { medir(); desenhar(); });
  if (reduz) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      visivel = es[0].isIntersecting;
      if (visivel && !rafId) rafId = requestAnimationFrame(quadro);
    }).observe(cv);
  } else {
    rafId = requestAnimationFrame(quadro);
  }
})();
