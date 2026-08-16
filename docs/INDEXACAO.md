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

## Lote de 16/08/2026 (2ª leva) — 3 páginas de intenção comercial "em minutos"

Sitemap vai a **33 URLs**. Páginas de fundo de funil: a busca por "em minutos" é de quem já
decidiu que o problema é tempo e está procurando ferramenta.

- [ ] https://nr13sistema.com.br/blog/laudo-nr13-em-minutos.html
- [ ] https://nr13sistema.com.br/blog/relatorio-nr13-em-minutos.html
- [ ] https://nr13sistema.com.br/blog/checklist-de-inspecao-nr13-em-minutos.html

| URL | Consulta principal | Ângulo (o que evita canibalizar) | Schema |
|---|---|---|---|
| `checklist-de-inspecao-nr13-em-minutos` | faça checklist de inspeção NR13 em minutos | **Campo**: preencher no celular, foto por item, offline | Article + HowTo + FAQ |
| `relatorio-nr13-em-minutos` | relatório NR13 em minutos | **Montagem do documento**: os 7 gargalos e o que cadastrar antes | Article + FAQ |
| `laudo-nr13-em-minutos` | como fazer laudo NR13 em minutos | **Escala**: padrão entre inspetores, fila do PH, portal de entrega | Article + HowTo + FAQ |

> **Risco alto de canibalização, tratado de propósito.** "Relatório NR-13" e "laudo NR-13" são
> sinônimos no mercado, e as duas páginas competiriam pela mesma SERP se tivessem o mesmo ângulo.
> A separação é por **estágio do problema**: campo (checklist) → documento (relatório) →
> operação com volume (laudo). Cada uma abre declarando o recorte e linka as outras duas.
> **Acompanhar no Search Console:** se as três aparecerem para a mesma consulta com posição
> oscilando entre elas, consolidar em duas.

> Todas as três dizem explicitamente que o **exame do equipamento e a assinatura do Profissional
> Habilitado não são acelerados** — promessa de "laudo automático" atrai clique e queima confiança
> técnica, que é o ativo do site.

Também corrigido neste lote: `width`/`height` dos heroes de 4 páginas do lote anterior estavam
declarados como 1600x800 sem corresponder ao arquivo real (`equipe-engenharia`, `detalhe-inspecao`
e `detalhe-tubulacao` são 1200x800). O hero de `como-calibrar-medidor-de-ultrassom` trocou
`card-end.webp` (800x520, pequena demais para hero) por `detalhe-solda.webp` (1200x800).

## Lote de 16/08/2026 — 6 guias novos (cluster relatório / ultrassom / escopo)

Criados em 16/08/2026 e já incluídos no `sitemap.xml` (**30 URLs** no total).
**Ainda não estão no ar**: verificado em 16/08/2026,
`https://nr13sistema.com.br/blog/relatorio-de-inspecao-de-vaso-de-pressao.html` responde **404**.
Sem deploy na VPS, a solicitação de indexação é recusada — o Search Console só aceita URL que
responde 200.

Ordem de execução depois do deploy:

1. Reenviar `https://nr13sistema.com.br/sitemap.xml` no Search Console (30 URLs).
2. Solicitar indexação manual na ordem de prioridade abaixo (teto de ~10 por dia).

- [ ] https://nr13sistema.com.br/blog/relatorio-de-inspecao-de-vaso-de-pressao.html
- [ ] https://nr13sistema.com.br/blog/como-fazer-checklist-nr13.html
- [ ] https://nr13sistema.com.br/blog/como-calibrar-medidor-de-ultrassom.html
- [ ] https://nr13sistema.com.br/blog/medicao-de-espessura-por-ultrassom.html
- [ ] https://nr13sistema.com.br/blog/inspecao-de-tubulacao-e-tanque-nr13.html
- [ ] https://nr13sistema.com.br/blog/placa-de-identificacao-ilegivel-o-que-fazer.html
- [ ] https://nr13sistema.com.br/blog/ — recrawl do índice, que ganhou 6 cards novos

Palavra-chave alvo de cada uma:

| URL | Consulta principal | Schema |
|---|---|---|
| `relatorio-de-inspecao-de-vaso-de-pressao` | como fazer relatório de inspeção em vaso de pressão | Article + HowTo + FAQ |
| `como-fazer-checklist-nr13` | como fazer checklist NR13 | Article + HowTo + FAQ |
| `como-calibrar-medidor-de-ultrassom` | como calibrar medidor de ultrassom | Article + HowTo + FAQ |
| `medicao-de-espessura-por-ultrassom` | medição de espessura por ultrassom | Article + FAQ |
| `inspecao-de-tubulacao-e-tanque-nr13` | inspeção de tubulação e tanque NR13 | Article + FAQ |
| `placa-de-identificacao-ilegivel-o-que-fazer` | placa de identificação ilegível | Article + HowTo + FAQ |

> **Risco de canibalização controlado:** `como-fazer-checklist-nr13` (como *montar* o formulário)
> e `checklist-de-inspecao-nr13` (o que *verificar* em campo) se referenciam mutuamente logo no
> primeiro bloco, com intenção de busca declarada em cada uma. Mesma lógica entre
> `como-calibrar-medidor-de-ultrassom` (o instrumento) e `medicao-de-espessura-por-ultrassom`
> (a malha), e entre `relatorio-de-inspecao-de-vaso-de-pressao` (vaso, seção a seção) e
> `como-gerar-laudo-nr13` (documento em qualquer equipamento da NR-13).

Links internos novos apontando para as páginas deste lote (feitos em 16/08/2026):
`checklist-de-inspecao-nr13`, `bloco-padrao-de-inspecao-nr13`, `como-gerar-laudo-nr13`,
`como-inspecionar-vaso-de-pressao`, `vida-remanescente-e-taxa-de-corrosao`,
`caldeira-sem-prontuario-o-que-fazer`, `periodicidade-de-inspecao-nr13-por-categoria` e
`blog/index.html`. Todas as 6 páginas novas linkam `sistema-nr13.html` no corpo, no aside e na
faixa final.

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
- [x] `blog/relatorio-de-inspecao-de-vaso-de-pressao.html` — 16/08/2026
- [x] `blog/como-fazer-checklist-nr13.html` — 16/08/2026
- [x] `blog/como-calibrar-medidor-de-ultrassom.html` — 16/08/2026
- [x] `blog/medicao-de-espessura-por-ultrassom.html` — 16/08/2026
- [x] `blog/inspecao-de-tubulacao-e-tanque-nr13.html` — 16/08/2026
- [x] `blog/placa-de-identificacao-ilegivel-o-que-fazer.html` — 16/08/2026
- [ ] `blog/spie-servico-proprio-de-inspecao-vale-a-pena.html`

**Cluster produto** (pilar: `/sistema-nr13.html`)
- [x] `blog/sistema-de-inspecao-nr13.html` — 12/08/2026
- [x] `blog/laudo-nr13-em-minutos.html` — 16/08/2026
- [x] `blog/relatorio-nr13-em-minutos.html` — 16/08/2026
- [x] `blog/checklist-de-inspecao-nr13-em-minutos.html` — 16/08/2026
- [ ] `blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar.html`
- [ ] `blog/portal-do-cliente-para-empresa-de-inspecao.html`

**Cluster NR-12** (pilar: `/adequacao-nr12-vitoria-es.html`)
- [ ] `blog/apreciacao-de-riscos-o-que-e.html`
- [ ] `blog/quanto-custa-adequar-maquina-nr12.html`

**Cluster PMOC** (pilar: `/pmoc-vitoria-es.html`)
- [ ] `blog/pmoc-obrigatorio-quem-precisa.html`
- [ ] `blog/qualidade-do-ar-interior-parametros.html`
