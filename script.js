/* Progressive enhancement: the complete portfolio remains readable without JavaScript. */
(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const mobile = window.matchMedia('(max-width: 760px)');
  function setMenu(open) {
    const collapsed = mobile.matches && !open;
    nav.classList.toggle('mobile-closed', collapsed);
    nav.hidden = collapsed;
    menu.setAttribute('aria-expanded', String(!collapsed));
  }
  function syncMenu() { menu.hidden = !mobile.matches; setMenu(false); }
  syncMenu();
  mobile.addEventListener('change', syncMenu);
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && !nav.hidden) { setMenu(false); menu.focus(); }
  });

  const controls = document.querySelector('.publication-tools');
  const search = document.querySelector('#paper-search');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const papers = [...document.querySelectorAll('.publication')];
  const counter = document.querySelector('#result-count');
  const empty = document.querySelector('.empty-state');
  let selected = 'all';
  function filterPapers() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    papers.forEach(paper => {
      const matchesStatus = selected === 'all' || paper.dataset.status === selected;
      const matchesQuery = (paper.dataset.search + ' ' + paper.textContent).toLocaleLowerCase().includes(query);
      paper.hidden = !(matchesStatus && matchesQuery);
      if (!paper.hidden) count += 1;
    });
    counter.textContent = `${count} of ${papers.length} selected papers and manuscripts`;
    empty.hidden = count > 0;
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
  }
  controls.hidden = false;
  counter.hidden = false;
  filterButtons.forEach(button => button.addEventListener('click', () => { selected = button.dataset.filter; filterPapers(); }));
  search.addEventListener('input', filterPapers);
  filterPapers();

  const copyButton = document.querySelector('#copy-install');
  const copyStatus = document.querySelector('#copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    let timer;
    copyButton.addEventListener('click', async () => {
      clearTimeout(timer);
      try {
        await navigator.clipboard.writeText('pip install egnlib');
        copyButton.textContent = 'Copied';
        copyStatus.textContent = 'Installation command copied to clipboard.';
      } catch (_) {
        copyButton.textContent = 'Select text';
        copyStatus.textContent = 'Clipboard unavailable. Select and copy the command beside this button.';
      }
      timer = setTimeout(() => { copyButton.textContent = 'Copy'; }, 2400);
    });
  }

  // Scroll position is calculated from all section headings, so the active link
  // stays correct even when filtering changes the length of the publication list.
  const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map(a => document.querySelector(a.getAttribute('href')));
  let scheduled = false;
  function updateNavigation() {
    let active = '';
    const offset = document.querySelector('.site-header').offsetHeight + 140;
    sections.forEach(section => { if (section && section.getBoundingClientRect().top <= offset) active = '#' + section.id; });
    sectionLinks.forEach(a => {
      if (a.getAttribute('href') === active) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  document.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
