# Controle de Indexação — Google Search Console

Propriedade: **nr13sistema.com.br** · Sitemap: `https://nr13sistema.com.br/sitemap.xml`

Legenda: `[ ]` pendente · `[x]` indexação solicitada

> Limite prático do Search Console: **10 a 12 solicitações manuais por dia**.
> O sitemap é enviado **uma vez**; depois o Google revisita sozinho.
> Só faz sentido solicitar indexação de URL que já está **no ar** — a página precisa
> responder 200 no domínio antes do pedido.

## Solicitadas em 10/08/2026

Sitemap `https://nr13sistema.com.br/sitemap.xml` reenviado no mesmo dia — status
**Processado, 14 páginas encontradas**.

Dez solicitações manuais aceitas; na décima primeira o Search Console respondeu
**"A cota foi excedida"**. É o teto diário da ferramenta.

- [x] https://nr13sistema.com.br/sistema-nr13.html
- [x] https://nr13sistema.com.br/
- [x] https://nr13sistema.com.br/inspecao-nr13-vitoria-es.html
- [x] https://nr13sistema.com.br/blog/software-de-gestao-nr13-como-escolher.html
- [x] https://nr13sistema.com.br/blog/
- [x] https://nr13sistema.com.br/blog/quanto-custa-inspecao-nr13.html
- [x] https://nr13sistema.com.br/blog/caldeira-sem-prontuario-o-que-fazer.html
- [x] https://nr13sistema.com.br/blog/categoria-de-vaso-de-pressao-como-classificar.html
- [x] https://nr13sistema.com.br/blog/teste-hidrostatico-quando-e-obrigatorio.html
- [x] https://nr13sistema.com.br/blog/livro-de-registro-de-seguranca-nr13.html

## Fila do próximo dia

- [ ] https://nr13sistema.com.br/adequacao-nr12-vitoria-es.html
- [ ] https://nr13sistema.com.br/pmoc-vitoria-es.html
- [ ] https://nr13sistema.com.br/ensaios-nao-destrutivos-vitoria-es.html
- [ ] https://nr13sistema.com.br/combate-a-incendio-vitoria-es.html

## Execução de 13/08/2026 — deploy no ar e cota estourada

Deploy confirmado: as 10 URLs novas respondem **200**, `favicon-48x48.png` responde 200 e o
`sitemap.xml` no ar já traz **24 URLs**. Sitemap reenviado no Search Console.

Solicitações de indexação feitas hoje, com confirmação visual do aviso *"Indexação solicitada"*:

- [x] https://nr13sistema.com.br/blog/como-gerar-laudo-nr13.html
- [x] https://nr13sistema.com.br/blog/como-inspecionar-vaso-de-pressao.html
- [x] https://nr13sistema.com.br/blog/como-inspecionar-caldeira-nr13.html

Tentadas, **sem confirmação visual** (a solicitação pode ter entrado; a UI não confirmou):

- [?] https://nr13sistema.com.br/blog/como-calibrar-manometro.html
- [?] https://nr13sistema.com.br/blog/sistema-de-inspecao-nr13.html

Na sequência o Search Console respondeu **"A cota foi excedida — tente novamente amanhã"**.
Cliques repetidos na mesma URL consomem cota, então o teto do dia chegou antes das 10.

### Verificação posterior no mesmo dia

Tentativa de retomar a fila: o Search Console respondeu **"A cota foi excedida"** de novo — a
cota é diária e só renova no dia seguinte.

Mas a inspeção (que não consome cota) trouxe boas notícias:

- `blog/como-calibrar-manometro.html` → **"O URL está no Google — a página está indexada"**. Ou
  seja, a solicitação sem confirmação visual **funcionou**.
- `site:nr13sistema.com.br` mostra `https://nr13sistema.com.br/` (sem `www`) no índice — a home
  canônica entrou, apesar do 301 ausente.
- `blog/como-gerar-laudo-nr13.html` já aparece na busca.

Dois problemas confirmados na SERP:

1. **Favicon ainda é o globo genérico** em todos os resultados. Esperado: o PNG 48x48 só subiu
   hoje e o Google ainda não recrawleou a home. Não há mais nada a fazer no código — é esperar o
   recrawl.
2. `/contato.html` continua indexada, **com o título da marca antiga** ("NR13 AutoDocs — Software
   de Laudos"), e responde 404. Quem clicar nesse resultado cai em erro. É o argumento mais
   concreto para aplicar os 301 de `docs/NGINX-REDIRECTS.md`.

### Fila para o próximo dia (cota renovada)

- [x] ~~blog/como-calibrar-manometro.html~~ — confirmada indexada, saiu da fila
- [ ] https://nr13sistema.com.br/blog/sistema-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/periodicidade-de-inspecao-nr13-por-categoria.html
- [ ] https://nr13sistema.com.br/blog/checklist-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/calibracao-de-valvula-de-seguranca-psv.html
- [ ] https://nr13sistema.com.br/blog/bloco-padrao-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/vida-remanescente-e-taxa-de-corrosao.html
- [ ] https://nr13sistema.com.br/ — recrawl da home, necessário para o Google atualizar o favicon

> Solicitação manual apenas **acelera** o rastreamento. As 24 URLs já estão no sitemap, então o
> Google chega nelas sozinho. O que realmente trava a home continua sendo o 301 de `www`, ainda
> **não aplicado** — verificado em 13/08/2026, `https://www.nr13sistema.com.br/` segue
> respondendo 200. Ver `docs/NGINX-REDIRECTS.md`.

## Lote de 12/08/2026 — 10 guias novos

Criados em 12/08/2026 e já incluídos no `sitemap.xml` (24 URLs no total).
**Reenviar o sitemap no Search Console** depois do deploy; a solicitação manual
individual respeita o teto de ~10 por dia, então a fila abaixo vai em duas rodadas.

Ordem de prioridade (intenção de busca mais forte primeiro):

- [ ] https://nr13sistema.com.br/blog/como-gerar-laudo-nr13.html
- [ ] https://nr13sistema.com.br/blog/como-inspecionar-vaso-de-pressao.html
- [ ] https://nr13sistema.com.br/blog/como-inspecionar-caldeira-nr13.html
- [ ] https://nr13sistema.com.br/blog/como-calibrar-manometro.html
- [ ] https://nr13sistema.com.br/blog/sistema-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/periodicidade-de-inspecao-nr13-por-categoria.html
- [ ] https://nr13sistema.com.br/blog/checklist-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/calibracao-de-valvula-de-seguranca-psv.html
- [ ] https://nr13sistema.com.br/blog/bloco-padrao-de-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/vida-remanescente-e-taxa-de-corrosao.html

Palavra-chave alvo de cada uma:

| URL | Consulta principal | Schema |
|---|---|---|
| `como-gerar-laudo-nr13` | como gerar laudo NR13 / modelo de laudo NR13 | Article + HowTo + FAQ |
| `como-inspecionar-vaso-de-pressao` | como inspecionar vaso de pressão | Article + HowTo + FAQ |
| `como-inspecionar-caldeira-nr13` | como inspecionar caldeira | Article + HowTo + FAQ |
| `como-calibrar-manometro` | como calibrar manômetro | Article + HowTo + FAQ |
| `sistema-de-inspecao-nr13` | sistema de inspeção NR13 | Article + FAQ |
| `periodicidade-de-inspecao-nr13-por-categoria` | de quanto em quanto tempo inspecionar | Article + FAQ |
| `checklist-de-inspecao-nr13` | checklist de inspeção NR13 | Article + FAQ |
| `calibracao-de-valvula-de-seguranca-psv` | calibração de válvula de segurança PSV | Article + FAQ |
| `bloco-padrao-de-inspecao-nr13` | bloco padrão de inspeção NR13 / ultrassom V1 V2 | Article + FAQ |
| `vida-remanescente-e-taxa-de-corrosao` | como calcular vida remanescente | Article + FAQ |

> As quatro páginas com `HowTo` são as que podem render resultado rico de passo a passo.
> Vale rodá-las no teste de resultados aprimorados depois do deploy.

## Estado de cada URL na inspeção (10/08/2026)

| URL | Estado antes da solicitação |
|---|---|
| `/sistema-nr13.html` | Indexada |
| `/inspecao-nr13-vitoria-es.html` | Indexada |
| `/` | **Não indexada — "Cópia sem página canônica selecionada pelo usuário"** |
| `/adequacao-nr12-vitoria-es.html` | Não indexada — "Detectada, mas não indexada no momento" |
| `/blog/` e os 6 artigos | Não indexados — "O Google não reconhece o URL" (URLs novas) |

> O diagnóstico da home é o mais importante da lista. "Cópia sem página canônica
> selecionada pelo usuário" quer dizer que o Google encontrou duas versões da mesma
> página e escolheu a outra como canônica — quase certamente `www.nr13sistema.com.br`,
> que hoje responde 200 em vez de redirecionar. **Enquanto o 301 de www não existir, a
> home dificilmente será indexada**, por mais indexações que se solicite.

## Indexadas

(mover para cá conforme o Search Console confirmar)

## Fora da lista de propósito

- `privacidade.html` — `noindex`, não desperdiça crawl budget.

## Checklist de go-live

- [x] Nenhum marcador `PREENCHER` restante no site
- [x] Domínio decidido: **nr13sistema.com.br**, sem `www`, em todos os canonical
- [x] Sitemap atualizado com as 14 URLs indexáveis
- [x] `robots.txt` apontando para o sitemap no domínio correto
- [x] NAP idêntico em rodapé, JSON-LD e página de contato
- [x] Arquivos publicados no servidor — deploy confirmado em 10/08/2026, 14 URLs em 200
- [ ] **Redirecionamento 301 de `www` → sem `www`** — pendente e bloqueando a home:

  ```nginx
  server {
      listen 443 ssl;
      server_name www.nr13sistema.com.br;
      return 301 https://nr13sistema.com.br$request_uri;
  }
  ```

- [x] HTTPS ativo
- [x] Propriedade verificada no Search Console (tipo domínio)
- [x] Sitemap enviado no Search Console — processado, 14 URLs
- [ ] Google Analytics 4 instalado
- [ ] Perfil da Empresa no Google criado, com o **mesmo NAP** do rodapé e do JSON-LD
- [ ] Teste de dados estruturados: https://search.google.com/test/rich-results
- [ ] PageSpeed Insights nas URLs principais

## Pendências de conteúdo comercial

- [ ] Definir se o **preço** aparece na landing. O bloco está pronto em
  `sistema-nr13.html`, seção `#assinar`: substituir
  `<span class="oferta-preco-lbl">…` + `<strong class="oferta-preco-txt">…`
  por `<span class="oferta-preco">R$ 000<small>/mês</small></span>`.
  Preço visível costuma aumentar a conversão de tráfego frio de busca.
- [ ] Se o preço for exibido, incluir também `"price"` e `"priceValidUntil"` no
  bloco `offers` do JSON-LD — sem `price`, o Google não gera rich result de produto.
- [ ] Criar a caixa de e-mail no domínio ou manter `nr13sistema@gmail.com`.

## Próximos lotes de conteúdo

Cada artigo novo entra no `sitemap.xml` **e** nesta lista no mesmo dia.

**Cluster NR-13** (pilar: `/inspecao-nr13-vitoria-es.html`)
- [x] `blog/periodicidade-de-inspecao-nr13-por-categoria.html` — 12/08/2026
- [x] `blog/calibracao-de-valvula-de-seguranca-psv.html` — 12/08/2026
- [x] `blog/vida-remanescente-e-taxa-de-corrosao.html` — 12/08/2026
- [x] `blog/como-inspecionar-vaso-de-pressao.html` — 12/08/2026
- [x] `blog/como-inspecionar-caldeira-nr13.html` — 12/08/2026
- [x] `blog/como-gerar-laudo-nr13.html` — 12/08/2026
- [x] `blog/como-calibrar-manometro.html` — 12/08/2026
- [x] `blog/bloco-padrao-de-inspecao-nr13.html` — 12/08/2026
- [x] `blog/checklist-de-inspecao-nr13.html` — 12/08/2026
- [ ] `blog/spie-servico-proprio-de-inspecao-vale-a-pena.html`
- [ ] `blog/inspecao-de-tubulacao-e-tanque-nr13.html`
- [ ] `blog/placa-de-identificacao-ilegivel-o-que-fazer.html`

**Cluster produto** (pilar: `/sistema-nr13.html`)
- [x] `blog/sistema-de-inspecao-nr13.html` — 12/08/2026
- [ ] `blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar.html`
- [ ] `blog/portal-do-cliente-para-empresa-de-inspecao.html`

**Cluster NR-12** (pilar: `/adequacao-nr12-vitoria-es.html`)
- [ ] `blog/apreciacao-de-riscos-o-que-e.html`
- [ ] `blog/quanto-custa-adequar-maquina-nr12.html`

**Cluster PMOC** (pilar: `/pmoc-vitoria-es.html`)
- [ ] `blog/pmoc-obrigatorio-quem-precisa.html`
- [ ] `blog/qualidade-do-ar-interior-parametros.html`
