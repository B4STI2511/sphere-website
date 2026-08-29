// Small interactions: highlight the active section in the navigation.
const links = [...document.querySelectorAll('.nav nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.style.color = '');
      const active = links.find(l => l.getAttribute('href') === '#' + entry.target.id);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));
