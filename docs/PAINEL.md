# Painel do projeto — o que foi feito e o que falta

Ponto de partida de toda sessão. Cada assunto tem um arquivo próprio com o detalhe; aqui fica só o
estado atual e o que falta. **Atualizar este painel ao fim de toda sessão de trabalho.**

| Assunto | Arquivo de controle |
|---|---|
| Indexação no Google (Search Console) | [INDEXACAO.md](INDEXACAO.md) |
| Backlinks, perfis e diretórios | [BACKLINKS.md](BACKLINKS.md) |
| Redirecionamentos e bugs do servidor (nginx) | [NGINX-REDIRECTS.md](NGINX-REDIRECTS.md) |
| Origem das imagens | [CREDITOS-IMAGENS.md](CREDITOS-IMAGENS.md) |
| Regras de SEO e publicação | [../LEIA-ME.md](../LEIA-ME.md) |

_Atualizado em 03/10/2026._

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

- **Site:** 78 páginas, 77 URLs no sitemap. Auditoria `node docs/auditar-indexacao.js` OK em 03/10/2026.
- **Efeito three.js:** removido em 03/10/2026 (pedido do Felipe) — hero com malha estática.
- **Deploy:** push vai para `felipe1santos/site-nr13`; **publicar exige Redeploy manual no Coolify**
  (app *SITE NR13*). Sem Redeploy a página nova dá 404 e não pode ser indexada.
- **Backlinks:** 0 no ar · 2 em andamento (Google, Bing) · 31 faltando.

## Falta fazer — em ordem

1. ~~Redeploy~~ feito 03/10 — lotes de 30/09 e 03/10 no ar (200).
2. **Indexação:** 10 pedidos aceitos em 03/10 + sitemap (77) processado. Próximo dia de cota: recrawl de
   laudo-de-playground, laudos-tecnicos-e-art e laudo-de-acessibilidade. ~10/10: inspecionar o lote.
3. **Google Perfil da Empresa** — conferir se as edições (nome Axial Engenharia, categoria, descrição)
   foram aprovadas; resolver as pendências listadas no histórico de `BACKLINKS.md`.
4. **Bing Places** — conferir publicação e pegar a URL pública (sessão expirou; Felipe precisa logar de novo).
5. **Diretórios** na ordem da seção 6 de `BACKLINKS.md` (Apple → Apontador → Solutudo → GuiaMais →
   Cylex → Hotfrog → TeleListas → Facebook → Pinterest → …). Felipe faz login/verificação; assistente
   preenche e pede OK antes de enviar.
6. **Servidor (VPS, Felipe):** 301 de `www` → sem `www`, 301 das 4 URLs antigas, `Cache-Control` de
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

- **03/10/2026** — Google Perfil da Empresa convertido para Axial Engenharia (montagem de estrutura
  metálica); Bing Places importado do Google; 3 landings do cluster recarga veicular/elétrica criadas,
  linkadas no rodapé (45 páginas), na home e na NT 23; sitemap 74 → 77; criado este painel; efeito three.js removido do site; Redeploy feito;
  10 pedidos de indexação aceitos e sitemap reenviado (77 processadas).
- **01/10/2026** — varredura de inspeção no Search Console (0 pedidos); lote de 30/09 ainda 404.
- **30/09/2026** — 5 landings (playground, piso, grama, AVCB, projeto de incêndio) + 4 de montagem
  metálica; checklist de backlinks criado.
- Antes disso: ver `INDEXACAO.md` (lotes desde 10/08/2026).
