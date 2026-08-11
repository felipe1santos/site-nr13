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
