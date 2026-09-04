# Créditos das imagens

Todas as fotos vêm do banco **Pexels** (licença gratuita para uso comercial, sem necessidade de
atribuição — creditamos por boa prática). Os arquivos originais em JPG estão em `img/_raw/`
e as versões otimizadas em WebP estão em `img/`.

| Arquivo no site | Origem (`img/_raw/`) | Fotógrafo |
|---|---|---|
| `hero-home.webp` | `b-hero-planta-1.jpg` | Tom Fisk |
| `rodape-industrial.webp` | `b-hero-planta-2.jpg` | Tom Fisk |
| `equipe-engenharia.webp` | `equipe-tecnica-5.jpg` | abdo alshreef |
| `card-nr13.webp` | `nr13-caldeira-2.jpg` | Jan Wright |
| `card-nr12.webp` | `nr12-maquinas-5.jpg` | Peter Xie |
| `card-pmoc.webp` | `b-pmoc-duto-4.jpg` | Oguz Dik |
| `card-end.webp` | `end-ultrassom-4.jpg` | Sergey Sergeev |
| `card-incendio.webp` | `b-fogo-sprinkler-1.jpg` | Nishino Minase |
| `card-caldeiraria.webp` | `solda-tubulacao-1.jpg` | Galib Rahman Nadim |
| `hero-nr13.webp` | `nr13-vaso-1.jpg` | Clarence Cooper |
| `hero-nr12.webp` | `nr12-maquinas-2.jpg` | Katharina-Charlotte May |
| `hero-pmoc.webp` | `b-pmoc-duto-1.jpg` | Adrien Olichon |
| `hero-end.webp` | `b-end-inspecao-1.jpg` | abdo alshreef |
| `hero-incendio.webp` | `incendio-sprinkler-2.jpg` | Akmal Fruzteck |
| `detalhe-tubulacao.webp` | `hero-industria-2.jpg` | Mr Dr3igeteilt |
| `detalhe-solda.webp` | `solda-tubulacao-3.jpg` | Saad Bin Hasan |
| `detalhe-inspecao.webp` | `nr13-vaso-4.jpg` | cottonbro studio |
| `detalhe-alarme.webp` | `b-fogo-sprinkler-3.jpg` | Steppe Walker |
| `og-image.jpg` | `b-hero-planta-1.jpg` | Tom Fisk |

O índice completo do primeiro lote de downloads, com link para cada foto no Pexels, está em
`img/_raw/manifest.csv`.

---

## Trocar por fotos reais da empresa

Foto de banco de imagem converte menos que foto real de obra e de equipamento. Assim que houver
acervo próprio, substitua na seguinte ordem de prioridade:

1. `equipe-engenharia.webp` — foto do engenheiro responsável em campo (é a seção de E-E-A-T);
2. `card-*.webp` — um serviço executado por card;
3. `hero-*.webp` — cena real de inspeção;
4. `og-image.jpg` — imagem que aparece ao compartilhar no WhatsApp.

Mantenha as mesmas dimensões para não quebrar o layout:

```
hero-home.webp        1920 x 1000
rodape-industrial     1920 x  620
hero-<servico>.webp   1600 x  800
equipe/detalhe        1200 x  800
card-*.webp            800 x  520
og-image.jpg          1200 x  630
calibracao-manometro-
vaso-de-pressao-nr13   800 x  600   (foto da seção "O que o sistema faz"; a altura
                                     do bloco é limitada a 600px justamente para
                                     não ampliar a imagem além do tamanho nativo)
```

Comando de conversão usado (ffmpeg):

```bash
ffmpeg -y -i entrada.jpg \
  -vf "scale=800:520:force_original_aspect_ratio=increase,crop=800:520,unsharp=5:5:0.4" \
  -c:v libwebp -quality 82 -compression_level 6 img/card-nr13.webp
```

E lembre de atualizar o `alt` da imagem no HTML: ele descreve a cena, não repete a palavra-chave.

---

## Lote de 04/09/2026 — cluster obras e engenharia predial

Mesma origem e licença do lote anterior: **Pexels**, uso comercial livre. Baixadas em JPG para
`img/_raw/` e convertidas para WebP com ffmpeg — heroes em 1600x800 e imagens de corpo em
1200x800, com crop central.

| Arquivo no site | Foto no Pexels |
|---|---|
| `acessibilidade-barreira.webp` | https://www.pexels.com/photo/8415494/ |
| `acessibilidade-vaga-pcd.webp` | https://www.pexels.com/photo/3095954/ |
| `camara-congelados.webp` | https://www.pexels.com/photo/29834274/ |
| `camara-doca.webp` | https://www.pexels.com/photo/1267327/ |
| `coifa-cozinha-industrial.webp` | https://www.pexels.com/photo/10511959/ |
| `estrutural-fundacao.webp` | https://www.pexels.com/photo/37733179/ |
| `estrutural-metalica.webp` | https://www.pexels.com/photo/9092855/ |
| `ev-carregador.webp` | https://www.pexels.com/photo/34800670/ |
| `ev-garagem.webp` | https://www.pexels.com/photo/11554746/ |
| `exaustao-duto-externo.webp` | https://www.pexels.com/photo/29086539/ |
| `exaustao-dutos.webp` | https://www.pexels.com/photo/8297856/ |
| `fachada-lavagem.webp` | https://www.pexels.com/photo/12059710/ |
| `fachada-pintura.webp` | https://www.pexels.com/photo/12741270/ |
| `galpao-interior.webp` | https://www.pexels.com/photo/236709/ |
| `hero-acessibilidade.webp` | https://www.pexels.com/photo/9808741/ |
| `hero-camara-fria.webp` | https://www.pexels.com/photo/5953713/ |
| `hero-carro-eletrico.webp` | https://www.pexels.com/photo/28851165/ |
| `hero-estrutural.webp` | https://www.pexels.com/photo/15109999/ |
| `hero-fachada.webp` | https://www.pexels.com/photo/18969812/ |
| `hero-montagem.webp` | https://www.pexels.com/photo/29274538/ |
| `hero-playground.webp` | https://www.pexels.com/photo/16431202/ |
| `laudo-analise-projeto.webp` | https://www.pexels.com/photo/8961026/ |
| `laudo-inspecao-equipamento.webp` | https://www.pexels.com/photo/39174644/ |
| `laudo-vistoria-campo.webp` | https://www.pexels.com/photo/8960941/ |
| `montagem-ponte-rolante.webp` | https://www.pexels.com/photo/29224552/ |
| `montagem-vigas.webp` | https://www.pexels.com/photo/15947587/ |
| `patologia-destacamento.webp` | https://www.pexels.com/photo/10224710/ |
| `patologia-metalica.webp` | https://www.pexels.com/photo/12291236/ |
| `patologia-trinca.webp` | https://www.pexels.com/photo/9348582/ |
| `playground-condominio.webp` | https://www.pexels.com/photo/11986100/ |
| `playground-piso.webp` | https://www.pexels.com/photo/7401101/ |
| `predial-fachada.webp` | https://www.pexels.com/photo/10418970/ |
| `predial-fachada.webp` | https://www.pexels.com/photo/12386248/ |
| `predial-inspecao.webp` | https://www.pexels.com/photo/8293678/ |
| `predial-quadro-eletrico.webp` | https://www.pexels.com/photo/32497160/ |
| `quadra-coberta.webp` | https://www.pexels.com/photo/12883426/ |
| `quadra-piso.webp` | https://www.pexels.com/photo/9787275/ |

> Conferimos cada `alt` contra a foto renderizada antes de publicar. Descrição que não bate com
> a imagem prejudica acessibilidade e não ajuda em SEO — oito `alt` deste lote foram reescritos
> depois dessa conferência, e duas imagens trocaram de seção para ilustrar o bloco correto.

**Comando de conversão usado:**

```bash
ffmpeg -y -i img/_raw/NOME.jpg \n  -vf "scale=L:A:force_original_aspect_ratio=increase,crop=L:A" \n  -quality 72 -compression_level 6 img/NOME.webp
```
