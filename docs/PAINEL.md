# Painel do projeto — o que foi feito e o que falta

Ponto de partida de toda sessão. Cada assunto tem um arquivo próprio com o detalhe; aqui fica só o
estado atual e o que falta. **Atualizar este painel ao fim de toda sessão de trabalho.**

| Assunto | Arquivo de controle |
|---|---|
| Indexação no Google (Search Console) | [INDEXACAO.md](INDEXACAO.md) |
| Backlinks, perfis e diretórios | [BACKLINKS.md](BACKLINKS.md) |
| Redirecionamentos e bugs do servidor (nginx) | [NGINX-REDIRECTS.md](NGINX-REDIRECTS.md) |
| Parcerias, associações, portais e pautas | [PARCERIAS-E-PAUTAS.md](PARCERIAS-E-PAUTAS.md) |
| Origem das imagens | [CREDITOS-IMAGENS.md](CREDITOS-IMAGENS.md) |
| Pesquisa de demanda (volumes de busca na GV) | [PESQUISA-DEMANDA-GV.md](PESQUISA-DEMANDA-GV.md) |
| Regras de SEO e publicação | [../LEIA-ME.md](../LEIA-ME.md) |

_Atualizado em 08/10/2026._

## Regras fixas (pedido do Felipe)

1. **Toda página criada, renomeada ou apagada → atualizar o `sitemap.xml` no mesmo dia**
   (`<loc>` + `lastmod` de hoje), registrar a URL em `INDEXACAO.md` e, depois do deploy,
   reenviar o sitemap no Search Console e solicitar indexação. Conferir com
   `node docs/auditar-indexacao.js` — ele falha se alguma página ficar fora do sitemap.
2. **Tudo o que for feito no projeto — páginas, indexação, backlinks, cadastros, deploy,
   parcerias — fica registrado em markdown** (este painel + o arquivo do assunto), com data,
   para saber o que foi feito e o que falta.
3. Push no GitHub não publica: depois de todo push, Redeploy no Coolify e conferir com `curl`.

---

## Estado atual

- **Site:** 110 páginas, 109 URLs no sitemap. Auditoria `node docs/auditar-indexacao.js` OK em 08/10/2026.
- **08/10/2026:** pesquisa de volume (`PESQUISA-DEMANDA-GV.md`) → **14 landings de serviços novos NO AR** (commit `ac70bc1`).
  Felipe decidiu: **parceiros executam, Axial orça e direciona** — páginas dizem "equipe pronta para atender toda a demanda".
  Depois, **9 páginas de acessibilidade** testando 4 abordagens (segmento, cidade, preço, guia técnico) — commit `15f30b8`.
- **Indexação 08/10:** 8 pedidos aceitos (4 acessibilidade de 07/10 + SPDA, cautelar, inspeção predial, topografia),
  cota acabou no 9º. Sitemap reenviado. Fila restante em `INDEXACAO.md`.
- **Hook de início de sessão** (`.claude/settings.local.json` → `.claude/hooks/fila-indexacao.js`): toda sessão nova
  lista as URLs `[ ]` de `INDEXACAO.md` para pedir indexação antes de qualquer outra coisa (pedido do Felipe).
- **07/10/2026:** 4 landings de acessibilidade com ART no ar (alvará, condomínio, Ministério Público/TAC, ART) —
  hero sem efeito, 16 fotos novas do Pexels (Pinterest descartado: sem licença comercial). Detalhe em `INDEXACAO.md`.
- **Efeito three.js:** removido em 03/10/2026 (pedido do Felipe) — hero com malha estática.
- **Deploy:** push vai para `felipe1santos/site-nr13`; **publicar exige Redeploy manual no Coolify**
  (app *SITE NR13*). Sem Redeploy a página nova dá 404 e não pode ser indexada.
- **Backlinks:** 0 no ar · 2 em andamento (Google, Bing) · 31 faltando.

## Falta fazer — em ordem

00. **Próximo dia de cota (depois de ~05h):** pedir indexação na ordem: regularização (deu cota excedida), reforma NBR 16280,
   estanqueidade de gás, NR-10, projeto elétrico, entrega de imóvel, linha de vida, LTCAT, licenciamento, sondagem;
   depois as 9 de acessibilidade de 08/10 (hub NBR 9050 primeiro, como recrawl). ~2 dias de cota no total.
   **Em 30–60 dias:** comparar no Search Console o desempenho das 4 abordagens de acessibilidade para decidir o próximo lote.

0. ~~Indexação do lote de acessibilidade (07/10)~~ — alvará, condomínio, MP e ART solicitados em 08/10. Falta só o recrawl da NBR 9050 (entra com o lote de 08/10).

1. ~~Redeploy~~ feito 03/10 — lotes de 30/09 e 03/10 no ar (200).
2. **Indexação:** 10 pedidos aceitos em 03/10 + sitemap (77) processado. Próximo dia de cota (vira ~04h/05h de Brasília): 4 guias
   novos (checklist já pedido; fila em INDEXACAO.md) + reenviar sitemap (82), depois recrawl de laudo-de-playground,
   laudos-tecnicos-e-art e laudo-de-acessibilidade. ~10/10: inspecionar o lote.
3. **Google Perfil da Empresa** — conferir se as edições (nome Axial Engenharia, categoria, descrição)
   foram aprovadas; resolver as pendências listadas no histórico de `BACKLINKS.md`.
4. **Bing Places** — publicação prevista para 10–15/10 (ETA 7–12 dias). Quando publicar: pegar a URL
   pública e conferir a categoria ("Fabricantes de aço" veio errada da sincronização).
5. **Apple Business — pausado** (Felipe volta depois; dados prontos no Histórico de 04/10 em `BACKLINKS.md`).
   **Diretórios** na ordem da seção 6 de `BACKLINKS.md` (Apontador → Solutudo → GuiaMais →
   Cylex → Hotfrog → TeleListas → Facebook → Pinterest → …). Felipe faz login/verificação; assistente
   preenche e pede OK antes de enviar.
6. **Parcerias e pautas** — e-mail pronto para Portal da Engenharia e JSST (aguarda OK para enviar);
   lista de parceiros (compressores, caldeiraria) e 5 artigos novos em `PARCERIAS-E-PAUTAS.md`.
7. **Servidor (VPS, Felipe):** 301 de `www` → sem `www`, 301 das 4 URLs antigas, `Cache-Control` de
   assets, MIME do `site.webmanifest` — blocos prontos em `NGINX-REDIRECTS.md`.

## Decisões tomadas (03/10/2026 — Felipe: "você decide")

- **Horário oficial:** segunda a sexta, **08h–18h** (o que o site já mostra). Google corrigido em 03/10 (em análise).
- **Área atendida:** a mesma do site — Vitória, Vila Velha, Serra, Cariacica, Viana, Guarapari, Fundão,
  Anchieta, Aracruz, Linhares. Google ajustado em 03/10.
- **YouTube:** https://www.youtube.com/@nr13sistema — no `sameAs` da home (no ar) e enviado ao Google.
- **CNPJ:** não usar o comprovante disponível (não é da Axial). Diretório que exigir CNPJ fica pendente.
- **Perfil duplicado de Cariacica no Google:** remoção é exclusão de dados — fica para o Felipe
  (Gerenciador → marcar o perfil → Remover). Enquanto não verificado, não aparece no Maps.

## Pendências que só o Felipe resolve

- Criar conta / fazer login em cada diretório (Apple, Apontador, Solutudo, GuiaMais, Cylex, Hotfrog,
  TeleListas, Facebook, Pinterest…) — o assistente não cria conta nem entra com senha.
- Confirmar com o parceiro eletricista NR-10, garantia e prazo antes de citar nas páginas.
- Deixar a janela do Chrome aberta (não minimizada) quando o assistente for editar o Google:
  minimizada, o painel congela.

## Parcerias comerciais

| Data | Parceiro | Serviços | Modelo | Páginas no site |
|---|---|---|---|---|
| 03/10/2026 | Eletricista da Grande Vitória (Weverton) | Wallbox, infraestrutura e passagem de cabos, quadros, proteções, adequação para carregadores | Axial capta pelo site e repassa; fica com **20%** | `instalacao-de-wallbox-vitoria-es`, `carregador-de-carro-eletrico-para-empresas-vitoria-es`, `montagem-de-quadro-eletrico-vitoria-es` (+ NT 23 já existente) |

## Linha do tempo

- **08/10/2026 (madrugada)** — Felipe confirmou parceiros para os 14 serviços; texto "equipe pronta" incluído; deploy
  `ac70bc1`; 8 indexações + sitemap 100; hook de fila de indexação criado; 9 páginas de acessibilidade (escola, clínica,
  hotel/pousada, igreja, Vila Velha, Guarapari, quanto custa, guia de banheiro, guia de rampa) — deploy `15f30b8`, sitemap 109.

- **08/10/2026 (início)** — pesquisa de demanda na Grande Vitória (Planejador do Google Ads, faixas; 2 agentes de pesquisa web:
  volumes/concorrência e leis locais); 14 landings criadas com 4–5 fotos Pexels cada (55 WebP novas), links recíprocos em
  14 páginas + pilar de laudos, sitemap 86 → 100, auditoria OK. Deploy pendente da decisão sobre quem executa.

- **03/10/2026** — Google Perfil da Empresa convertido para Axial Engenharia (montagem de estrutura
  metálica); Bing Places importado do Google; 3 landings do cluster recarga veicular/elétrica criadas,
  linkadas no rodapé (45 páginas), na home e na NT 23; sitemap 74 → 77; criado este painel; efeito three.js removido do site; Redeploy feito;
  10 pedidos de indexação aceitos e sitemap reenviado (77 processadas); Google com horário/área/YouTube;
  Bing ressincronizado (ETA 7–12 dias); pesquisa de parcerias e pautas; 5 guias técnicos publicados (checklist de recebimento, calculadora de
  wallbox, modelo de ata para condomínio, maresia, compressor e NR-13).
- **01/10/2026** — varredura de inspeção no Search Console (0 pedidos); lote de 30/09 ainda 404.
- **30/09/2026** — 5 landings (playground, piso, grama, AVCB, projeto de incêndio) + 4 de montagem
  metálica; checklist de backlinks criado.
- Antes disso: ver `INDEXACAO.md` (lotes desde 10/08/2026).
