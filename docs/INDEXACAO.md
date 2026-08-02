# Controle de Indexação — Google Search Console

Legenda: `[ ]` pendente · `[x]` indexação solicitada

> Limite prático do Search Console: **10 a 12 solicitações manuais por dia**.
> O sitemap é enviado **uma vez**; depois o Google revisita sozinho.

## Pendentes

- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/inspecao-nr13-vitoria-es.html
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/adequacao-nr12-vitoria-es.html
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/pmoc-vitoria-es.html
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/ensaios-nao-destrutivos-vitoria-es.html
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/combate-a-incendio-vitoria-es.html
- [ ] https://PREENCHER — ex: www.exemplo.com.br (sem https://, sem barra no fim)/sistema-nr13.html

## Indexadas

(mover para cá após solicitar em "Inspecionar URL → Solicitar indexação")

## Fora da lista de propósito

- `privacidade.html` — `noindex`, não desperdiça crawl budget.

## Checklist de go-live

- [ ] `dados.json` totalmente preenchido (nenhum campo com `PREENCHER`)
- [ ] `aplicar-dados.ps1` executado sem marcadores pendentes
- [ ] Domínio decidido **com ou sem www** — e o canonical de todas as páginas usando a mesma versão
- [ ] Redirecionamento 301 da versão não escolhida para a escolhida
- [ ] HTTPS ativo com redirecionamento de http → https
- [ ] Sitemap enviado no Search Console
- [ ] Propriedade verificada no Search Console (domínio, não prefixo de URL)
- [ ] Google Analytics 4 instalado
- [ ] Perfil da Empresa no Google criado, com o **mesmo NAP** do rodapé e do JSON-LD
- [ ] Chave da Maps Embed API restrita por referenciador HTTP ao domínio do site
- [ ] Teste de dados estruturados: https://search.google.com/test/rich-results
- [ ] PageSpeed Insights nas 7 URLs

## Próximos lotes de conteúdo

O blueprint pede cluster: 1 landing pilar + 4 a 6 artigos que apontam para ela.
Fila sugerida, na ordem de retorno esperado:

**Cluster NR-13** (pilar: `/inspecao-nr13-vitoria-es.html`)
- [ ] `blog/quanto-custa-inspecao-nr13.html`
- [ ] `blog/caldeira-sem-prontuario-o-que-fazer.html`
- [ ] `blog/categoria-de-vaso-de-pressao-como-classificar.html`
- [ ] `blog/teste-hidrostatico-quando-e-obrigatorio.html`

**Cluster NR-12** (pilar: `/adequacao-nr12-vitoria-es.html`)
- [ ] `blog/apreciacao-de-riscos-o-que-e.html`
- [ ] `blog/quanto-custa-adequar-maquina-nr12.html`
- [ ] `blog/categoria-de-seguranca-13849.html`

**Cluster PMOC** (pilar: `/pmoc-vitoria-es.html`)
- [ ] `blog/pmoc-obrigatorio-quem-precisa.html`
- [ ] `blog/qualidade-do-ar-interior-parametros.html`

Regra: **toda página nova entra no sitemap.xml e nesta lista no mesmo dia em que é criada.**
