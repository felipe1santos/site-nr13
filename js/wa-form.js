/* Porteiro do WhatsApp — Axial Engenharia.
   Todo link de WhatsApp do site passa por aqui. Em vez de abrir a conversa direto, o visitante
   percorre duas etapas:

     1. quem é você      → nome, telefone e e-mail, enviados na hora para o Formspree
     2. qual é a dúvida  → a mensagem, que vira o texto da conversa no WhatsApp

   Só o contato da etapa 1 é registrado — um envio por lead. A dúvida não passa pelo Formspree:
   ela viaja direto para a conversa. Como o registro acontece antes da etapa 2, o lead fica
   guardado mesmo se a pessoa desistir no meio, e a conversa começa com a pergunta dela — não
   com uma frase pronta.

   O modal é montado por JS: nenhuma das 34 páginas precisa carregar a marcação. */
(function () {
  'use strict';

  var ENDPOINT = 'https://formspree.io/f/xvznaowy';

  /* Quem já se identificou nesta aba não repete nome e telefone: o próximo clique cai direto
     na etapa da dúvida. A dúvida, essa sim, é pedida toda vez. */
  var CHAVE_CONTATO = 'axial:wa-contato';

  var modal = null;      /* o overlay, montado na primeira abertura */
  var destino = '';      /* href do link que o visitante clicou */
  var origem = '';       /* texto do botão clicado, pra saber qual CTA converteu */
  var contato = null;    /* {nome, whatsapp} depois da etapa 1 */
  var focoAnterior = null;
  var falhas = 0;

  function ehLinkWhats(href) {
    return href.indexOf('wa.me/') !== -1 || href.indexOf('api.whatsapp.com') !== -1;
  }

  function lerContato() {
    try { return JSON.parse(sessionStorage.getItem(CHAVE_CONTATO) || 'null'); } catch (e) { return null; }
  }

  function gravarContato(c) {
    try { sessionStorage.setItem(CHAVE_CONTATO, JSON.stringify(c)); } catch (e) { /* modo privado */ }
  }

  /* ---- máscara de telefone: (27) 99999-9999 ---- */
  function mascarar(valor) {
    var d = valor.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }

  function enviarAoFormspree(dados) {
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  function mostrarErro(texto) {
    var p = modal.querySelector('.wa-erro');
    if (!p) return;
    p.textContent = texto;
    p.removeAttribute('hidden');
  }

  function limparErro() {
    var p = modal.querySelector('.wa-erro');
    if (p) p.setAttribute('hidden', '');
  }

  function linkPrivacidade() {
    return (location.pathname.indexOf('/blog/') === 0 ? '../' : '') + 'privacidade.html';
  }

  /* ---- etapa 1: quem é você ---- */
  function telaContato() {
    return '' +
      '<p class="wa-modal-tag">Falar no WhatsApp</p>' +
      '<h2 id="waFormTitulo">Antes de abrir a conversa</h2>' +
      '<p class="wa-modal-sub">Preencha seus dados e entre em contato agora mesmo.</p>' +
      '<form class="wa-form" data-etapa="contato" novalidate>' +
        '<label for="waNome">Nome</label>' +
        '<input id="waNome" name="nome" type="text" autocomplete="name" required ' +
          'placeholder="Como podemos te chamar">' +
        '<label for="waFone">Telefone / WhatsApp</label>' +
        '<input id="waFone" name="whatsapp" type="tel" inputmode="numeric" autocomplete="tel" ' +
          'required placeholder="(27) 99999-9999">' +
        '<label for="waEmail">E-mail</label>' +
        '<input id="waEmail" name="email" type="email" inputmode="email" autocomplete="email" ' +
          'required placeholder="voce@empresa.com.br">' +
        '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="wa-mel">' +
        '<p class="wa-erro" role="alert" hidden></p>' +
        '<button type="submit" class="btn btn-primary btn-lg wa-enviar">Continuar</button>' +
        '<p class="wa-passos"><span class="wa-passo-on">1. Contato</span> · <span>2. Sua dúvida</span></p>' +
        '<p class="wa-modal-nota">Seus dados são usados só para este atendimento. ' +
          'Veja a <a href="' + linkPrivacidade() + '">Política de Privacidade</a>.</p>' +
      '</form>';
  }

  /* O exemplo do campo acompanha a página: quem chega pela página do software pergunta sobre o
     software, quem chega pelas páginas de serviço pergunta sobre inspeção. */
  function exemploDuvida() {
    if (/sistema-nr13\.html$/.test(location.pathname)) {
      return 'Ex.: quero assinar o Sistema NR13. Ele gera o livro de registro e a memória de ' +
             'cálculo ASME automático? Quantos equipamentos e usuários entram no plano?';
    }
    return 'Ex.: preciso regularizar dois vasos de pressão na minha planta. Como funciona e qual ' +
           'o prazo para sair o laudo?';
  }

  /* ---- etapa 2: qual é a dúvida ---- */
  function telaDuvida() {
    var nome = contato && contato.nome ? contato.nome.split(' ')[0] : '';
    return '' +
      '<p class="wa-modal-tag">Falar no WhatsApp</p>' +
      '<h2 id="waFormTitulo">' + (nome ? escapar(nome) + ', qual é a sua dúvida?' : 'Qual é a sua dúvida?') + '</h2>' +
      '<p class="wa-modal-sub">Envie-nos sua dúvida e nossa equipe entrará em contato ' +
        'imediatamente.</p>' +
      '<form class="wa-form" data-etapa="duvida" novalidate>' +
        '<label for="waMsg">Sua mensagem</label>' +
        '<textarea id="waMsg" name="duvida" rows="4" required placeholder="' + exemploDuvida() + '"></textarea>' +
        '<p class="wa-erro" role="alert" hidden></p>' +
        '<button type="submit" class="btn btn-primary btn-lg wa-enviar">Enviar</button>' +
        '<p class="wa-passos"><span>1. Contato</span> · <span class="wa-passo-on">2. Sua dúvida</span></p>' +
      '</form>';
  }

  function escapar(s) {
    return String(s).replace(/[<>&"]/g, '');
  }

  function pintar(html) {
    modal.querySelector('.wa-modal-corpo').innerHTML = html;
    var form = modal.querySelector('.wa-form');
    if (form) form.addEventListener('submit', enviar);
    var fone = modal.querySelector('#waFone');
    if (fone) fone.addEventListener('input', function () { fone.value = mascarar(fone.value); });
    var primeiro = modal.querySelector('#waNome') || modal.querySelector('#waMsg');
    if (primeiro) primeiro.focus();
  }

  /* ---- montagem ---- */
  function montar() {
    var el = document.createElement('div');
    el.className = 'wa-modal';
    el.setAttribute('hidden', '');
    el.innerHTML =
      '<div class="wa-modal-fundo" data-fechar></div>' +
      '<div class="wa-modal-caixa" role="dialog" aria-modal="true" aria-labelledby="waFormTitulo">' +
        '<button type="button" class="wa-modal-x" data-fechar aria-label="Fechar">&times;</button>' +
        '<div class="wa-modal-corpo"></div>' +
      '</div>';

    document.body.appendChild(el);
    el.addEventListener('click', function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute('data-fechar')) fechar();
    });
    return el;
  }

  function abrir() {
    if (!modal) modal = montar();
    focoAnterior = document.activeElement;
    contato = contato || lerContato();
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    pintar(contato ? telaDuvida() : telaContato());
  }

  function fechar() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (focoAnterior && focoAnterior.focus) focoAnterior.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) fechar();
  });

  /* ---- envio das duas etapas ---- */
  function enviar(e) {
    e.preventDefault();
    var form = e.target;
    var botao = form.querySelector('.wa-enviar');
    var rotulo = botao.textContent;

    if (form.getAttribute('data-etapa') === 'contato') {
      var nome = form.nome.value.trim();
      var fone = form.whatsapp.value.trim();
      var email = form.email.value.trim();
      if (nome.length < 2) return mostrarErro('Escreva seu nome.');
      if (fone.replace(/\D/g, '').length < 10) return mostrarErro('Informe um telefone com DDD.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return mostrarErro('Informe um e-mail válido.');

      limparErro();
      botao.disabled = true;
      botao.textContent = 'Enviando...';

      enviarAoFormspree({
        nome: nome,
        whatsapp: fone,
        email: email,
        origem: origem || '(link sem rótulo)',
        pagina: location.href,
        titulo: document.title,
        _gotcha: form._gotcha.value,
        _subject: 'Contato do site — ' + nome
      }).then(function () {
        contato = { nome: nome, whatsapp: fone, email: email };
        gravarContato(contato);
        /* o pixel escuta este evento e registra o Lead */
        document.dispatchEvent(new CustomEvent('axial:lead', { detail: { origem: origem } }));
        pintar(telaDuvida());
      }).catch(function () {
        recuperarDeFalha(botao, rotulo);
      });
      return;
    }

    /* Etapa 2 não vai ao Formspree: a dúvida viaja como texto da conversa no WhatsApp.
       O que fica registrado é o contato da etapa 1 — um envio por lead, não dois. */
    var duvida = form.duvida.value.trim();
    if (duvida.length < 10) return mostrarErro('Escreva sua dúvida com um pouco mais de detalhe.');

    limparErro();
    botao.disabled = true;
    document.dispatchEvent(new CustomEvent('axial:contato', { detail: { origem: origem } }));
    irParaWhatsApp(duvida);
  }

  /* Duas falhas seguidas de rede não podem prender o visitante do lado de fora da conversa. */
  function recuperarDeFalha(botao, rotulo) {
    falhas++;
    botao.disabled = false;
    botao.textContent = falhas >= 2 ? rotulo : 'Tentar de novo';
    mostrarErro(falhas >= 2
      ? 'O envio não completou. Você pode abrir a conversa mesmo assim pelo link abaixo.'
      : 'Não conseguimos enviar agora. Confira a conexão e tente de novo.');
    if (falhas >= 2 && !modal.querySelector('.wa-escape')) {
      var campo = modal.querySelector('#waMsg');
      var a = document.createElement('a');
      a.className = 'wa-escape';
      a.href = montarUrl(campo ? campo.value.trim() : '');
      a.rel = 'noopener';
      a.textContent = 'Abrir o WhatsApp mesmo assim';
      modal.querySelector('.wa-form').appendChild(a);
    }
  }

  function montarUrl(texto) {
    var base = destino.split('?')[0];
    return texto ? base + '?text=' + encodeURIComponent(texto) : base;
  }

  function irParaWhatsApp(duvida) {
    var url = montarUrl(duvida);
    modal.querySelector('.wa-modal-corpo').innerHTML =
      '<div class="wa-ok">' +
        '<p class="wa-modal-tag">Enviado</p>' +
        '<h2>Abrindo o WhatsApp...</h2>' +
        '<p class="wa-modal-sub">Sua mensagem já está escrita na conversa. ' +
          'Se nada acontecer, <a href="' + url + '" rel="noopener">toque aqui</a>.</p>' +
      '</div>';
    /* navegação na mesma aba: não é bloqueada por bloqueador de pop-up */
    location.href = url;
  }

  /* ---- intercepta os cliques ---- */
  document.addEventListener('click', function (e) {
    var alvo = e.target;
    var link = alvo && alvo.closest ? alvo.closest('a[href]') : null;
    if (!link) return;

    var href = link.getAttribute('href') || '';
    if (!ehLinkWhats(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;  /* abrir em nova aba */

    e.preventDefault();
    destino = link.href;
    origem = (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 80);
    falhas = 0;
    abrir();
  });
})();
