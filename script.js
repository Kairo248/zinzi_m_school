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

// Keep reflection content visible at all times.
// This avoids cases where scroll observers fail and cards stay hidden.
if (reflectionItems.length) {
  reflectionItems.forEach((item) => item.classList.add('reflection-item--in-view'));
}
