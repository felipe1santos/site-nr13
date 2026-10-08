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
| `hero-sistema-nr12.webp` | `nr12-prensas-linha.jpg` | Mazhar Ulazhar (Pexels 31352672) |
| `nr12-inspecao-tablet.webp` | `nr12-inspecao-tablet.jpg` | Pexels 32845694 |
| `nr12-ponto-de-operacao.webp` | `nr12-ponto-de-operacao.jpg` | Mikhail Nilov (Pexels 9242913) |
| `nr12-painel-comando.webp` | `nr12-painel-comando.jpg` | Pexels 35072831 |
| `nr10-painel-tecnico.webp` | `nr10-painel-tecnico.jpg` | Pexels 10871929 |
| `nr10-quadro-disjuntores.webp` | `nr10-quadro-disjuntores.jpg` | Pixabay via Pexels 257736 |

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

---

## Lote 26/09/2026 — estruturas metálicas e câmara fria

Baixadas do Pexels pelo ID (o número no fim do nome do original em `img/_raw/pexels/`).

| Arquivo no site | Pexels |
|---|---|
| `hero-estruturas-metalicas.webp` | https://www.pexels.com/photo/31197870/ |
| `metalica-trelica.webp` | https://www.pexels.com/photo/32239084/ |
| `metalica-icamento-portico.webp` | https://www.pexels.com/photo/29274538/ |
| `hero-aco-estrutural.webp` | https://www.pexels.com/photo/36003983/ |
| `aco-cantoneiras-ponte.webp` | https://www.pexels.com/photo/36003989/ |
| `aco-perfis-cintados.webp` | https://www.pexels.com/photo/36003984/ |
| `hero-fabricacao-metalica.webp` | https://www.pexels.com/photo/22717514/ |
| `fabricacao-corte-tubos.webp` | https://www.pexels.com/photo/17167908/ |
| `fabricacao-linha-solda.webp` | https://www.pexels.com/photo/16045268/ |

| `montagem-guindaste-carga.webp` | https://www.pexels.com/photo/36344778/ |
| `hero-galpao-metalico.webp` | https://www.pexels.com/photo/236709/ |
| `galpao-ponte-rolante.webp` | https://www.pexels.com/photo/29224601/ |
| `galpao-fabrica-vigas.webp` | https://www.pexels.com/photo/15947587/ |
| `hero-quadra-metalica.webp` | https://www.pexels.com/photo/32474981/ |
| `quadra-arco-metalico.webp` | https://www.pexels.com/photo/11301810/ |
| `quadra-montagem-trelica.webp` | https://www.pexels.com/photo/13532460/ |
| `hero-obra-metalica.webp` | https://www.pexels.com/photo/36695445/ |
| `obra-metalica-portico.webp` | https://www.pexels.com/photo/31516265/ |
| `obra-metalica-soldador.webp` | https://www.pexels.com/photo/14539151/ |
| `hero-camara-restaurante.webp` | https://www.pexels.com/photo/4947388/ |
| `restaurante-cozinha-inox.webp` | https://www.pexels.com/photo/12193823/ |
| `restaurante-preparo.webp` | https://www.pexels.com/photo/2696064/ |
| `hero-camara-acougue.webp` | https://www.pexels.com/photo/6138720/ |
| `acougue-expositor-carnes.webp` | https://www.pexels.com/photo/14315452/ |
| `supermercado-refrigeradores.webp` | https://www.pexels.com/photo/29409104/ |
| `hero-manutencao-refrigeracao.webp` | https://www.pexels.com/photo/5463575/ |
| `manutencao-unidade-condensadora.webp` | https://www.pexels.com/photo/5463587/ |
| `manutencao-camara-estocagem.webp` | https://www.pexels.com/photo/28657994/ |
| `hero-custo-camara-fria.webp` | https://www.pexels.com/photo/209251/ |
| `custo-conteineres-reefer.webp` | https://www.pexels.com/photo/31185127/ |
| `hero-montagem-metalica.webp` | https://www.pexels.com/photo/14539147/ (trocada: a primeira foto mostrava montador sem cinto) |

## Lote 27/09/2026 — reescrita do cluster estruturas metálicas

| Arquivo no site | Pexels |
|---|---|
| `metalica-portico-ceu.webp` | https://www.pexels.com/photo/26346370/ |
| `metalica-trelicas-cobertura.webp` | https://www.pexels.com/photo/12762731/ |
| `metalica-engenheiros-projeto.webp` | https://www.pexels.com/photo/8961146/ |
| `aco-patio-perfis.webp` | https://www.pexels.com/photo/36003982/ |
| `aco-perfis-empilhados.webp` | https://www.pexels.com/photo/36003991/ |
| `aco-corte-serra.webp` | https://www.pexels.com/photo/36003975/ |
| `fabricacao-solda-faiscas.webp` | https://www.pexels.com/photo/5846247/ |
| `fabricacao-soldador-oficina.webp` | https://www.pexels.com/photo/7849743/ |
| `fabricacao-corte-cnc.webp` | https://www.pexels.com/photo/29988963/ |
| `fabricacao-pintura-cabine.webp` | https://www.pexels.com/photo/36215202/ |
| `montagem-guindaste-esteira.webp` | https://www.pexels.com/photo/33708754/ |
| `galpao-fachada-duas-aguas.webp` | https://www.pexels.com/photo/18709802/ |
| `galpao-portao-metalico.webp` | https://www.pexels.com/photo/3964672/ |
| `galpao-fechamento-lateral.webp` | https://www.pexels.com/photo/9280923/ |
| `galpao-trelica-cobertura.webp` | https://www.pexels.com/photo/8633645/ |
| `quadra-ginasio-trelicas.webp` | https://www.pexels.com/photo/6539267/ |
| `quadra-ginasio-piso.webp` | https://www.pexels.com/photo/20414085/ |
| `quadra-cobertura-vidro.webp` | https://www.pexels.com/photo/15850543/ |
| `obra-engenheira-tablet.webp` | https://www.pexels.com/photo/8960944/ |
| `obra-equipe-telhas.webp` | https://www.pexels.com/photo/30514132/ |
| `obra-vista-aerea.webp` | https://www.pexels.com/photo/2314022/ |
| `montagem-plataforma-tesoura.webp` | https://www.pexels.com/photo/15109997/ |
| `montagem-guindastes-viga.webp` | https://www.pexels.com/photo/13832413/ |
| `montagem-fixacao-galvanizado.webp` | https://www.pexels.com/photo/13532463/ |

## Lote 27/09/2026 (tarde) — correção de escopo: fotos de montagem no lugar das de oficina

| Arquivo no site | Pexels |
|---|---|
| `hero-estrutura-pre-fabricada.webp` | https://www.pexels.com/photo/2314023/ |
| `pre-fabricada-icamento-pilar.webp` | https://www.pexels.com/photo/13061689/ |
| `pre-fabricada-portico-obra.webp` | https://www.pexels.com/photo/31688485/ |
| `pre-fabricada-chumbadores.webp` | https://www.pexels.com/photo/36449514/ |
| `pre-fabricada-parafusos-telha.webp` | https://www.pexels.com/photo/12623796/ |
| `aco-estoque-barras.webp` | https://www.pexels.com/photo/36878025/ |
| `galpao-portico-silhueta.webp` | https://www.pexels.com/photo/31197869/ |

## Lote 30/09/2026 — páginas de montagem: laje, sobrado, mezanino e guia de treliças/perfis

| Arquivo no site | Pexels |
|---|---|
| `hero-laje-metalica.webp` | https://www.pexels.com/photo/35383408/ |
| `laje-estrutura-pavimentos.webp` | https://www.pexels.com/photo/8014692/ |
| `laje-armadura-concretagem.webp` | https://www.pexels.com/photo/11581108/ |
| `laje-ligacao-viga-pilar.webp` | https://www.pexels.com/photo/12951624/ |
| `laje-chapa-de-ligacao.webp` | https://www.pexels.com/photo/36003962/ |
| `laje-solda-viga.webp` | https://www.pexels.com/photo/15109995/ |
| `hero-sobrado-metalico.webp` | https://www.pexels.com/photo/31197870/ |
| `sobrado-esqueleto-metalico.webp` | https://www.pexels.com/photo/31197871/ |
| `sobrado-fachada-moderna.webp` | https://www.pexels.com/photo/323775/ |
| `sobrado-varanda-metalica.webp` | https://www.pexels.com/photo/1022936/ |
| `sobrado-escada-metalica.webp` | https://www.pexels.com/photo/16613541/ |
| `sobrado-solda-viga.webp` | https://www.pexels.com/photo/14539147/ |
| `hero-mezanino-metalico.webp` | https://www.pexels.com/photo/4628583/ |
| `mezanino-residencial-loft.webp` | https://www.pexels.com/photo/12913378/ |
| `mezanino-escada-pavimentos.webp` | https://www.pexels.com/photo/15301649/ |
| `mezanino-passarela.webp` | https://www.pexels.com/photo/4534506/ |
| `mezanino-escada-loft.webp` | https://www.pexels.com/photo/38661242/ |
| `mezanino-montador-viga.webp` | https://www.pexels.com/photo/14482908/ |
| `hero-trelicas-perfis.webp` | https://www.pexels.com/photo/8287570/ |
| `perfis-ue-galvanizados.webp` | https://www.pexels.com/photo/36003986/ |
| `perfis-vigas-cruzadas.webp` | https://www.pexels.com/photo/31921202/ |
| `perfis-medicao-paquimetro.webp` | https://www.pexels.com/photo/36003974/ |
| `trelica-cobertura-ceu.webp` | https://www.pexels.com/photo/32239084/ |
| `perfis-pilares-portico.webp` | https://www.pexels.com/photo/13261149/ |
| `trelica-espacial.webp` | https://www.pexels.com/photo/10329046/ |

## Lote 30/09/2026 — playground, piso emborrachado, grama sintética, AVCB e projeto de incêndio

| Arquivo no site | Pexels |
|---|---|
| `hero-instalacao-playground.webp` | https://www.pexels.com/photo/38192851/ |
| `playground-piso-azul.webp` | https://www.pexels.com/photo/38192851/ |
| `playground-balanco.webp` | https://www.pexels.com/photo/35015567/ |
| `hero-piso-emborrachado.webp` | https://www.pexels.com/photo/16097569/ |
| `hero-grama-sintetica.webp` | https://www.pexels.com/photo/34989777/ |
| `grama-sintetica-piscina.webp` | https://www.pexels.com/photo/347138/ |
| `hero-avcb-bombeiros.webp` | https://www.pexels.com/photo/16517206/ |
| `hero-projeto-incendio.webp` | https://www.pexels.com/photo/36259607/ |
| `extintor-parede.webp` | https://www.pexels.com/photo/4805958/ |

---

## Lote 07/10/2026 — cluster acessibilidade (4 landings)

Pexels, uso comercial livre. Originais em `img/_raw/pexels/<nome>-<id>.jpg`; heroes 1600x800 e corpo
1200x800, crop central, `-quality 72 -compression_level 6`. Cada `alt` conferido contra a foto
renderizada. Pinterest foi descartado de propósito: pin não traz licença de uso comercial.

| Arquivo no site | Pexels | Página |
|---|---|---|
| `hero-acessibilidade-alvara.webp` | https://www.pexels.com/photo/6809658/ | alvará |
| `acessibilidade-sanitario-placa.webp` | https://www.pexels.com/photo/35597510/ | alvará |
| `acessibilidade-medicao-parede.webp` | https://www.pexels.com/photo/8470795/ | alvará |
| `acessibilidade-piso-tatil.webp` | https://www.pexels.com/photo/36772563/ | alvará |
| `hero-acessibilidade-condominio.webp` | https://www.pexels.com/photo/11986023/ | condomínio |
| `acessibilidade-elevador-botoeira.webp` | https://www.pexels.com/photo/16026071/ | condomínio |
| `condominio-area-piscina.webp` | https://www.pexels.com/photo/17175418/ | condomínio |
| `acessibilidade-vagas-estacionamento.webp` | https://www.pexels.com/photo/7393925/ | condomínio |
| `hero-acessibilidade-ministerio-publico.webp` | https://www.pexels.com/photo/7876093/ | Ministério Público |
| `acessibilidade-assinatura-tac.webp` | https://www.pexels.com/photo/8730998/ | Ministério Público |
| `acessibilidade-calcada-rampa.webp` | https://www.pexels.com/photo/36738295/ | Ministério Público |
| `acessibilidade-corredor-cadeira.webp` | https://www.pexels.com/photo/11781911/ | Ministério Público |
| `hero-art-acessibilidade.webp` | https://www.pexels.com/photo/8293673/ | ART |
| `acessibilidade-analise-planta.webp` | https://www.pexels.com/photo/6614824/ | ART |
| `acessibilidade-engenheira-registro.webp` | https://www.pexels.com/photo/8488034/ | ART |
| `acessibilidade-planta-escala.webp` | https://www.pexels.com/photo/4134179/ | ART |


## Lote 08/10/2026 — 14 landings de serviços novos

Pexels, uso comercial livre. Originais em `img/_raw/pexels/`; heroes 1600x800 e corpo 1200x800, crop
central, `-quality 72 -compression_level 6`. `alt` conferido contra folha de contato. A busca
via `fetch` dentro da aba passou a travar (desafio anti-bot); navegar direto para
`/pt-br/procurar/<termo>/` e ler o `__NEXT_DATA__` funcionou.

| Arquivo no site | Pexels | Página |
|---|---|---|
| `hero-levantamento-topografico.webp` | https://www.pexels.com/photo/5802821/ | topografia |
| `topografia-estacao-total.webp` | https://www.pexels.com/photo/36930873/ | topografia |
| `topografia-gps-rtk.webp` | https://www.pexels.com/photo/24245275/ | topografia |
| `topografia-nivel-terreno.webp` | https://www.pexels.com/photo/7499043/ | topografia |
| `hero-regularizacao-de-imovel.webp` | https://www.pexels.com/photo/7937319/ | regularização |
| `regularizacao-documentos-obra.webp` | https://www.pexels.com/photo/8470057/ | regularização, reforma |
| `regularizacao-planta-medicao.webp` | https://www.pexels.com/photo/4792479/ | regularização |
| `regularizacao-sobrado-obra.webp` | https://www.pexels.com/photo/39988462/ | regularização |
| `hero-vistoria-cautelar.webp` | https://www.pexels.com/photo/69483/ | cautelar |
| `cautelar-trinca-parede.webp` | https://www.pexels.com/photo/12326415/ | cautelar |
| `cautelar-obra-vizinhos.webp` | https://www.pexels.com/photo/33987633/ | cautelar |
| `cautelar-engenheira-vistoria.webp` | https://www.pexels.com/photo/7937365/ | cautelar |
| `hero-vistoria-entrega-imovel.webp` | https://www.pexels.com/photo/9826456/ | entrega |
| `entrega-vistoria-janela.webp` | https://www.pexels.com/photo/8293642/ | entrega |
| `entrega-chaves-apartamento.webp` | https://www.pexels.com/photo/7489107/ | entrega |
| `entrega-fissura-parede.webp` | https://www.pexels.com/photo/7717787/ | entrega |
| `hero-reforma-nbr-16280.webp` | https://www.pexels.com/photo/15798784/ | reforma |
| `reforma-comodo-em-obra.webp` | https://www.pexels.com/photo/36035072/ | reforma |
| `reforma-planta-tecnica.webp` | https://www.pexels.com/photo/4458210/ | reforma |
| `hero-laudo-spda.webp` | https://www.pexels.com/photo/5533498/ | SPDA |
| `spda-cobertura-antenas.webp` | https://www.pexels.com/photo/26604099/ | SPDA |
| `spda-torre-descarga.webp` | https://www.pexels.com/photo/12397980/ | SPDA |
| `spda-multimetro-medicao.webp` | https://www.pexels.com/photo/14319099/ | SPDA, NR-10 |
| `hero-estanqueidade-gas.webp` | https://www.pexels.com/photo/16752780/ | gás |
| `gas-reguladores-manometro.webp` | https://www.pexels.com/photo/8943269/ | gás |
| `gas-tubulacao-medidor.webp` | https://www.pexels.com/photo/8581897/ | gás |
| `gas-chama-fogao.webp` | https://www.pexels.com/photo/3722212/ | gás |
| `hero-projeto-eletrico.webp` | https://www.pexels.com/photo/11924298/ | projeto elétrico |
| `eletrico-medidor-quadro.webp` | https://www.pexels.com/photo/13785838/ | projeto elétrico |
| `eletrico-projeto-papel.webp` | https://www.pexels.com/photo/10985350/ | projeto elétrico |
| `eletrico-quadro-residencial.webp` | https://www.pexels.com/photo/32497160/ | projeto elétrico |
| `hero-laudo-nr10.webp` | https://www.pexels.com/photo/17843269/ | NR-10 |
| `nr10-quadro-externo.webp` | https://www.pexels.com/photo/17842832/ | NR-10 |
| `nr10-subestacao-corredor.webp` | https://www.pexels.com/photo/13172736/ | NR-10 |
| `hero-linha-de-vida-nr35.webp` | https://www.pexels.com/photo/39025636/ | NR-35 |
| `nr35-cinto-telhado.webp` | https://www.pexels.com/photo/38346822/ | NR-35 |
| `nr35-telhado-equipe.webp` | https://www.pexels.com/photo/16647524/ | NR-35 |
| `nr35-cobertura-cabo.webp` | https://www.pexels.com/photo/33728679/ | NR-35 |
| `hero-inspecao-predial.webp` | https://www.pexels.com/photo/209279/ | inspeção predial |
| `inspecao-predial-checklist.webp` | https://www.pexels.com/photo/8293680/ | inspeção predial |
| `inspecao-predial-torres.webp` | https://www.pexels.com/photo/10917489/ | inspeção predial |
| `inspecao-predial-plataforma.webp` | https://www.pexels.com/photo/13787815/ | inspeção predial |
| `hero-ltcat-insalubridade.webp` | https://www.pexels.com/photo/29224625/ | LTCAT |
| `ltcat-protetor-auricular.webp` | https://www.pexels.com/photo/8488000/ | LTCAT |
| `ltcat-produtos-quimicos.webp` | https://www.pexels.com/photo/209230/ | LTCAT |
| `ltcat-mascara-tubulacao.webp` | https://www.pexels.com/photo/17166070/ | LTCAT |
| `hero-licenciamento-ambiental.webp` | https://www.pexels.com/photo/7625721/ | licenciamento |
| `licenciamento-vistoria-campo.webp` | https://www.pexels.com/photo/3580281/ | licenciamento |
| `licenciamento-ete-tanques.webp` | https://www.pexels.com/photo/5712211/ | licenciamento |
| `licenciamento-rio-mata.webp` | https://www.pexels.com/photo/9871902/ | licenciamento |
| `hero-sondagem-de-solo.webp` | https://www.pexels.com/photo/7910062/ | sondagem |
| `sondagem-trado-solo.webp` | https://www.pexels.com/photo/14840752/ | sondagem |
| `sondagem-perfuratriz-obra.webp` | https://www.pexels.com/photo/15109993/ | sondagem |
| `sondagem-maquina-canteiro.webp` | https://www.pexels.com/photo/29470002/ | sondagem |


## Lote 08/10/2026 — acessibilidade, 2ª rodada (9 páginas)

Pexels, uso comercial livre. Mesmo tratamento do lote anterior. Fotos reais de Vila Velha, Vitória (Terceira Ponte)
e Guarapari. A foto 13871327 e a 9808741 aparecem em 2 páginas cada (limite da regra).

| Arquivo no site | Pexels | Página |
|---|---|---|
| `hero-acessibilidade-escola.webp` | https://www.pexels.com/photo/289740/ | escola |
| `acessibilidade-escola-corredor.webp` | https://www.pexels.com/photo/29636314/ | escola |
| `acessibilidade-estudante-cadeira.webp` | https://www.pexels.com/photo/8524612/ | escola |
| `acessibilidade-sala-de-aula.webp` | https://www.pexels.com/photo/36650153/ | escola |
| `hero-acessibilidade-clinica.webp` | https://www.pexels.com/photo/8459996/ | clínica |
| `acessibilidade-clinica-corredor-cadeira.webp` | https://www.pexels.com/photo/6129141/ | clínica |
| `acessibilidade-clinica-atendimento.webp` | https://www.pexels.com/photo/30688589/ | clínica |
| `acessibilidade-clinica-espera.webp` | https://www.pexels.com/photo/31377751/ | clínica |
| `hero-acessibilidade-hotel.webp` | https://www.pexels.com/photo/15176820/ | hotel |
| `acessibilidade-hotel-recepcao.webp` | https://www.pexels.com/photo/7821349/ | hotel |
| `acessibilidade-hotel-quarto.webp` | https://www.pexels.com/photo/30767889/ | hotel |
| `acessibilidade-banheiro-barra-chuveiro.webp` | https://www.pexels.com/photo/13871327/ | hotel |
| `hero-banheiro-acessivel.webp` | https://www.pexels.com/photo/13871327/ | guia banheiro |
| `hero-acessibilidade-igreja.webp` | https://www.pexels.com/photo/16820349/ | igreja |
| `acessibilidade-igreja-bancos.webp` | https://www.pexels.com/photo/7219526/ | igreja |
| `acessibilidade-igreja-corredor.webp` | https://www.pexels.com/photo/35697216/ | igreja |
| `acessibilidade-rampa-corrimao.webp` | https://www.pexels.com/photo/9808741/ | igreja |
| `hero-rampa-nbr9050.webp` | https://www.pexels.com/photo/9808741/ | guia rampa |
| `hero-acessibilidade-vila-velha.webp` | https://www.pexels.com/photo/10075477/ | Vila Velha |
| `acessibilidade-escada-entrada.webp` | https://www.pexels.com/photo/3964820/ | Vila Velha |
| `acessibilidade-vaga-simbolo.webp` | https://www.pexels.com/photo/26651561/ | Vila Velha, Guarapari |
| `acessibilidade-terceira-ponte.webp` | https://www.pexels.com/photo/23356023/ | Vila Velha |
| `hero-acessibilidade-guarapari.webp` | https://www.pexels.com/photo/15181120/ | Guarapari |
| `acessibilidade-guarapari-orla.webp` | https://www.pexels.com/photo/15138937/ | Guarapari |
| `acessibilidade-guarapari-aerea.webp` | https://www.pexels.com/photo/7876475/ | Guarapari |
| `hero-quanto-custa-laudo-acessibilidade.webp` | https://www.pexels.com/photo/7937315/ | quanto custa |
| `acessibilidade-orcamento-contrato.webp` | https://www.pexels.com/photo/8470830/ | quanto custa |
| `acessibilidade-planta-tecnica.webp` | https://www.pexels.com/photo/4458197/ | quanto custa |
| `acessibilidade-sanitario-publico.webp` | https://www.pexels.com/photo/20846593/ | quanto custa |
| `acessibilidade-banheiro-barras.webp` | https://www.pexels.com/photo/10421641/ | guia banheiro |
| `acessibilidade-placa-banheiro.webp` | https://www.pexels.com/photo/13554363/ | guia banheiro |
| `acessibilidade-dispenser-porta.webp` | https://www.pexels.com/photo/189472/ | guia banheiro |
| `acessibilidade-rampa-entrada-beco.webp` | https://www.pexels.com/photo/30917750/ | guia rampa |
| `acessibilidade-rampa-garagem.webp` | https://www.pexels.com/photo/15143512/ | guia rampa |
| `acessibilidade-passarela-rampa.webp` | https://www.pexels.com/photo/17839549/ | guia rampa |
