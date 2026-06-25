# Estrutura do site & estratégia de SEO — NR13 AutoDocs

> Documento de referência do que foi montado e por quê. O foco é **posicionar o site no Google** ("rankear") para termos de inspeção NR-13.

## 1. Páginas do site

| Página | Arquivo | Objetivo / intenção de busca |
|---|---|---|
| **Home** (vendas do SaaS) | `index.html` | Marca + conversão. Termo principal: *software NR-13 / laudo NR-13 automático*. |
| **Funcionamento do Sistema** | `funcionamento.html` | Vídeos do sistema. Termo: *como funciona software NR-13*. |
| **Blog** | `blog.html` | Hub de conteúdo. 1 post por semana mirando palavra-chave de cauda longa. |
| **Post de blog (exemplo)** | `blog-laudo-nr13-passo-a-passo.html` | *laudo de inspeção NR-13 como fazer*. Modelo para os próximos posts. |
| **Contato + Quem Somos** | `contato.html` | Confiança/E-E-A-T + captação. Sem telefone direto; só formulário. |

Arquivos de apoio: `assets/site.css` (design compartilhado), `assets/site.js` (modal Fale Conosco + FAQ), `sitemap.xml`, `robots.txt`, `atendente.webp` (imagem da atendente, fundo removido, em WebP leve ~25 KB).

## 2. Backlinks internos para a Home (pedido do cliente)

**TODAS as páginas têm link de volta para a Home (`index.html`)** em vários pontos — isso concentra autoridade ("link equity") na página principal:

- **Logo** do header → `index.html` (em todas as páginas).
- **Menu do header**: link "Início" → `index.html`.
- **Coluna direita / Acesso rápido** (sidebar flutuante fixa): link "Início" → `index.html`.
- **Rodapé**: lista "Navegação" com "Início (Home)" + linha final "Voltar para a Home".
- **Breadcrumb** no topo das páginas internas: "Início › ...".
- Dentro do corpo do post de blog, links contextuais para `index.html` e `index.html#planos`.

> Ou seja: header, sidebar, rodapé, breadcrumb e corpo — múltiplos caminhos de retorno à Home em cada página.

## 3. Coluna de informações (palavras-chave) — dentro da seção "O QUE TEM DENTRO DO SISTEMA"

Coluna `.kw-rail` posicionada **à direita da seção "O QUE TEM DENTRO DO SISTEMA"** na Home (`#funcionalidades`), em layout de 2 colunas (`.func-layout`). É **sticky** (`position: sticky; top: 110px`) — fica "fixa" enquanto a seção rola. Caixa "INFORMAÇÕES" com:

- Lista de **frases-chave** (atualmente **vazias** — slots prontos para o cliente preencher). Cada link já aponta para a Home (`index.html`) = **backlink SEO**.
- Botão com o **link do site** (`www.nr13sistema.com.br`) no rodapé da caixa.

**Como preencher:** edite a `<ul>` dentro do `<aside class="kw-rail">` no `index.html` — basta escrever o texto dentro de cada `<a href="index.html">...</a>`. No mobile (<992px) a coluna desce para baixo dos cards.

A navegação principal (Início, Funcionamento, Blog, Contato, Planos) fica no **menu do header** e no **rodapé**. O **Canal no YouTube** (`@nr13sistema`) está nos ícones sociais do rodapé de todas as páginas.

> Obs.: a versão anterior (coluna fixa global via `assets/kwrail.js`) foi descontinuada; o arquivo permanece no projeto mas não é mais carregado.

## 4. Rodapé profissional + Google Maps

Rodapé em 4 colunas: marca/social, Navegação (links internos), Contato (e-mail + endereço + área de atendimento) e **minimapa do Google Maps** (iframe `output=embed`, sem necessidade de API key) apontando para Jardim Camburi, Vitória/ES.

### Decisão sobre o endereço (importante para SEO)

O cliente mora em Jardim Marilândia (Vila Velha) mas quer aparecer em Vitória. **Decisão tomada: usar referência de bairro/cidade (Jardim Camburi, Vitória — ES, CEP 29092-060) SEM inventar um número de porta específico.**

Motivo: o Google pune **endereços falsos** principalmente no **Google Business Profile (GBP / Google Meu Negócio)** — listar um número de rua que você não ocupa pode derrubar a ficha. Já uma referência de **bairro/cidade + área de atendimento** ("Atendemos a Grande Vitória e todo o Brasil — sistema 100% online") é uma prática segura e comum para SaaS/negócios de área de serviço. Assim o site geo-localiza em Vitória sem o risco de penalidade por endereço fictício.

**Recomendações:**
- **Não** criar um Google Business Profile com endereço falso. Se quiser GBP, use a opção "área de atendimento" (sem endereço físico exibido).
- Manter o **NAP** (Nome, Endereço/região, Telefone) **idêntico** em todas as páginas e em qualquer diretório externo — já está consistente no rodapé.
- Se um dia tiver endereço comercial real em Vitória, é só trocar no rodapé e no `schema.org` (JSON-LD) das páginas.

## 5. SEO on-page já aplicado

- `<title>` e `<meta description>` únicos por página, com a palavra-chave no início.
- `<meta keywords>`, `canonical`, Open Graph em todas as páginas.
- **Dados estruturados JSON-LD**: `SoftwareApplication` (home, com preço R$297), `Organization` (contato), `HowTo` (funcionamento), `Article` (post de blog).
- 1 único `<h1>` por página; hierarquia `h2`/`h3` no conteúdo.
- `alt` descritivo nas imagens; imagens em WebP; vídeos com lazy-load (carregam só no play) → página leve = melhor Core Web Vitals.
- `sitemap.xml` + `robots.txt` prontos para enviar no Google Search Console.

## 6. Próximos passos (para subir no ranking)

1. Registrar o domínio definitivo e **trocar `www.nr13sistema.com.br`** se for outro (canonicals, sitemap, JSON-LD).
2. Cadastrar o site no **Google Search Console** e enviar o `sitemap.xml`.
3. **Publicar 1 post por semana** no blog (os 5 cards "Em breve" já são pautas: PMTA/ASME, categorias de risco, inspeção de caldeiras, reconstituição de prontuário, inspeção mobile). Use o post existente como modelo de estrutura.
4. Conseguir backlinks externos (parcerias, CREA, associações de engenharia, diretórios do setor).
5. Cada post novo deve linkar para a Home, para `funcionamento.html` e para `#planos`.

## 7. Preço / checkout

- **Toggle Mensal/Anual** na seção de planos (mensal aparece primeiro; usuário clica para ver o anual).
  - **Mensal:** R$ 197,00/mês → checkout `https://pay.kiwify.com.br/O9KdzEI`.
  - **Anual:** R$ 997,00/ano (de R$ 1.350,00, badge "-58%") → checkout `https://pay.kiwify.com.br/27J91RK`.
- JSON-LD usa `AggregateOffer` (lowPrice 197 / highPrice 997).

## 8. Otimizações de SEO aplicadas (junho/2026)

- **Open Graph + Twitter Card** com imagens de engenharia/inspeção do banco **Pexels** (`og:image`, `twitter:image`).
- **Meta geo** (`geo.region`, `geo.position`, ICBM) apontando Vitória/ES.
- **JSON-LD `FAQPage`** adicionado (elegível a rich snippet de perguntas no Google).
- **Coluna "Informações" (`.kw-rail`)** à direita da seção "O que tem dentro do sistema" — links internos de cauda longa (atualmente apontando para a Home; **substituir por páginas reais** quando construídas).
- **Bloco de palavras-chave no rodapé** (`.footer-keywords`) com 20 termos/serviços linkados.
- **`sitemap.xml` profissional** com `lastmod`, prioridades por intenção de busca e `image:image` na Home.
- **`robots.txt`** com `Disallow` de vídeos/prova-social e referência ao sitemap.
