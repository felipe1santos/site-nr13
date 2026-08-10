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
