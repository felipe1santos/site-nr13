# Site de Engenharia Mecânica — Grande Vitória/ES

Site estático focado em **SEO local** para serviços de engenharia mecânica:
NR-13, NR-12, PMOC, ensaios não destrutivos e combate a incêndio.

Sem framework, sem build, sem dependência de CDN. HTML + CSS + um arquivo JS.
Fontes e imagens são servidas do próprio domínio.

---

## Abrir para conferir

Todos os caminhos são **relativos**, então dá para abrir com **duplo clique no `index.html`** —
o CSS, as fontes e as imagens carregam normalmente, sem servidor.

Duas ressalvas do modo duplo clique (`file://`), que somem quando o site está no servidor:

- a pasta-fonte mostra `PREENCHER — nome fantasia, ex: Camargo Engenharia`, `{{TELEFONE}}` etc. — rode o `aplicar-dados.ps1` e abra o
  `index.html` da pasta `site-engenharia-publicar` para ver com os dados reais;
- o iframe do Google Maps não carrega em `file://` (a API exige domínio autorizado).

## Estrutura

```
site-engenharia/
├── index.html                              Home (keyword principal)
├── inspecao-nr13-vitoria-es.html           Landing NR-13
├── adequacao-nr12-vitoria-es.html          Landing NR-12
├── pmoc-vitoria-es.html                    Landing PMOC
├── ensaios-nao-destrutivos-vitoria-es.html Landing END
├── combate-a-incendio-vitoria-es.html      Landing Incêndio
├── privacidade.html                        noindex
├── robots.txt · sitemap.xml · site.webmanifest
├── favicon.ico · favicon-*.png · icon-192/512.png · apple-touch-icon.png
├── css/site.css        design system inteiro (um arquivo só)
├── js/site.js          menu mobile, ano do rodapé, badge de cidade por IP
├── fonts/              Archivo · Inter · IBM Plex Mono (woff2 self-hosted)
├── img/                imagens WebP otimizadas
│   └── _raw/           originais JPG do Pexels (NÃO vão para o servidor)
├── docs/
│   ├── INDEXACAO.md         controle do Search Console + fila de conteúdo
│   └── CREDITOS-IMAGENS.md  origem das fotos e como trocar por fotos reais
├── dados.json          ← VOCÊ PREENCHE ISTO
└── aplicar-dados.ps1   gera a versão publicável
```

---

## Como publicar (2 passos)

### 1. Preencher `dados.json`

Todos os dados que se repetem no site ficam num arquivo só. Nada de caçar telefone em 6 páginas.

Campos com `PREENCHER` bloqueiam o go-live. Os críticos:

| Campo | Por que importa |
|---|---|
| `DOMINIO` | Entra em **todo** canonical, og:url e JSON-LD. Decida com ou sem `www` e nunca mais mude. |
| `WA_NUM` | Todos os botões de WhatsApp. Formato: só dígitos, com 55 + DDD. |
| `TEL_EXIBE` / `RUA` / `CEP` | Formam o **NAP**. Precisa ser byte-a-byte igual ao do Perfil da Empresa no Google. |
| `CREA_ENG` / `ENGENHEIRO` | Sinal de E-E-A-T. É o que diferencia de site de intermediário. |
| `LAT` / `LNG` | Coordenada real do escritório no schema. Os valores atuais são o centro de Vitória. |
| `MAPS_KEY` | Chave da Maps Embed API. **Restrinja por referenciador HTTP** no console do Google antes de publicar. |

### 2. Rodar o script

```powershell
powershell -ExecutionPolicy Bypass -File .\aplicar-dados.ps1
```

Ele cria `..\site-engenharia-publicar` com todos os `{{TOKEN}}` já trocados, sem as pastas de
trabalho (`img/_raw`, etc.). **É essa pasta que sobe para o servidor.**
A pasta original continua com os marcadores — é nela que você edita.

Se sobrar algum marcador, o script lista qual e em qual arquivo.

---

## Decisões de SEO já embutidas

- **1 intenção de busca = 1 URL.** Nenhuma keyword principal se repete entre páginas.
- **Dados estruturados:** `ProfessionalService` + `LocalBusiness` na home; `Service` +
  `BreadcrumbList` nas landings; `FAQPage` em todas — com o texto do JSON-LD **idêntico** ao texto
  visível dentro dos `<details>`.
- **Sem `aggregateRating` e sem `review` inventados.** Avaliação falsa no schema gera penalização
  manual. Assim que houver avaliações reais no Google, veja abaixo como adicionar.
- **Seção de cidades e bairros** (`#atendimento`) com `<details>` nativo: ~280 termos geográficos
  numa página só, indexáveis mesmo fechados, sem criar doorway page por bairro.
- **Rodapé idêntico em 100% das páginas**, funcionando como hub de link interno.
- **Imagens em WebP** com `width`/`height` explícitos e `loading="lazy"` em tudo abaixo da dobra.
  O hero de cada página é o LCP e **não** leva lazy — leva `fetchpriority="high"` e `preload`.
- **Badge de cidade por IP** é truque de conversão, não de ranking: o HTML já nasce com
  "Atendemos em toda a Grande Vitória" e o JS só substitui se a API responder.

### Quando surgirem avaliações reais no Google

Adicione dentro do bloco `ProfessionalService` da home (`index.html`) e replique o texto na
página, em uma seção visível:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0", "reviewCount": "12", "bestRating": "5", "worstRating": "1"
},
"review": [{
  "@type": "Review",
  "author": { "@type": "Person", "name": "Nome real do cliente" },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "reviewBody": "Texto copiado da avaliação real do Google."
}]
```

Regra: só avaliação que existe de verdade, e o `reviewCount` acompanha o número real.

---

## Design

Estética de documento técnico de engenharia, não de agência.

- **Archivo** (grotesca condensada) nos títulos — peso e autoridade;
- **Inter** no texto corrido — leitura longa sem fadiga;
- **IBM Plex Mono** nos rótulos, números e dados técnicos — assinatura visual do site;
- Navy `#0a1f33` para estrutura, laranja de segurança `#f26522` para ação e dado;
- Cantos de 4px, sem sombra decorativa, sem gradiente colorido, sem ilustração;
- Rodapé no padrão de site de associação de engenharia industrial: foto industrial esmaecida sob
  camada azul, quatro colunas, ícones sociais circulares e faixa de copyright.

Tudo mora em `css/site.css`, dividido em 22 blocos numerados. Os tokens de cor e tipografia estão
no `:root`, no topo do arquivo — mexer lá muda o site inteiro.

---

## Manutenção

**Página nova?** Copie uma landing existente e troque: `<title>`, `description`, `canonical`,
`og:*`, o H1, o JSON-LD e o conteúdo. Depois adicione a URL no `sitemap.xml` e em
`docs/INDEXACAO.md` — no mesmo dia.

**Mudou telefone ou endereço?** Só em `dados.json`, e rode o script de novo. Mudou o NAP? Atualize
**junto** o Perfil da Empresa no Google — divergência de NAP é a causa nº 1 de mau ranqueamento local.

**Foto nova?** Veja `docs/CREDITOS-IMAGENS.md` — tem as dimensões exatas e o comando de conversão.
