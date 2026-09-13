/* hero-fx.js — malha técnica em perspectiva sobre a primeira dobra.
 *
 * Só roda nas landings do cluster de obras (body.pg-obras) e só depois que a
 * página terminou de carregar, para não disputar banda com o hero, que é o LCP.
 *
 * Desliga sozinho quando: não há WebGL, o visitante pediu movimento reduzido,
 * a tela é estreita, a aba está em segundo plano ou o hero saiu de vista.
 * Sem o efeito o hero continua correto — o canvas nasce com opacity 0.
 */
(function () {
  'use strict';

  var host = document.querySelector('.hero-fx');
  if (!host || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 900) return;

  var THREE = window.THREE;
  var renderer;

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch (e) {
    return;                                  // sem WebGL: o hero fica como está
  }

  var w = host.clientWidth, h = host.clientHeight;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(w, h);
  host.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
  camera.position.set(0, 2.4, 7.2);
  camera.lookAt(0, 0.2, 0);

  // ---- malha de pontos em perspectiva -------------------------------------
  var COLS = 46, ROWS = 26, STEP = 0.46;
  var total = COLS * ROWS;
  var pos = new Float32Array(total * 3);
  var base = new Float32Array(total);        // altura de referência de cada nó
  var i = 0;

  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      var x = (c - (COLS - 1) / 2) * STEP;
      var z = (r - (ROWS - 1) / 2) * STEP;
      pos[i * 3] = x;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = z;
      base[i] = Math.hypot(x, z);            // distância ao centro, para a onda
      i++;
    }
  }

  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  var pontos = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xf26522,                         // laranja de segurança do site
    size: 0.045,
    transparent: true,
    opacity: 0.62,
    sizeAttenuation: true
  }));
  scene.add(pontos);

  // ---- linhas horizontais ligando os nós ----------------------------------
  var idx = [];
  for (var rr = 0; rr < ROWS; rr++) {
    for (var cc = 0; cc < COLS - 1; cc++) {
      var a = rr * COLS + cc;
      idx.push(a, a + 1);
    }
  }
  var linhaGeo = new THREE.BufferGeometry();
  linhaGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  linhaGeo.setIndex(idx);
  var linhas = new THREE.LineSegments(linhaGeo, new THREE.LineBasicMaterial({
    color: 0x7ea8c9,
    transparent: true,
    opacity: 0.16
  }));
  scene.add(linhas);

  // ---- animação ------------------------------------------------------------
  var alvoX = 0, alvoY = 0, curX = 0, curY = 0;
  var visivel = true, rodando = true, t0 = performance.now(), raf;

  function onda(agora) {
    var t = (agora - t0) * 0.00055;
    for (var k = 0; k < total; k++) {
      pos[k * 3 + 1] = Math.sin(base[k] * 1.15 - t * 2.1) * 0.24
                     + Math.sin(pos[k * 3] * 0.5 + t * 1.4) * 0.09;
    }
    geo.attributes.position.needsUpdate = true;
    linhaGeo.attributes.position.needsUpdate = true;
  }

  function frame(agora) {
    raf = requestAnimationFrame(frame);
    if (!visivel || !rodando) return;

    onda(agora);
    curX += (alvoX - curX) * 0.045;          // segue o mouse com inércia
    curY += (alvoY - curY) * 0.045;
    pontos.rotation.x = linhas.rotation.x = -0.62 + curY * 0.06;
    pontos.rotation.y = linhas.rotation.y = curX * 0.10;
    renderer.render(scene, camera);
  }

  document.addEventListener('mousemove', function (e) {
    alvoX = (e.clientX / window.innerWidth) * 2 - 1;
    alvoY = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  window.addEventListener('resize', function () {
    w = host.clientWidth; h = host.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    rodando = !document.hidden;
  });

  if ('IntersectionObserver' in window) {     // para de desenhar fora da tela
    new IntersectionObserver(function (entradas) {
      visivel = entradas[0].isIntersecting;
    }, { threshold: 0.01 }).observe(host);
  }

  raf = requestAnimationFrame(frame);
  requestAnimationFrame(function () { host.classList.add('on'); });
})();
