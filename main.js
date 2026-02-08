// Smooth scroll for internal links
document.querySelectorAll('a.nav-link, .back-to-top, .btn-primary').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Reveal sections on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars when skills section appears
        if (entry.target.id === 'skills') {
          document.querySelectorAll('.bar-fill').forEach(bar => {
            const level = bar.style.getPropertyValue('--level') || '80%';
            bar.style.width = level;
          });
        }

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

// Set footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
