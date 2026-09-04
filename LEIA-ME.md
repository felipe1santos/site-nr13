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
├── instalacao-sistema-de-incendio-vitoria-es.html  Landing instalação de incêndio e SPDA
│
│   Cluster obras, estruturas e engenharia predial (não levam a faixa do Sistema NR13):
├── laudos-tecnicos-e-art-vitoria-es.html            Pilar de laudos e ART
├── laudo-de-acessibilidade-nbr9050-vitoria-es.html  Acessibilidade NBR 9050
├── projetos-estruturais-vitoria-es.html             Metálica, concreto, protendido, fundação
├── montagem-industrial-vitoria-es.html              Estrutura, pipe rack, bases mecânicas
├── construcao-de-galpoes-e-quadras-vitoria-es.html  Galpão e quadra coberta
├── camaras-frias-vitoria-es.html                    Câmara fria e de congelados
├── exaustao-e-coifas-industriais-vitoria-es.html    Exaustão, coifas, torre de resfriamento
├── reformas-e-recuperacao-de-fachadas-vitoria-es.html  Fachada, pintura, reforma predial
├── patologias-e-corrosao-estrutural-vitoria-es.html Diagnóstico e recuperação
├── manutencao-predial-para-condominios-vitoria-es.html  NBR 5674, condomínios
├── laudo-de-playground-vitoria-es.html              NBR 16071, piso, instalação
├── nt23-recarga-de-veiculos-eletricos-vitoria-es.html   NT 23 CBMES, carro elétrico
├── blog/
│   ├── index.html                          Hub de conteúdo
│   └── 25 artigos do cluster NR-13
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

- **O Sistema NR13 é o único produto vendido**, e é o destino do cluster NR-13.
  O cluster de obras, estruturas e engenharia predial vende **serviço de engenharia**, com
  conversão pelo WhatsApp — não pelo checkout.
- **No cluster NR-13:** Os serviços de engenharia existem para
  ranquear e gerar autoridade; a conversão acontece na landing.
- **Nenhuma menção a teste grátis.** A landing é de venda direta: todo CTA leva ao checkout Kiwify.
- **Faixa `.sys-band` no fim das páginas do universo NR-13**, empurrando para `sistema-nr13.html`.
  As páginas do cluster de obras e engenharia predial **não levam a faixa** — fecham com `cta-band`
  genérico para WhatsApp. Ver "Quando NÃO empurrar o Sistema NR13" nas regras de SEO.
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

## REGRA OBRIGATÓRIA — indexação

> **Nenhuma tarefa neste repositório é considerada concluída sem passar por esta seção.**

Toda vez que uma página for **criada, renomeada ou tiver `<title>`, `description` ou canonical
alterados**, é obrigatório, no mesmo dia:

1. **Incluir/atualizar a URL no `sitemap.xml`** com `lastmod` da data de hoje.
2. **Registrar a URL em `docs/INDEXACAO.md`**, na fila do lote corrente, com `[ ]`.
3. **Solicitar indexação no Google Search Console** — ou, se a cota diária estourar
   (teto prático de ~10 a 12 pedidos/dia) ou a página ainda não estiver no ar,
   **deixá-la na fila** de `docs/INDEXACAO.md` marcada como pendente.
4. **Reenviar o sitemap** no Search Console quando o número de URLs mudar.

Além disso, **antes de encerrar qualquer sessão de trabalho no site**, é obrigatório
**auditar se existe página sem indexação**:

```bash
node docs/auditar-indexacao.js
```

O script (`docs/auditar-indexacao.js`) verifica, e **sai com código 1** se achar problema:

1. toda página HTML indexável está no `sitemap.xml`;
2. toda URL do sitemap tem arquivo no disco;
3. não há URL duplicada no sitemap;
4. toda página indexável tem linha em `docs/INDEXACAO.md`;
5. cada página tem canonical, um único `<h1>`, `title` e `description` dentro do limite,
   e todo bloco JSON-LD é JSON válido.

Os itens 1 a 4 são **erro** e travam a entrega. `title`/`description` longos saem como aviso.

Depois disso, conferir em `docs/INDEXACAO.md` se toda URL nova tem linha própria e se
alguma fila antiga ficou `[ ]` sem explicação. **Fila vazia ou desatualizada é bug.**

> A solicitação manual só é aceita para URL que responde **200** no domínio. Página criada
> mas ainda não publicada na VPS entra na fila como pendente de deploy, não como indexada.

---

## Regras de SEO para páginas novas

Toda página nova segue estas regras. Elas não são preferência de estilo: são o que já está
aplicado nas páginas existentes, e desviar quebra a consistência que o Google usa para
entender o site.

### 1. Uma intenção de busca por URL

Nenhuma keyword principal se repete entre páginas. Antes de criar, verificar se a intenção
já não é atendida por uma página existente. Se duas páginas são inevitavelmente próximas,
**declarar o recorte de cada uma no primeiro bloco de texto** e linkar uma na outra —
foi assim que o cluster de checklist/relatório/laudo foi separado.

### 2. Hierarquia de títulos

- **Um único `<h1>` por página**, contendo a keyword principal e a cidade/região.
- `<h2>` para cada bloco temático — nunca pular de `<h1>` direto para `<h3>`.
- `<h3>` apenas dentro de um `<h2>`, para subdividir aquele bloco.
- Os `<h4>` do rodapé são exceção estrutural conhecida e aceita (é rodapé, não conteúdo).
- Nunca usar heading para estilizar: se é só texto grande, é `<p>` com classe.
- Os títulos precisam descrever o conteúdo abaixo deles, não ser frases de efeito.

### 3. `<title>` e `description`

- `<title>` com até **~60 caracteres**, keyword na frente, marca ou região no fim.
- `description` com **~150 a 165 caracteres**, escrita para dar clique, não para repetir a
  keyword. Descrição acima de ~175 é truncada na SERP.
- `og:title` igual ao `<title>`; `og:description` pode ser mais curta e mais comercial.

### 4. Cauda longa

Cada página leva um bloco `.sec-tags` no fim do artigo com **10 a 12 termos de cauda longa**
— perguntas e situações reais ("laudo para instalar ponte rolante em galpão existente"),
não variações mecânicas da keyword principal. Alguns desses termos viram `<a>` para páginas
internas relacionadas; o resto fica em `<span>`.

O `<meta name="keywords">` não é usado pelo Google como fator de ranqueamento; mantemos por
consistência com as páginas existentes, mas nunca como substituto do texto real.

### 5. Links internos no corpo

- **No mínimo 5 links internos contextuais dentro do texto**, na frase em que o assunto
  aparece — não empilhados no fim.
- Âncora descritiva (`recuperação de fachada`), nunca "clique aqui".
- Bloco final **"Continue lendo"** com 5 a 6 links.
- `aside` com **"Serviços relacionados"** (5 links).
- Rodapé linka todas as páginas de serviço — é o hub de link interno do site.
- **Reciprocidade:** ao criar uma página, adicionar link para ela em pelo menos duas páginas
  existentes do mesmo tema. Página órfã não ranqueia.

### 6. Quando NÃO empurrar o Sistema NR13

A faixa `.sys-band` e o botão de assinatura existem para páginas do **universo NR-13 e de
documentação de equipamento sob pressão**. Páginas de obra, estrutura, fachada, playground,
acessibilidade, câmara fria e afins **não levam a faixa do sistema** — elas fecham com um
`cta-band` genérico para WhatsApp. Empurrar software de laudo NR-13 para quem procura
recuperação de fachada piora a experiência e a métrica de engajamento.

### 7. Dados estruturados

- `Service` + `BreadcrumbList` + `FAQPage` em toda landing de serviço.
- `Article` + `BreadcrumbList` + `FAQPage` em artigo do blog; `HowTo` quando for passo a passo.
- O texto do JSON-LD tem que ser **idêntico** ao texto visível na página.
- **Nunca** inventar `aggregateRating` ou `review` — gera penalização manual.
- Validar o JSON antes de publicar (o `JSON.parse` de cada bloco tem que passar).

### 8. Local e geográfico

- Cidade no `<h1>`, no `<title>` e na `description`.
- Bloco `.atendimento-local` com as 10 cidades, linkando `index.html#atendimento`.
- `areaServed` no JSON-LD com a mesma lista.
- **NAP idêntico** em rodapé, JSON-LD e contato — divergência é a causa nº 1 de mau
  ranqueamento local.

### 9. Imagem e performance

- WebP, com `width` e `height` **conferidos no arquivo real** (declarar 1600x800 num arquivo
  1200x800 gera CLS e já aconteceu aqui).
- Hero é o LCP: `fetchpriority="high"` + `<link rel="preload">`; o resto `loading="lazy"`.
- `alt` descritivo do que a foto mostra, sem empilhar keyword.
- **Toda landing leva de 4 a 5 imagens**: o hero mais 2 ou 3 no corpo, cada uma em
  `<div class="split-img" style="margin:1.8rem 0 2.2rem">` ancorada **imediatamente antes do
  `<h2>` do bloco que ela ilustra** — imagem solta no fim da página não ajuda ninguém.
- **Depois de inserir, confira o `alt` contra a imagem renderizada.** Descrição escrita a partir
  do nome do arquivo erra com frequência: neste repositório oito `alt` de um lote de 37 fotos
  descreviam coisa diferente do que a foto mostrava. `alt` errado atrapalha acessibilidade e não
  ajuda em SEO. Use `alt=""` apenas em imagem decorativa (rodapé e faixa).
- **Não repita a mesma foto em mais de duas páginas.** Foto industrial genérica em página de
  playground ou de fachada denuncia banco de imagem e derruba a credibilidade técnica.
- Ao mudar CSS ou JS, **incrementar o `?v=AAAAMMDD` em todas as páginas** — o nginx não manda
  `Cache-Control` e o navegador segura o arquivo velho.

### 10. Checklist antes de publicar página nova

- [ ] `<h1>` único, hierarquia sem pulo
- [ ] `<title>` ≤ 60 e `description` ≤ 165
- [ ] canonical, `og:*` e `robots` corretos
- [ ] JSON-LD válido e igual ao texto visível
- [ ] ≥ 5 links internos no corpo + "Continue lendo" + aside
- [ ] 2 páginas existentes apontando para a nova
- [ ] `.sec-tags` com cauda longa
- [ ] imagens com dimensão real e `alt`
- [ ] `?v=` incrementado se houve mudança em CSS/JS
- [ ] **URL no `sitemap.xml`**
- [ ] **URL em `docs/INDEXACAO.md`**
- [ ] **indexação solicitada no Search Console — ou na fila, com o motivo**

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

**Página nova?** Leia antes a seção **Regras de SEO para páginas novas** e a **REGRA OBRIGATÓRIA — indexação** acima.
Copie uma landing existente e troque `<title>`, `description`, `canonical`,
`og:*`, o H1, o JSON-LD e o conteúdo. Depois adicione a URL no `sitemap.xml` e em
`docs/INDEXACAO.md` — no mesmo dia.

**Artigo novo?** Mesma regra, dentro de `blog/`, e acrescente o link no rodapé (coluna
"Conteúdo técnico") e no hub `blog/index.html`.

**Foto nova?** Veja `docs/CREDITOS-IMAGENS.md` — dimensões exatas e comando de conversão.
