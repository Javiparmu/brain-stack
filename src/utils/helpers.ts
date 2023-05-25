export const createObservers = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
        }
      }
    });
  });

  const hiddenElements =
    document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
};
