# Controle de Indexação — Google Search Console

Propriedade: **nr13sistema.com.br** · Sitemap: `https://nr13sistema.com.br/sitemap.xml`

Legenda: `[ ]` pendente · `[x]` indexação solicitada

> Limite prático do Search Console: **10 a 12 solicitações manuais por dia**.
> O sitemap é enviado **uma vez**; depois o Google revisita sozinho.
> Só faz sentido solicitar indexação de URL que já está **no ar** — a página precisa
> responder 200 no domínio antes do pedido.

## REGRA PERMANENTE — auditar indexação antes de fechar qualquer sessão

**Obrigatório em toda sessão de trabalho no site**, mesmo que nenhuma página tenha sido criada:

1. Rodar as duas auditorias de `LEIA-ME.md` (seção **REGRA OBRIGATÓRIA — indexação**):
   nenhuma página indexável pode ficar fora do `sitemap.xml`, e nenhuma URL do sitemap
   pode apontar para arquivo inexistente.
2. Conferir se toda página criada nesta sessão tem linha própria neste arquivo.
3. Solicitar indexação no Search Console de tudo o que já responde 200 — até a cota do dia
   (teto prático de ~10 a 12 pedidos). **O que não couber fica na fila abaixo, com `[ ]`.**
4. Reenviar o `sitemap.xml` sempre que o total de URLs mudar.
5. Revisar as filas antigas: `[ ]` parado há muitos dias é sinal de deploy pendente ou de
   URL esquecida. Anotar o motivo em vez de deixar em branco.

> URL que não está no ar **não pode** ser solicitada — o Search Console recusa. Nesse caso a
> linha fica `[ ]` com a observação "aguardando deploy".

---

## Auditoria de indexação — 04/09/2026

Executada no Search Console (`sc-domain:nr13sistema.com.br`). Estado no painel:
**36 páginas indexadas · 20 não indexadas (4 motivos)**.

### Fila antiga: era falso-positivo — tudo já está indexado

As 20 URLs que estavam marcadas `[ ]` nos lotes de 10/08, 12/08 e 16/08 foram inspecionadas
uma a uma. **Todas responderam "O URL está no Google · A página está indexada".**
Nenhuma solicitação manual foi necessária, nenhuma cota foi consumida.

- [x] `adequacao-nr12-vitoria-es.html`
- [x] `pmoc-vitoria-es.html`
- [x] `ensaios-nao-destrutivos-vitoria-es.html`
- [x] `combate-a-incendio-vitoria-es.html`
- [x] `instalacao-sistema-de-incendio-vitoria-es.html`
- [x] `blog/` (hub)
- [x] `blog/sistema-de-inspecao-nr13.html`
- [x] `blog/periodicidade-de-inspecao-nr13-por-categoria.html`
- [x] `blog/checklist-de-inspecao-nr13.html`
- [x] `blog/calibracao-de-valvula-de-seguranca-psv.html`
- [x] `blog/bloco-padrao-de-inspecao-nr13.html`
- [x] `blog/vida-remanescente-e-taxa-de-corrosao.html`
- [x] `blog/relatorio-de-inspecao-de-vaso-de-pressao.html`
- [x] `blog/como-fazer-checklist-nr13.html`
- [x] `blog/como-calibrar-medidor-de-ultrassom.html`
- [x] `blog/medicao-de-espessura-por-ultrassom.html`
- [x] `blog/inspecao-de-tubulacao-e-tanque-nr13.html`
- [x] `blog/placa-de-identificacao-ilegivel-o-que-fazer.html`
- [x] `blog/laudo-nr13-em-minutos.html`
- [x] `blog/relatorio-nr13-em-minutos.html`
- [x] `blog/checklist-de-inspecao-nr13-em-minutos.html`

> **Lição para os próximos lotes:** a fila deste arquivo só é confiável se for reconciliada
> com o Search Console. Inspecionar URL **não consome cota** — inspecione antes de solicitar,
> senão a cota diária é gasta em página que já está no índice.

### Cobertura fechada — todas as 34 URLs no ar estão indexadas

Além das 20 URLs da fila, foram inspecionadas as 14 restantes que já estavam publicadas — as que
o arquivo marcava `[x]` desde 10/08 e 13/08 e que nunca tinham sido reconferidas. Vale repetir:
`[x]` no histórico significa **solicitada**, não **indexada**.

- [x] `/` (home) — indexada. Encerra o diagnóstico de 10/08, quando aparecia como
      "Cópia sem página canônica selecionada pelo usuário".
- [x] `/sistema-nr13.html` · `/inspecao-nr13-vitoria-es.html`
- [x] `blog/quanto-custa-inspecao-nr13` · `blog/caldeira-sem-prontuario-o-que-fazer`
- [x] `blog/categoria-de-vaso-de-pressao-como-classificar` · `blog/teste-hidrostatico-quando-e-obrigatorio`
- [x] `blog/livro-de-registro-de-seguranca-nr13` · `blog/software-de-gestao-nr13-como-escolher`
- [x] `blog/como-gerar-laudo-nr13` · `blog/como-inspecionar-vaso-de-pressao`
- [x] `blog/como-inspecionar-caldeira-nr13` · `blog/como-calibrar-manometro`

**Resultado: 34 de 34 URLs publicadas estão no índice.** Nenhuma solicitação manual foi
necessária e nenhuma cota foi consumida — só inspeção, que é gratuita.

> Consequência prática: as 2 páginas em "Rastreada, mas não indexada" **não são páginas nossas
> do sitemap** — todas as 34 foram verificadas uma a uma. São URLs residuais que o Google conhece
> de outra origem (marca antiga ou variação de `www`). Não há ação de código para elas.

---

### As 20 não indexadas, por motivo

| Motivo | Páginas | O que é, na prática |
|---|---|---|
| Não encontrado (404) | 9 | URLs da marca antiga ("NR13 AutoDocs"), ainda no índice do Google. Resolve com os 301 de `docs/NGINX-REDIRECTS.md`. |
| Página alternativa com tag canônica adequada | 8 | **6 são `www.`** + `nr13sistema.com.br/index.html` e `www.nr13sistema.com.br/index.html`. Comportamento correto do canonical, mas o `www` só some com o 301. |
| Página com redirecionamento | 1 | Esperado. |
| Rastreada, mas não indexada no momento | 2 | Decisão dos sistemas do Google, sem ação de código. Acompanhar. |

Os exemplos confirmados no relatório de canônica alternativa foram:
`www.nr13sistema.com.br/` · `www.nr13sistema.com.br/index.html` ·
`www.nr13sistema.com.br/blog/calibracao-de-valvula-de-seguranca-psv.html` ·
`.../como-inspecionar-caldeira-nr13.html` · `.../como-calibrar-manometro.html` ·
`.../bloco-padrao-de-inspecao-nr13.html` · `.../como-inspecionar-vaso-de-pressao.html` ·
`nr13sistema.com.br/index.html`.

### Ação nº 1 pendente, e é a mesma desde 10/08: o 301 de `www`

Seis das oito "canônicas alternativas" são `www`. Enquanto `https://www.nr13sistema.com.br/`
responder 200 em vez de redirecionar, o Google continua rastreando duas versões de cada página
e queimando crawl budget. O bloco nginx está em `docs/NGINX-REDIRECTS.md`:

```nginx
server {
    listen 443 ssl;
    server_name www.nr13sistema.com.br;
    return 301 https://nr13sistema.com.br$request_uri;
}
```

### Ação nº 2: as 12 páginas novas não podem ser indexadas ainda

Verificado por HTTP em 04/09/2026: `https://nr13sistema.com.br/laudos-tecnicos-e-art-vitoria-es.html`
responde **404**. O `sitemap.xml` no ar ainda é o antigo (34 URLs); o deste repositório tem 46.
O Search Console recusa solicitação de indexação para URL que não responde 200.

Ordem depois do deploy:

1. Confirmar 200 nas 12 URLs novas.
2. Reenviar `https://nr13sistema.com.br/sitemap.xml` (46 URLs).
3. Trabalhar a fila do **Lote de 04/09/2026** acima, respeitando o teto de ~10 por dia —
   inspecionando cada URL antes de solicitar.
4. Solicitar recrawl da home (`/`), que ganhou a seção `#obras`.

---

## Lote de 04/09/2026 — 12 landings do cluster obras e engenharia predial

Origem: material comercial da empresa com as dez frentes de serviço (laudos e documentação,
segurança e adequações, climatização e ventilação, projetos e estruturas, montagens industriais,
condomínios e instalações, playgrounds, galpões/quadras/câmaras frias, reformas e fachadas,
patologias e corrosão). As frentes que já tinham página — NR-13, NR-12, PMOC, END e incêndio —
**não foram duplicadas**; AVCB continua em `combate-a-incendio-vitoria-es.html` e em
`instalacao-sistema-de-incendio-vitoria-es.html`.

Sitemap vai a **46 URLs**. Todas as 12 páginas fecham com `cta-band` para WhatsApp e
**não levam a faixa `.sys-band`**: são serviços de engenharia sem relação com o Sistema NR13.

### Fila de indexação (ordem de prioridade)

- [ ] https://nr13sistema.com.br/laudos-tecnicos-e-art-vitoria-es.html
- [ ] https://nr13sistema.com.br/manutencao-predial-para-condominios-vitoria-es.html
- [ ] https://nr13sistema.com.br/reformas-e-recuperacao-de-fachadas-vitoria-es.html
- [ ] https://nr13sistema.com.br/projetos-estruturais-vitoria-es.html
- [ ] https://nr13sistema.com.br/laudo-de-acessibilidade-nbr9050-vitoria-es.html
- [ ] https://nr13sistema.com.br/patologias-e-corrosao-estrutural-vitoria-es.html
- [ ] https://nr13sistema.com.br/construcao-de-galpoes-e-quadras-vitoria-es.html
- [ ] https://nr13sistema.com.br/laudo-de-playground-vitoria-es.html
- [ ] https://nr13sistema.com.br/camaras-frias-vitoria-es.html
- [ ] https://nr13sistema.com.br/exaustao-e-coifas-industriais-vitoria-es.html
- [ ] https://nr13sistema.com.br/montagem-industrial-vitoria-es.html
- [ ] https://nr13sistema.com.br/nt23-recarga-de-veiculos-eletricos-vitoria-es.html
- [ ] https://nr13sistema.com.br/ — recrawl da home, que ganhou a seção `#obras`

### Palavra-chave alvo e ângulo de cada página

| URL | Consulta principal | Ângulo (o que evita canibalizar) | Schema |
|---|---|---|---|
| `laudos-tecnicos-e-art-vitoria-es` | laudo técnico com ART em Vitória ES | **Pilar**: o que é laudo, os tipos e o que faz ser recusado | Service + Breadcrumb + FAQ |
| `laudo-de-acessibilidade-nbr9050-vitoria-es` | laudo de acessibilidade NBR 9050 | **Norma própria**: rota acessível, rampa, sanitário PcD | Service + Breadcrumb + FAQ |
| `projetos-estruturais-vitoria-es` | projeto estrutural em Vitória ES | **Papel/cálculo**: concepção, memória, detalhamento | Service + Breadcrumb + FAQ |
| `montagem-industrial-vitoria-es` | montagem industrial em Vitória ES | **Campo/execução**: rigging, torque, solda, base mecânica | Service + Breadcrumb + FAQ |
| `construcao-de-galpoes-e-quadras-vitoria-es` | construção de galpão em Vitória ES | **Obra completa**: da sondagem ao piso e às instalações | Service + Breadcrumb + FAQ |
| `camaras-frias-vitoria-es` | câmara fria em Vitória ES | **Refrigeração**: carga térmica, painel, degelo, registro | Service + Breadcrumb + FAQ |
| `exaustao-e-coifas-industriais-vitoria-es` | exaustão industrial e coifa | **Movimento de ar**: vazão, duto, captação na fonte | Service + Breadcrumb + FAQ |
| `reformas-e-recuperacao-de-fachadas-vitoria-es` | recuperação de fachada em Vitória ES | **Obra em altura**: mapeamento, tratamento, pintura, NR-35 | Service + Breadcrumb + FAQ |
| `patologias-e-corrosao-estrutural-vitoria-es` | patologia estrutural e corrosão | **Diagnóstico**: mecanismo, ensaio, perda de seção | Service + Breadcrumb + FAQ |
| `manutencao-predial-para-condominios-vitoria-es` | manutenção predial para condomínio | **Gestão**: plano NBR 5674, periodicidade, responsabilidade | Service + Breadcrumb + FAQ |
| `laudo-de-playground-vitoria-es` | laudo de playground NBR 16071 | **Área de lazer**: área de queda, piso amortecedor | Service + Breadcrumb + FAQ |
| `nt23-recarga-de-veiculos-eletricos-vitoria-es` | NT 23 CBMES carro elétrico | **Cauda longa nova**: recarga em garagem, risco de lítio | Service + Breadcrumb + FAQ |

### Canibalização controlada neste lote

- `laudos-tecnicos-e-art` é o **pilar** e linka `laudo-de-acessibilidade` e
  `patologias-e-corrosao` logo no bloco de tipos de laudo; as duas filhas declaram o recorte
  no primeiro parágrafo e apontam de volta.
- `projetos-estruturais` (papel) × `montagem-industrial` (campo) × `construcao-de-galpoes`
  (obra completa) se referenciam mutuamente, com o recorte declarado em cada uma.
- `camaras-frias` × `exaustao-e-coifas` × `pmoc-vitoria-es` são três escopos de ar/frio
  distintos: refrigeração de produto, movimentação de ar contaminado e qualidade do ar
  interior. Cada uma linka as outras duas.
- `reformas-e-recuperacao-de-fachadas` (execução) × `patologias-e-corrosao` (diagnóstico)
  se cruzam nos dois sentidos.
- **Acompanhar no Search Console:** se `laudos-tecnicos-e-art` começar a competir com as
  filhas pela mesma consulta, reforçar o recorte no primeiro parágrafo de cada uma.

### Links internos criados neste lote

- Rodapé de **todas** as páginas do site ganhou a coluna **"Obras e estruturas"** com as 12 URLs
  (o `.footer-grid` do CSS passou de 4 para 5 colunas, com breakpoint novo em 1180px).
- `index.html` ganhou a seção `#obras` com 12 cards `.caso` e um bloco `.sec-tags` de cauda longa.
- Cada uma das 12 páginas leva de 5 a 8 links internos contextuais no corpo, mais
  "Continue lendo" (6 links) e `aside` de "Serviços relacionados" (5 links).
- Nenhuma das 12 páginas linka o checkout Kiwify nem carrega a faixa `.sys-band`.

### Pendência conhecida deste lote

- [x] **Imagens próprias do cluster.** Resolvido em 04/09/2026: 37 fotos novas baixadas do
      Pexels e convertidas para WebP (heroes 1600x800, corpo 1200x800), registradas em
      `docs/CREDITOS-IMAGENS.md`. Cada página ficou com 4 a 5 imagens — hero + 2 ou 3 no corpo,
      ancoradas imediatamente antes do bloco que ilustram. O reuso caiu para no máximo 2 páginas
      por arquivo (fora `rodape-industrial` e `sistema-hero`, que são rodapé e faixa).
- [ ] **Trocar por fotos reais da empresa.** Banco de imagem converte menos que obra própria.
      Ordem de prioridade em `docs/CREDITOS-IMAGENS.md`; os blocos já estão prontos, basta
      substituir o arquivo mantendo as dimensões declaradas no HTML.
- [ ] **Deploy na VPS.** Enquanto as 12 URLs não responderem 200 no domínio, o Search Console
      recusa a solicitação de indexação. Publicar antes de trabalhar a fila acima.
- [ ] `?v=` de CSS/JS foi para `20260904a` em todas as 47 páginas (o `.footer-grid` mudou).

---

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
