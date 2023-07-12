const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('muestra');
    } else {
      entry.target.classList.remove('muestra');
    }
  })
});

const hiddenElements = document.querySelectorAll('.oculto');
hiddenElements.forEach((el) => observer.observe(el));