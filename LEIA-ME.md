# Axial Engenharia — site + landing do Sistema NR13

Site estático focado em **SEO local** (engenharia mecânica na Grande Vitória/ES) que funciona como
funil para o único produto vendido: o **Sistema NR13**.

Sem framework, sem build, sem dependência de CDN. HTML + CSS + um arquivo JS.
Fontes e imagens são servidas do próprio domínio.

- **Domínio:** `nr13sistema.com.br` (sem `www`) — já embutido em todo canonical, og:url e JSON-LD.
- **Checkout:** `https://pay.kiwify.com.br/O9KdzEI` — todos os botões de compra apontam para lá.
- **Contato:** (27) 99253-4407 · nr13sistema@gmail.com · Av. Henrique Moscoso, 2250, Jaburuna, Vila Velha/ES, 29100-650.

---

## Estrutura

```
site-engenharia/
├── index.html                              Home (keyword principal)
├── sistema-nr13.html                       LANDING DE VENDA (o produto)
├── inspecao-nr13-vitoria-es.html           Landing NR-13
├── adequacao-nr12-vitoria-es.html          Landing NR-12
├── pmoc-vitoria-es.html                    Landing PMOC
├── ensaios-nao-destrutivos-vitoria-es.html Landing END
├── combate-a-incendio-vitoria-es.html      Landing Incêndio
├── blog/
│   ├── index.html                          Hub de conteúdo
│   └── 6 artigos do cluster NR-13
├── privacidade.html                        noindex
├── robots.txt · sitemap.xml · site.webmanifest
├── css/site.css        design system inteiro (um arquivo só)
├── js/site.js          menu mobile, ano, badge de cidade por IP, reveal no scroll
├── js/meta-pixel.js    Meta Pixel 1624371105202459: PageView + ViewContent + InitiateCheckout + Lead
├── fonts/              Archivo · Inter · IBM Plex Mono (woff2 self-hosted)
├── img/                imagens WebP otimizadas
└── docs/
    ├── INDEXACAO.md         controle do Search Console + fila de conteúdo
    └── CREDITOS-IMAGENS.md  origem das fotos e como trocar por fotos reais
```

Não há mais `dados.json` nem `aplicar-dados.ps1`: os dados reais estão aplicados direto nos
arquivos. Para trocar telefone, e-mail ou endereço, é busca e substituição global.

---

## Publicar

O site é servido por **nginx em VPS** no domínio `nr13sistema.com.br`. O deploy é a cópia do
conteúdo desta pasta para a raiz do site no servidor. Depois de publicar:

1. Conferir que `https://nr13sistema.com.br/blog/` responde 200.
2. Enviar o sitemap no Search Console (uma única vez).
3. Solicitar indexação na ordem da fila em `docs/INDEXACAO.md`.

---

## Estratégia comercial embutida

- **O site inteiro vende uma coisa só: o Sistema NR13.** Os serviços de engenharia existem para
  ranquear e gerar autoridade; a conversão acontece na landing.
- **Nenhuma menção a teste grátis.** A landing é de venda direta: todo CTA leva ao checkout Kiwify.
- **Faixa `.sys-band` no fim de todas as páginas**, empurrando para `sistema-nr13.html`.
- **Botão de assinatura no menu** de todas as páginas.
- Os artigos do `blog/` fecham em CTA para a landing e para o WhatsApp.

### Onde colocar o preço

Na seção `#assinar` de `sistema-nr13.html` existe um bloco marcado por comentário. Para exibir o
valor, troque o par `oferta-preco-lbl` + `oferta-preco-txt` por:

```html
<span class="oferta-preco">R$ 000<small>/mês</small></span>
```

Se exibir o preço, acrescente também `"price"` e `"priceValidUntil"` no bloco `offers` do JSON-LD
no `<head>` — sem `price` o Google não gera rich result de produto.

---

## Decisões de SEO já embutidas

- **1 intenção de busca = 1 URL.** Nenhuma keyword principal se repete entre páginas.
- **Dados estruturados:** `ProfessionalService` + `LocalBusiness` na home; `Service` +
  `BreadcrumbList` nas landings; `SoftwareApplication` + `Offer` na landing do sistema;
  `Article` + `BreadcrumbList` + `FAQPage` nos artigos — sempre com o texto do JSON-LD **idêntico**
  ao texto visível.
- **Sem `aggregateRating` e sem `review` inventados.** Avaliação falsa gera penalização manual.
- **Seção de cidades e bairros** (`#atendimento`) com `<details>` nativo: ~280 termos geográficos
  indexáveis mesmo fechados, sem criar doorway page por bairro.
- **Rodapé idêntico em 100% das páginas**, funcionando como hub de link interno.
- **Imagens em WebP** com `width`/`height` explícitos e `loading="lazy"` abaixo da dobra.
  O hero de cada página é o LCP e leva `fetchpriority="high"` + `preload`.
- **NAP idêntico** em rodapé, JSON-LD e página de contato — divergência é a causa nº 1 de mau
  ranqueamento local. Se mudar, mudar junto no Perfil da Empresa no Google.

---

## Design

Estética de documento técnico de engenharia, não de agência.

- **Archivo** nos títulos, **Inter** no texto, **IBM Plex Mono** em rótulos e dados técnicos;
- Navy `#0a1f33` para estrutura, laranja de segurança `#f26522` para ação e dado;
- Cantos de 4 a 8px, sem gradiente colorido decorativo, sem ilustração.

### Elementos vivos da landing (blocos 23b a 23h do CSS)

- `.feat-layout` — cards de vidro à esquerda sobrepondo a foto do vaso de pressão à direita.
- `.phone` — mockup de celular do Módulo 02, com bezel, notch e botões laterais.
- `.mod-link` — trilho vertical que **acende de cima para baixo** entre um módulo e o seguinte,
  com seta que ganha halo laranja ao entrar na tela.
- `.steps-flow` — setas SVG que **crescem no vão do grid** entre os cards de etapa.
- `.oferta` / `.btn-buy` — bloco de checkout e o único botão da página com peso de compra.
- `.sys-band` — faixa de venda no fim de todas as outras páginas.

O reveal usa `IntersectionObserver` com `[data-reveal]`. O estado escondido só existe sob a classe
`js-anim`, aplicada por um script inline no `<head>`: **sem JS, ou com `prefers-reduced-motion`,
todo o conteúdo nasce visível** — nada de página em branco para o Googlebot.

Tudo mora em `css/site.css`, em blocos numerados. Os tokens estão no `:root`, no topo.

---

## Manutenção

**Página nova?** Copie uma landing existente e troque `<title>`, `description`, `canonical`,
`og:*`, o H1, o JSON-LD e o conteúdo. Depois adicione a URL no `sitemap.xml` e em
`docs/INDEXACAO.md` — no mesmo dia.

**Artigo novo?** Mesma regra, dentro de `blog/`, e acrescente o link no rodapé (coluna
"Conteúdo técnico") e no hub `blog/index.html`.

**Foto nova?** Veja `docs/CREDITOS-IMAGENS.md` — dimensões exatas e comando de conversão.
