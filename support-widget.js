/* A viewport-fixed support entry point. Never points visitors at a local server. */
(() => {
  'use strict';
  if (document.getElementById('bs-support-launcher')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'bs-support';
  wrapper.innerHTML = `
    <button class="bs-support-launcher" id="bs-support-launcher" type="button" aria-expanded="false" aria-controls="bs-support-panel" aria-label="Open BitterSoft product help">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 3v-3a2 2 0 0 1-2-2V7a3 3 0 0 1 3-3Z"/><path d="M7 9h10M7 13h7"/></svg><span>Ask BitterSoft</span>
    </button>
    <section class="bs-support-panel" id="bs-support-panel" role="dialog" aria-modal="false" aria-labelledby="bs-support-title" hidden>
      <header class="bs-support-header"><div><p>B / CUSTOMER CARE</p><h2 id="bs-support-title">How can we help?</h2></div><button type="button" class="bs-support-close" aria-label="Close product help">×</button></header>
      <div class="bs-support-body"><p class="bs-support-status">Guided help is available</p><p>Choose a topic for reviewed answers in English or Spanish. This is guided help, not live AI chat. This panel does not send or save a conversation.</p>
      <a class="bs-support-guided" href="https://bittersoftworks-support.web.app/">Open guided help / Abrir ayuda</a>
      <a class="bs-support-link" href="https://eddydavila.github.io/whatsout-website/">OutCalled <span>App information and product help ↗</span></a>
      <a class="bs-support-link" href="https://bittersoftworks-ppb-relay.web.app/support.html">Personal Panic Button <span>Setup, trusted contacts and tracking help ↗</span></a>
      <a class="bs-support-email" href="mailto:bittersoftworks@gmail.com?subject=BitterSoft%20product%20support">Email BitterSoft support ↗</a>
      <p class="bs-support-note">Your email app opens; you review and send the message. Do not include passwords, private tracking links, payment details or emergency information.</p>
      <p class="bs-support-emergency">In immediate danger? Contact local emergency services. This panel is not monitored for emergencies.</p></div>
    </section>`;
  document.body.append(wrapper);
  const launcher = wrapper.querySelector('#bs-support-launcher');
  const panel = wrapper.querySelector('#bs-support-panel');
  const close = wrapper.querySelector('.bs-support-close');
  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    if (open) close.focus(); else launcher.focus();
  }
  launcher.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));
  wrapper.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); setOpen(false); }
  });
})();
