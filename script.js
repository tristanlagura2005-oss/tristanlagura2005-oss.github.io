(() => {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navIcon = navToggle?.querySelector('use');
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

  function setNav(open) {
    if (!navToggle || !nav) return;
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navIcon?.setAttribute('href', open ? '#icon-close' : '#icon-menu');
  }

  navToggle?.addEventListener('click', () => {
    setNav(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setNav(false));
  });

  document.addEventListener('click', (event) => {
    if (!nav || !navToggle || navToggle.getAttribute('aria-expanded') !== 'true') return;
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) setNav(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') {
      setNav(false);
      navToggle.focus();
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 901px)');
  const closeNavAtDesktop = (event) => {
    if (event.matches) setNav(false);
  };
  desktopQuery.addEventListener?.('change', closeNavAtDesktop);

  const revealItems = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sectionIds = navLinks
    .map((link) => link.getAttribute('href'))
    .filter((href) => href && href.length > 1)
    .map((href) => href.slice(1));
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visible.target.id}`;
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0.01, 0.2, 0.5] });

    sections.forEach((section) => navObserver.observe(section));
  }

  let lastDialogTrigger = null;
  const dialogs = [...document.querySelectorAll('.case-dialog')];

  function openDialog(dialog, trigger) {
    if (!dialog) return;
    lastDialogTrigger = trigger || document.activeElement;
    setNav(false);

    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');

    document.body.classList.add('dialog-open');
    requestAnimationFrame(() => dialog.querySelector('[data-dialog-close]')?.focus());
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else {
      dialog.removeAttribute('open');
      document.body.classList.remove('dialog-open');
      lastDialogTrigger?.focus?.();
    }
  }

  document.querySelectorAll('[data-dialog-open]').forEach((button) => {
    button.addEventListener('click', () => {
      openDialog(document.getElementById(button.dataset.dialogOpen), button);
    });
  });

  dialogs.forEach((dialog) => {
    dialog.querySelectorAll('[data-dialog-close]').forEach((button) => {
      button.addEventListener('click', () => closeDialog(dialog));
    });

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });

    dialog.addEventListener('close', () => {
      if (!dialogs.some((item) => item.open)) document.body.classList.remove('dialog-open');
      const trigger = lastDialogTrigger;
      lastDialogTrigger = null;
      trigger?.focus?.();
    });
  });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
