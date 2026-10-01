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

## Lote 30/09/2026 — montagem metálica: laje, sobrado, mezanino + guia de treliças/perfis/aços

Pedido do Felipe: mais páginas de montagem de estrutura metálica (laje, sobrado, galpão…), "somos
especialistas em montagem", design parecido com a home, **sem three.js**, muitas fotos, botões
interativos com calculadora e tipos de elementos/materiais (treliças, aços). Escopo respeitado: só
**montagem**; projeto e material como opcionais; fabricação sempre do fabricante do cliente.
Galpão não ganhou página nova — `galpao-metalico-vitoria-es` já atende essa intenção.

| URL | Consulta principal | Ângulo (o que evita canibalizar) | Interativo | Schema |
|---|---|---|---|---|
| `estrutura-metalica-para-laje-vitoria-es` | estrutura metálica para laje / steel deck | **Laje sobre aço**: steel deck, treliçada, alveolar, ampliação | Calculadora de carga, concreto e fôrma; abas de elementos | WebPage + Service + Breadcrumb + FAQ (@graph) |
| `sobrado-em-estrutura-metalica-vitoria-es` | sobrado / casa em estrutura metálica | **Residencial**: esqueleto pilar–viga, metálica × concreto, ≠ steel frame | Estimativa de aço (t) e pilares; abas de partes da casa | WebPage + Service + Breadcrumb + FAQ |
| `mezanino-metalico-vitoria-es` | mezanino metálico | **Mezanino**: piso existente, tipos de piso, guarda-corpo NBR 14718 | Pilares, carga total e carga no pilar; abas de piso | WebPage + Service + Breadcrumb + FAQ |
| `trelicas-perfis-e-acos-estruturais` | tipos de treliça / perfil metálico / aço estrutural | **Informacional** (topo de funil e citação por IA) | Abas de treliça e perfil com diagrama SVG; calculadora de peso | TechArticle + Breadcrumb + FAQ |

Layout novo `.pg-mt` (seção 31 do `css/site.css`, CSS `?v=20260930a` só nessas 4 — mudança aditiva) e
`js/montagem-calc.js`. Conteúdo nasce no HTML (abas abertas e resultado inicial escritos); JS só organiza.
25 fotos novas do Pexels (`docs/CREDITOS-IMAGENS.md`). Links: home `.sec-tags` de obras, "Continue
lendo" de estruturas-metalicas, montagem e galpão. Sitemap 65 → 69. Criado `/llms.txt` (índice do
site para assistentes de IA, gerado do sitemap).

### Fila de indexação — 30/09

Deploy: commit `60b9fac` + Redeploy no Coolify (Livewire `deploy` no app **SITE NR13**, uuid
`hs48o0ko8cwc0g48gg0k4oos` — o link do Dashboard leva para APP CARDAPIO, não usar). 4 páginas, `llms.txt`
e sitemap (69) responderam 200. **Sitemap reenviado** ("Sitemap enviado"; o campo pede a URL completa
`https://nr13sistema.com.br/sitemap.xml` — só `sitemap.xml` dá "Endereço do sitemap inválido").
Cada URL inspecionada e conferida na tela antes do clique. **10 pedidos aceitos.**

- [x] https://nr13sistema.com.br/estrutura-metalica-para-laje-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/sobrado-em-estrutura-metalica-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/mezanino-metalico-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/trelicas-perfis-e-acos-estruturais.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/blog/apreciacao-de-riscos-o-que-e.html — estava "Rastreada, mas não indexada"; solicitada
- [x] https://nr13sistema.com.br/blog/quanto-custa-adequar-maquina-nr12.html — estava "Detectada, mas não indexada"; solicitada
- [x] https://nr13sistema.com.br/projetos-estruturais-vitoria-es.html — estava "Detectada, mas não indexada"; solicitada
- [x] https://nr13sistema.com.br/reformas-e-recuperacao-de-fachadas-vitoria-es.html — estava "Detectada, mas não indexada"; solicitada
- [x] https://nr13sistema.com.br/ — já indexada; recrawl pedido porque agora linka as 4 páginas novas
- [x] https://nr13sistema.com.br/montagem-de-estruturas-metalicas-vitoria-es.html — já indexada; recrawl pelos links novos

**Inspecionadas e já no Google (nenhum pedido gasto):** blog/spie, blog/planilha, blog/portal-do-cliente,
blog/pmoc-obrigatorio, blog/qualidade-do-ar, montagem-industrial, laudos-tecnicos-e-art, laudo-de-playground,
camaras-frias, construcao-de-galpoes-e-quadras, exaustao-e-coifas, laudo-de-acessibilidade,
manutencao-predial, nt23, patologias-e-corrosao, estruturas-metalicas, fabricacao-de-estruturas-metalicas.
Com isso, as filas antigas de 25/09, 26/09 e 27/09 abaixo estão **resolvidas** (os `[ ]` lá ficaram
históricos). Próximo passo: daqui a ~7 dias, inspecionar as 8 solicitadas hoje.

---

## Correção de escopo — 27/09/2026: a Axial NÃO fabrica estrutura metálica

O Felipe corrigiu: a empresa **não fabrica**; faz **projeto, fornecimento de material e montagem**. As 7 páginas do
cluster diziam fabricação própria e foram corrigidas no mesmo dia (selo "Projeto, material e montagem"; a estrutura
vem do fabricante que o cliente contrata, a Axial especifica, confere na chegada e monta).

- `fabricacao-de-estruturas-metalicas-vitoria-es` — **reposicionada** (URL mantida): agora é "Montagem de Estrutura
  Metálica Pré-Fabricada — Vitória ES" (cliente já comprou a estrutura; a Axial confere e monta). Fotos de oficina trocadas.
- `obra-em-estrutura-metalica-completa-vitoria-es` — "Obra em Estrutura Metálica: Projeto e Montagem — Vitória ES";
  saiu "construtora / chave na mão / turnkey"; fundação e obra civil ficam com terceiro do cliente.
- `galpao-metalico-vitoria-es` — title "Galpão Metálico em Vitória ES — Projeto e Montagem".
- `fornecimento-de-aco-estrutural-vitoria-es` — saiu corte/furação como serviço próprio (não confirmado).
- Home (cards e `.sec-tags`), `projetos-estruturais`, `construcao-de-galpoes` e o FAQ de `montagem-industrial`
  ("pacote com fabricação em oficina") também corrigidos.
- **Pendente de confirmação:** `exaustao-e-coifas-industriais` diz que a empresa fabrica dutos.

---

## Reescrita comercial — 27/09/2026 (cluster estruturas metálicas)

Pedido do Felipe: títulos de intenção comercial ("empresa que instala estrutura metálica"), texto direto,
mais fotos, tabelas e prova de especialidade para converter no WhatsApp. **URLs mantidas** (indexação já
solicitada em 26/09 e links no site todo); mudaram title, H1, description, corpo e JSON-LD. Sem números,
depoimentos ou garantias inventados — garantia só a legal (art. 618 do CC).

| URL | Title novo | Keyword comercial |
|---|---|---|
| `estruturas-metalicas-vitoria-es` | Empresa de Estrutura Metálica em Vitória ES | Axial | empresa de estrutura metálica |
| `montagem-de-estruturas-metalicas-vitoria-es` | Empresa de Montagem de Estrutura Metálica em Vitória ES | empresa que instala estrutura metálica |
| `fabricacao-de-estruturas-metalicas-vitoria-es` | ~~Fabricação…~~ → Montagem de Estrutura Metálica Pré-Fabricada — Vitória ES | montagem de estrutura pré-fabricada |
| `fornecimento-de-aco-estrutural-vitoria-es` | Perfil Metálico e Aço Estrutural — Fornecimento Vitória ES | perfil metálico, viga W |
| `galpao-metalico-vitoria-es` | Galpão Metálico em Vitória ES — Fabricação e Montagem | empresa de galpão metálico |
| `cobertura-metalica-para-quadra-vitoria-es` | Cobertura de Quadra em Vitória ES — Estrutura Metálica | empresa de cobertura de quadra |
| `obra-em-estrutura-metalica-completa-vitoria-es` | Construtora de Estrutura Metálica Chave na Mão — Vitória ES | construtora metálica chave na mão |

Cada página: hero com selos (ART, engenheiro responsável, projeto-fabricação-montagem, norma) e WhatsApp com
mensagem própria, 6 diferenciais, 3–4 tabelas, 7 etapas com entregável, CTA no meio, checklist do orçamento,
FAQ de 7 objeções. 27 fotos novas do Pexels (créditos em `docs/CREDITOS-IMAGENS.md`). Não re-solicitar
indexação só por isso: o pedido de 26/09 ainda está na fila do Google e o rastreio pega a versão nova.

---

## Lote 26/09/2026 — cluster estruturas metálicas (7) + câmara fria (4)

Pedido do sócio (25/09): "dar uma bombada" em estrutura metálica — uma página por assunto — e mais
portas de entrada para câmara fria. 11 landings novas na raiz, modelo `camaras-frias-vitoria-es.html`
(`pg-obras`, hero 3D, sem faixa de sistema, CTA WhatsApp). Fotos novas do Pexels em `img/`
(originais em `img/_raw/pexels/`, nome do arquivo termina no ID da foto no Pexels).

| URL | Consulta principal | Ângulo (o que evita canibalizar) | Schema |
|---|---|---|---|
| `estruturas-metalicas-vitoria-es` | estruturas metálicas em Vitória ES | **Pilar do cluster**: sistema construtivo, tipos, corrosão, linka as 6 filhas | Service + Breadcrumb + FAQ |
| `fornecimento-de-aco-estrutural-vitoria-es` | fornecimento de aço estrutural | **Material**: perfis, aços, certificado de usina, plano de corte | Service + Breadcrumb + FAQ |
| `fabricacao-de-estruturas-metalicas-vitoria-es` | fabricação de estruturas metálicas | **Fábrica**: corte, furação, solda AWS D1.1, inspeção, pintura | Service + Breadcrumb + FAQ |
| `montagem-de-estruturas-metalicas-vitoria-es` | montagem de estruturas metálicas | **Campo (edificação)**: base, içamento, torque, prumo, NR-35 — ≠ montagem-industrial (equipamento/pipe rack) | Service + Breadcrumb + FAQ |
| `galpao-metalico-vitoria-es` | galpão metálico | **Sistema estrutural do galpão**: pórtico, vão, ponte rolante — ≠ construcao-de-galpoes (obra completa) | Service + Breadcrumb + FAQ |
| `cobertura-metalica-para-quadra-vitoria-es` | cobertura metálica para quadra | **Só a cobertura**: arco/duas águas, vão, telha, vento — ≠ construcao-de-galpoes-e-quadras (piso/obra) | Service + Breadcrumb + FAQ |
| `obra-em-estrutura-metalica-completa-vitoria-es` | obra em estrutura metálica completa / turnkey | **Modelo de contratação**: contrato único do estudo à entrega | Service + Breadcrumb + FAQ |
| `camara-fria-para-restaurante-vitoria-es` | câmara fria para restaurante | **Segmento food service**: rush, cozinha apertada, condensadora longe do salão | Service + Breadcrumb + FAQ |
| `camara-fria-para-acougue-e-supermercado-vitoria-es` | câmara fria para açougue e supermercado | **Segmento varejo**: trilho de carcaça, câmaras por produto, expositores | Service + Breadcrumb + FAQ |
| `manutencao-de-camara-fria-vitoria-es` | manutenção de câmara fria | **Dor**: câmara existente que não gela, gelo, conserto e preventiva | Service + Breadcrumb + FAQ |
| `quanto-custa-camara-fria-vitoria-es` | quanto custa uma câmara fria | **Custo**: o que forma o preço, câmara usada, orçamento comparável | Service + Breadcrumb + FAQ |

Links internos: coluna "Obras e estruturas" do rodapé de todas as páginas da raiz ganhou
**Estruturas metálicas**; home `#obras` ganhou 4 cards (estruturas metálicas, galpão metálico,
cobertura de quadra, obra completa) e 7 termos no `.sec-tags` (os termos "montagem de estrutura
metálica" e "cobertura de quadra poliesportiva" passaram a apontar para as páginas novas);
"Continue lendo" recíproco em construcao-de-galpoes, montagem-industrial, projetos-estruturais,
camaras-frias e patologias-e-corrosao. Sitemap: 54 → 65 URLs.

> **Acompanhar canibalização:** `montagem-industrial-vitoria-es` tem "Estrutura Metálica" no
> `<title>` e um bloco de estruturas de galpão/mezanino. Se ela e `montagem-de-estruturas-metalicas`
> passarem a disputar a mesma consulta, tirar "Estrutura Metálica" do title da industrial.

### Fila de indexação — 26/09 (cluster)

Deploy: commit `4364651` + Redeploy manual no Coolify; as 65 URLs do sitemap responderam 200.
Sitemap reenviado ("Sitemap enviado", 47 → 65 URLs). Cada URL inspecionada ("O URL não está no
Google") e conferida na tela antes do clique. **11 pedidos aceitos; a cota acabou no 12º**
(`blog/apreciacao-de-riscos-o-que-e`, "A cota foi excedida").

- [x] https://nr13sistema.com.br/estruturas-metalicas-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/fornecimento-de-aco-estrutural-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/fabricacao-de-estruturas-metalicas-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/montagem-de-estruturas-metalicas-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/galpao-metalico-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/cobertura-metalica-para-quadra-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/obra-em-estrutura-metalica-completa-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/camara-fria-para-restaurante-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/camara-fria-para-acougue-e-supermercado-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/manutencao-de-camara-fria-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/quanto-custa-camara-fria-vitoria-es.html — "Indexação solicitada"

---

## Lote 26/09/2026 — 7 artigos do blog (fila "Próximos lotes de conteúdo")

Criados os 7 artigos que estavam `[ ]` em "Próximos lotes de conteúdo". Todos no `sitemap.xml`
(`lastmod` 2026-09-26; sitemap passou de 47 para 54 URLs), no hub `blog/index.html` (card, termo
em "Assuntos cobertos" e `hasPart` do JSON-LD) e com links recíprocos em páginas do mesmo tema.

| Página | Keyword principal | Recíproca em |
|---|---|---|
| `blog/spie-servico-proprio-de-inspecao-vale-a-pena` | SPIE serviço próprio de inspeção | periodicidade (aside + sec-tags), inspecao-nr13-vitoria-es |
| `blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar` | planilha de inspeção NR13 | software-de-gestao-nr13-como-escolher, sistema-de-inspecao-nr13 |
| `blog/portal-do-cliente-para-empresa-de-inspecao` | portal do cliente para empresa de inspeção | sistema-de-inspecao-nr13, laudo-nr13-em-minutos, como-gerar-laudo-nr13 |
| `blog/apreciacao-de-riscos-o-que-e` | apreciação de riscos NR-12 | adequacao-nr12-vitoria-es, sistema-nr12 |
| `blog/quanto-custa-adequar-maquina-nr12` | quanto custa adequar máquina NR-12 | adequacao-nr12-vitoria-es, sistema-nr12 |
| `blog/pmoc-obrigatorio-quem-precisa` | PMOC obrigatório: quem precisa | pmoc-vitoria-es, manutencao-predial-para-condominios |
| `blog/qualidade-do-ar-interior-parametros` | parâmetros de qualidade do ar interior | pmoc-vitoria-es, exaustao-e-coifas-industriais |

Artigos NR-12 fecham com faixa do **Sistema NR12** (WhatsApp, sem Kiwify); artigos PMOC fecham com
`cta-band` de WhatsApp, sem faixa de sistema (regra 6 do LEIA-ME).

### Fila de indexação — 27/09 (cota de 26/09 esgotada; páginas já no ar, 200) — RESOLVIDA em 30/09, ver lote 30/09

- [ ] https://nr13sistema.com.br/blog/spie-servico-proprio-de-inspecao-vale-a-pena.html
- [ ] https://nr13sistema.com.br/blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar.html
- [ ] https://nr13sistema.com.br/blog/portal-do-cliente-para-empresa-de-inspecao.html
- [ ] https://nr13sistema.com.br/blog/apreciacao-de-riscos-o-que-e.html
- [ ] https://nr13sistema.com.br/blog/quanto-custa-adequar-maquina-nr12.html
- [ ] https://nr13sistema.com.br/blog/pmoc-obrigatorio-quem-precisa.html
- [ ] https://nr13sistema.com.br/blog/qualidade-do-ar-interior-parametros.html

---

## Indexação — 25/09/2026

Reconciliado com o relatório **Páginas** do Search Console (dados de 20/09): 39 indexadas, 32 não
indexadas. As pendências reais eram só **11 URLs em "Detectada, mas não indexada"** — 10 landings
do lote de 04/09 e `sistema-nr12.html`. O resto das não indexadas é 404 antigo, canônica
alternativa, redirecionamento e `app.nr13sistema.com.br/login` (fora de escopo). Todas as 47 URLs
do sitemap respondem 200. `laudo-de-playground` e `laudos-tecnicos-e-art` não aparecem mais como
não indexadas.

Cada URL foi inspecionada antes do pedido e a URL na tela foi conferida por JS antes do clique.

- [x] https://nr13sistema.com.br/sistema-nr12.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/camaras-frias-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/construcao-de-galpoes-e-quadras-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/exaustao-e-coifas-industriais-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/laudo-de-acessibilidade-nbr9050-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/manutencao-predial-para-condominios-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/nt23-recarga-de-veiculos-eletricos-vitoria-es.html — "Indexação solicitada"
- [x] https://nr13sistema.com.br/patologias-e-corrosao-estrutural-vitoria-es.html — "Indexação solicitada"
- [?] https://nr13sistema.com.br/montagem-industrial-vitoria-es.html — pedido disparado, mas a tela
  re-renderizou antes de exibir a confirmação. Provavelmente contou na cota. Refazer se continuar
  "Detectada, mas não indexada".

### Fila para 26/09 — cota esgotada ("A cota foi excedida") no 10º pedido — RESOLVIDA em 30/09, ver lote 30/09

- [ ] https://nr13sistema.com.br/projetos-estruturais-vitoria-es.html
- [ ] https://nr13sistema.com.br/reformas-e-recuperacao-de-fachadas-vitoria-es.html
- [ ] https://nr13sistema.com.br/montagem-industrial-vitoria-es.html — só se o [?] acima não tiver pegado

---

## Deploy e indexação — 04/09/2026 (noite)

### Deploy: FEITO

Push para `felipe1santos/site-nr13` (commit `095fd6f`, 90 arquivos) e deploy disparado no Coolify
(painel em `http://187.77.34.112:8000`, projeto "My first project", aplicação **SITE NR13**,
botão **Redeploy**). O repo **não tem webhook**, então push sozinho não publica — o Redeploy
manual é obrigatório.

Verificado depois do deploy:

- 12/12 páginas novas respondendo **200**
- `sitemap.xml` no ar com **46 URLs** (era 34)
- `id="obras"` presente na home publicada
- imagens novas e `css/site.css?v=20260904a` servindo

### Sitemap: REENVIADO

`https://nr13sistema.com.br/sitemap.xml` reenviado no Search Console — confirmação
"Sitemap enviado", data de envio atualizada para 04/09/2026. A coluna "Páginas encontradas"
ainda mostrava 34 no momento do envio, porque o Google só reprocessa depois.

> Há um segundo sitemap cadastrado, `https://www.nr13sistema.com.br/sitemap.xml`, enviado em
> 24/06/2026. Ele existe só por causa da ausência do 301 de `www` e deve ser removido do
> Search Console assim que o redirect for aplicado.

### Indexação: 1 de 12 — ERRO DE EXECUÇÃO, COTA QUEIMADA

**O que deu errado.** Para trocar a URL inspecionada eu clicava na caixa de inspeção e digitava
o endereço. O clique acertava a caixa, mas o texto não era aplicado e a página **continuava
exibindo a URL anterior**. Como eu não conferia qual URL estava na tela antes de clicar em
"Solicitar indexação", cliquei 12 vezes seguidas no botão da **mesma página**
(`laudos-tecnicos-e-art`), em vez de uma vez em cada uma das 12.

Resultado:

- `laudos-tecnicos-e-art-vitoria-es.html` — solicitada e **já indexada** ("O URL está no Google")
- as outras 11 — **nenhuma solicitação registrada**
- cota diária **esgotada**: "Não foi possível processar a solicitação porque sua cota diária foi
  excedida. Tente novamente amanhã."

A home foi verificada e continua **indexada**; não precisava de solicitação.

**Causa raiz.** O viewport real da aba é 1920x962, mas a captura de tela chega em 1565x784 — as
coordenadas de clique não correspondem ao que a imagem mostra. O clique caía dentro da caixa mas
o `type` subsequente não era aplicado ao campo.

**Método que funciona** (validado): setar o valor pelo setter nativo do input e disparar Enter.

```js
const inp = [...document.querySelectorAll('input')]
  .find(i => (i.getAttribute('aria-label') || '').startsWith('Inspecionar qualquer URL'));
const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
setter.call(inp, url);
inp.dispatchEvent(new Event('input', { bubbles: true }));
inp.focus();
for (const t of ['keydown','keypress','keyup'])
  inp.dispatchEvent(new KeyboardEvent(t, { key:'Enter', keyCode:13, which:13, bubbles:true }));
```

**Regra para a próxima vez:** antes de clicar em "Solicitar indexação", **confirmar que a URL
exibida no topo é a URL pretendida**. Solicitar consome cota; inspecionar não. Clicar
"Solicitar novamente" na mesma página consome cota igual.

### Fila para amanhã (05/09) — 11 URLs, cota renovada

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

- [x] ~~laudos-tecnicos-e-art-vitoria-es.html~~ — solicitada e já indexada em 04/09

> São 11 para uma cota de ~10 a 12: cabe em um dia, mas sem folga. Se a última for recusada,
> ela entra no dia seguinte.

### 301 de www: ainda PENDENTE — e não precisa de nginx

A causa está no Coolify, não no nginx. Em **SITE NR13 → Configuration → General** existe o campo
**Direction**, hoje em `Allow www & non-www.`. O dropdown tem a opção `Redirect to non-www.`,
que resolve o 301 pelo proxy do próprio Coolify.

Ao clicar em **Set Direction**, o Coolify abre um modal de confirmação com aviso vermelho —
*"This operation is permanent and cannot be undone"* e *"All traffic will be redirected to the
selected direction"* — e exige digitar a URL da aplicação
(`https://nr13sistema.com.br,https://www.nr13sistema.com.br/`) para liberar o botão.

Não foi aplicado nesta sessão, por decisão do Felipe depois de ver o aviso. O campo foi conferido
e continua em `Allow www & non-www.` — nada foi salvo.

`docs/NGINX-REDIRECTS.md` continua válido como alternativa, mas a via do Coolify é mais simples.

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
- [x] **Deploy na VPS.** Feito em 04/09/2026: as 12 URLs respondem 200 e o sitemap no ar tem 46 URLs.
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

## Página nova — 12/09/2026

- [ ] `sistema-nr12.html` — página de produto do **Sistema NR12** (software de gestão NR-12
  com módulo NR-10 integrado). Já está no `sitemap.xml` (`lastmod` 2026-09-12), linkada no
  menu principal e no rodapé de todas as páginas do site. **Aguardando deploy**: só solicitar
  indexação depois que `https://nr13sistema.com.br/sistema-nr12.html` responder 200.
  Segundo pilar do site, ao lado de `/sistema-nr13.html` — o cluster NR-12 do blog
  (`apreciacao-de-riscos-o-que-e`, `quanto-custa-adequar-maquina-nr12`) deve passar a apontar
  para ela, além de `/adequacao-nr12-vitoria-es.html`.
- Assets novos da página: `css/nr12.css`, `js/nr12-risco.js` e as fotos
  `hero-sistema-nr12`, `nr12-inspecao-tablet`, `nr12-ponto-de-operacao`,
  `nr12-painel-comando`, `nr10-painel-tecnico`, `nr10-quadro-disjuntores` (WebP em `img/`).
- Versão de cache de todos os assets subiu de `?v=20260908a` para `?v=20260912a`
  (o `css/site.css` mudou: media query nova do menu com sete itens).

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
- [x] `blog/spie-servico-proprio-de-inspecao-vale-a-pena.html` — 26/09/2026

**Cluster produto** (pilar: `/sistema-nr13.html`)
- [x] `blog/sistema-de-inspecao-nr13.html` — 12/08/2026
- [x] `blog/laudo-nr13-em-minutos.html` — 16/08/2026
- [x] `blog/relatorio-nr13-em-minutos.html` — 16/08/2026
- [x] `blog/checklist-de-inspecao-nr13-em-minutos.html` — 16/08/2026
- [x] `blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar.html` — 26/09/2026
- [x] `blog/portal-do-cliente-para-empresa-de-inspecao.html` — 26/09/2026

**Cluster NR-12** (pilar: `/adequacao-nr12-vitoria-es.html`)
- [x] `blog/apreciacao-de-riscos-o-que-e.html` — 26/09/2026
- [x] `blog/quanto-custa-adequar-maquina-nr12.html` — 26/09/2026

**Cluster PMOC** (pilar: `/pmoc-vitoria-es.html`)
- [x] `blog/pmoc-obrigatorio-quem-precisa.html` — 26/09/2026
- [x] `blog/qualidade-do-ar-interior-parametros.html` — 26/09/2026
