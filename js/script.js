const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const revealItems = document.querySelectorAll('.reveal');
const yearNode = document.querySelector('[data-year]');
const contactLinks = document.querySelectorAll('.contact-link');
const projectButtons = document.querySelectorAll('.project-link-btn');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Buka menu navigasi');
    });
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.site-nav a[href^="#"]');

if ('IntersectionObserver' in window && sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navAnchors.forEach((anchor) => {
          const targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;

          const isActive = targetId === `#${entry.target.id}`;
          anchor.classList.toggle('is-active', isActive);
        });
      });
    },
    { rootMargin: '-35% 0px -45% 0px', threshold: 0.1 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const hideEmptyLinks = (elements) => {
  elements.forEach((element) => {
    const url = element.dataset.url || element.getAttribute('href');
    if (!url || url.trim() === '' || url === '#') {
      element.classList.add('is-hidden');
      element.setAttribute('aria-hidden', 'true');
      if (element.tagName === 'A') {
        element.tabIndex = -1;
      }
    }
  });
};

hideEmptyLinks(contactLinks);
hideEmptyLinks(projectButtons);

const emptyContactList = document.querySelector('[data-contact-list]');
if (emptyContactList && emptyContactList.querySelectorAll('.contact-link:not(.is-hidden)').length === 0) {
  emptyContactList.textContent = 'Tautan kontak akan ditambahkan setelah data resmi tersedia.';
  emptyContactList.style.display = 'block';
  emptyContactList.style.color = '#5f6470';
  emptyContactList.style.fontWeight = '600';
}
