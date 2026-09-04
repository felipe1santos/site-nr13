/**
 * Auditoria de indexação — rodar na raiz do site:  node docs/auditar-indexacao.js
 *
 * Obrigatório antes de encerrar qualquer sessão de trabalho no site.
 * Ver LEIA-ME.md, seção "REGRA OBRIGATÓRIA — indexação".
 *
 * Verifica:
 *   1. toda página HTML indexável está no sitemap.xml;
 *   2. toda URL do sitemap.xml tem arquivo no disco;
 *   3. não há URL duplicada no sitemap;
 *   4. toda página nova aparece em docs/INDEXACAO.md;
 *   5. cada página tem canonical, um único <h1>, title e description dentro do limite.
 *
 * Sai com código 1 se encontrar problema — serve para uso em hook ou CI.
 */

const fs = require('fs');
const path = require('path');

const DOMINIO = 'https://nr13sistema.com.br/';
const IGNORAR_DIR = ['img', 'fonts', 'docs', 'js', 'css', 'node_modules', '.git'];

let problemas = 0;
const erro = (...a) => { console.log('  ✗', ...a); problemas++; };
const aviso = (...a) => console.log('  !', ...a);

function listarHtml(dir, acc = []) {
  for (const nome of fs.readdirSync(dir)) {
    const p = path.join(dir, nome);
    if (fs.statSync(p).isDirectory()) {
      if (IGNORAR_DIR.includes(nome)) continue;
      listarHtml(p, acc);
    } else if (nome.endsWith('.html')) {
      acc.push(path.relative('.', p).split(path.sep).join('/'));
    }
  }
  return acc;
}

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const indexacao = fs.existsSync('docs/INDEXACAO.md')
  ? fs.readFileSync('docs/INDEXACAO.md', 'utf8') : '';
const paginas = listarHtml('.');

console.log('\n1. Páginas indexáveis fora do sitemap');
for (const f of paginas) {
  const s = fs.readFileSync(f, 'utf8');
  if (/name="robots"[^>]*noindex/.test(s)) continue;      // noindex de propósito
  // index.html de qualquer pasta é canonicalizado pela forma com barra: "blog/index.html" → "blog/"
  const url = DOMINIO + f.replace(/(^|\/)index\.html$/, '$1');
  if (!locs.includes(url)) erro('FORA DO SITEMAP:', f, '(esperado ' + url + ')');
}

console.log('2. URLs do sitemap sem arquivo no disco');
for (const url of locs) {
  const rel = url.replace(DOMINIO, '');
  const alvo = rel === '' ? 'index.html' : (rel.endsWith('/') ? rel + 'index.html' : rel);
  if (!fs.existsSync(alvo)) erro('SITEMAP SEM ARQUIVO:', rel || '/');
}

console.log('3. URLs duplicadas no sitemap');
const vistos = new Set();
for (const url of locs) {
  if (vistos.has(url)) erro('DUPLICADA:', url);
  vistos.add(url);
}

console.log('4. Páginas sem linha em docs/INDEXACAO.md');
for (const f of paginas) {
  const s = fs.readFileSync(f, 'utf8');
  if (/name="robots"[^>]*noindex/.test(s)) continue;
  if (f === 'index.html') continue;                        // a home vive no controle geral
  if (!indexacao.includes(f)) erro('SEM REGISTRO EM INDEXACAO.md:', f);
}

console.log('5. Higiene de SEO por página');
for (const f of paginas) {
  const s = fs.readFileSync(f, 'utf8');
  const noindex = /name="robots"[^>]*noindex/.test(s);
  if (!/rel="canonical"/.test(s) && !noindex) erro('SEM CANONICAL:', f);

  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) erro('H1 =', h1, 'em', f);

  const t = s.match(/<title>([^<]*)<\/title>/);
  if (!t) erro('SEM TITLE:', f);
  else if (t[1].length > 65) aviso('title com', t[1].length, 'chars em', f);

  const d = s.match(/<meta name="description" content="([^"]*)"/);
  if (!d) erro('SEM DESCRIPTION:', f);
  else if (d[1].length > 175) aviso('description com', d[1].length, 'chars em', f);

  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { erro('JSON-LD inválido em', f, '—', e.message); }
  }
}

console.log('\n' + paginas.length + ' páginas · ' + locs.length + ' URLs no sitemap');
if (problemas) {
  console.log(problemas + ' problema(s) de indexação. Corrigir antes de encerrar a sessão.\n');
  process.exit(1);
}
console.log('Auditoria de indexação OK.\n');
