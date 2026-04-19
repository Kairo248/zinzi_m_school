document.documentElement.classList.add('js');

const elements = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

elements.forEach((section) => observer.observe(section));

const reflectionItems = document.querySelectorAll('#reflections .reflection-item');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reflectionItems.length && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reflection-item--in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  reflectionItems.forEach((item) => revealObserver.observe(item));
} else if (reflectionItems.length && reduceMotion) {
  reflectionItems.forEach((item) => item.classList.add('reflection-item--in-view'));
}
