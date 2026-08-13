# Correções de servidor (nginx) — pendentes

Diagnóstico feito em **12/08/2026** com o Search Console e testes ao vivo no domínio.
Nada aqui depende do conteúdo do site: são três correções na configuração do nginx.

---

## Bug 1 — `www` responde 200 em vez de redirecionar (CRÍTICO)

**Comprovado:** `https://www.nr13sistema.com.br/` carrega o site inteiro com status 200.
Pior: o Search Console mostra **`https://www.nr13sistema.com.br/` como página indexada**, e a
home canônica `https://nr13sistema.com.br/` como *"Cópia sem página canônica selecionada pelo
usuário"*. O Google escolheu a versão errada como principal.

O `<link rel="canonical">` está correto em todas as páginas, mas canonical é **dica**, não ordem.
Enquanto as duas versões responderem 200, o problema continua.

```nginx
server {
    listen 443 ssl;
    http2 on;
    server_name www.nr13sistema.com.br;

    # mesmos certificados do server block principal
    ssl_certificate     /etc/letsencrypt/live/nr13sistema.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nr13sistema.com.br/privkey.pem;

    return 301 https://nr13sistema.com.br$request_uri;
}
```

Confirmar também que existe o redirect de HTTP para HTTPS nas duas variantes.

---

## Bug 2 — 4 URLs da estrutura antiga estão indexadas e retornam 404

Estas URLs aparecem como **indexadas** no Search Console e hoje respondem **404**:

| URL antiga (indexada, hoje 404) | Destino correto |
|---|---|
| `/blog.html` | `/blog/` |
| `/blog-laudo-nr13-passo-a-passo.html` | `/blog/como-gerar-laudo-nr13.html` |
| `/contato.html` | `/#contato` |
| `/funcionamento.html` | `/sistema-nr13.html` |

O caso de `blog-laudo-nr13-passo-a-passo.html` é o mais valioso: já está indexada, é sobre laudo
NR-13 e o guia novo cobre exatamente esse tema. Um 301 transfere o sinal em vez de descartá-lo.

```nginx
# dentro do server block de nr13sistema.com.br
location = /blog.html                          { return 301 /blog/; }
location = /blog-laudo-nr13-passo-a-passo.html { return 301 /blog/como-gerar-laudo-nr13.html; }
location = /contato.html                       { return 301 /#contato; }
location = /funcionamento.html                 { return 301 /sistema-nr13.html; }
```

Se houver outras URLs da estrutura antiga ainda indexadas, o relatório
**Indexação → Páginas → Não encontrado (404)** do Search Console lista todas.

---

## Bug 3 — os 10 guias novos ainda não estão no servidor

Testado em 12/08/2026: as dez URLs novas respondem **404**, e o `sitemap.xml` no ar ainda é o
antigo, com 14 URLs. Os arquivos existem apenas em `C:\projetos\site-engenharia`.

**O Search Console recusa pedido de indexação de URL que responde 404** — por isso a indexação
não pode ser feita antes do upload.

Arquivos a publicar:

```
blog/como-gerar-laudo-nr13.html
blog/como-inspecionar-vaso-de-pressao.html
blog/como-inspecionar-caldeira-nr13.html
blog/como-calibrar-manometro.html
blog/sistema-de-inspecao-nr13.html
blog/periodicidade-de-inspecao-nr13-por-categoria.html
blog/checklist-de-inspecao-nr13.html
blog/calibracao-de-valvula-de-seguranca-psv.html
blog/bloco-padrao-de-inspecao-nr13.html
blog/vida-remanescente-e-taxa-de-corrosao.html
```

Arquivos alterados que também precisam subir:

```
blog/index.html          (10 cards novos, JSON-LD, termos de busca)
index.html               (links para os guias)
inspecao-nr13-vitoria-es.html   (links para os guias)
sistema-nr13.html        (links para os guias)
sitemap.xml              (14 -> 24 URLs)
```

---

## Ordem de execução depois do deploy

1. Aplicar os blocos nginx acima e recarregar (`nginx -t && systemctl reload nginx`).
2. Conferir: `https://www.nr13sistema.com.br/` deve devolver **301** para a versão sem `www`.
3. Conferir que as 10 URLs novas respondem **200**.
4. Search Console → **Sitemaps** → reenviar `sitemap.xml` (deve processar 24 URLs).
5. Search Console → **Inspeção de URL** → solicitar indexação na ordem da fila em
   `docs/INDEXACAO.md`. Teto de ~10 por dia; o restante no dia seguinte.
6. Reinspecionar `https://nr13sistema.com.br/` alguns dias depois: com o 301 ativo, o estado
   *"Cópia sem página canônica selecionada pelo usuário"* deve sair.
