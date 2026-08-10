# Controle de Indexação — Google Search Console

Propriedade: **nr13sistema.com.br** · Sitemap: `https://nr13sistema.com.br/sitemap.xml`

Legenda: `[ ]` pendente · `[x]` indexação solicitada

> Limite prático do Search Console: **10 a 12 solicitações manuais por dia**.
> O sitemap é enviado **uma vez**; depois o Google revisita sozinho.
> Só faz sentido solicitar indexação de URL que já está **no ar** — a página precisa
> responder 200 no domínio antes do pedido.

## Fila de indexação

Ordem por retorno esperado. A landing do sistema vem primeiro: é o único produto vendido no site.

- [ ] https://nr13sistema.com.br/sistema-nr13.html
- [ ] https://nr13sistema.com.br/
- [ ] https://nr13sistema.com.br/inspecao-nr13-vitoria-es.html
- [ ] https://nr13sistema.com.br/blog/software-de-gestao-nr13-como-escolher.html
- [ ] https://nr13sistema.com.br/blog/
- [ ] https://nr13sistema.com.br/blog/quanto-custa-inspecao-nr13.html
- [ ] https://nr13sistema.com.br/blog/caldeira-sem-prontuario-o-que-fazer.html
- [ ] https://nr13sistema.com.br/blog/categoria-de-vaso-de-pressao-como-classificar.html
- [ ] https://nr13sistema.com.br/blog/teste-hidrostatico-quando-e-obrigatorio.html
- [ ] https://nr13sistema.com.br/blog/livro-de-registro-de-seguranca-nr13.html
- [ ] https://nr13sistema.com.br/adequacao-nr12-vitoria-es.html
- [ ] https://nr13sistema.com.br/pmoc-vitoria-es.html
- [ ] https://nr13sistema.com.br/ensaios-nao-destrutivos-vitoria-es.html
- [ ] https://nr13sistema.com.br/combate-a-incendio-vitoria-es.html

## Indexadas

(mover para cá após solicitar em "Inspecionar URL → Solicitar indexação")

## Fora da lista de propósito

- `privacidade.html` — `noindex`, não desperdiça crawl budget.

## Checklist de go-live

- [x] Nenhum marcador `PREENCHER` restante no site
- [x] Domínio decidido: **nr13sistema.com.br**, sem `www`, em todos os canonical
- [x] Sitemap atualizado com as 14 URLs indexáveis
- [x] `robots.txt` apontando para o sitemap no domínio correto
- [x] NAP idêntico em rodapé, JSON-LD e página de contato
- [ ] Arquivos publicados no servidor (o pedido de indexação depende disso)
- [ ] Redirecionamento 301 de `www` → sem `www`
- [ ] HTTPS ativo com redirecionamento de http → https
- [ ] Propriedade verificada no Search Console (**tipo domínio**, não prefixo de URL)
- [ ] Sitemap enviado no Search Console
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
- [ ] `blog/periodicidade-de-inspecao-nr13-por-categoria.html`
- [ ] `blog/spie-servico-proprio-de-inspecao-vale-a-pena.html`
- [ ] `blog/calibracao-de-valvula-de-seguranca-psv.html`
- [ ] `blog/vida-remanescente-e-taxa-de-corrosao.html`

**Cluster produto** (pilar: `/sistema-nr13.html`)
- [ ] `blog/planilha-de-inspecao-nr13-por-que-para-de-funcionar.html`
- [ ] `blog/portal-do-cliente-para-empresa-de-inspecao.html`

**Cluster NR-12** (pilar: `/adequacao-nr12-vitoria-es.html`)
- [ ] `blog/apreciacao-de-riscos-o-que-e.html`
- [ ] `blog/quanto-custa-adequar-maquina-nr12.html`

**Cluster PMOC** (pilar: `/pmoc-vitoria-es.html`)
- [ ] `blog/pmoc-obrigatorio-quem-precisa.html`
- [ ] `blog/qualidade-do-ar-interior-parametros.html`
