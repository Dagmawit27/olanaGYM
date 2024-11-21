function revealFunction() {

  window.sr = ScrollReveal({duration: 1600, distance: '250px', easing: 'ease-out',});

  sr.reveal('.anime', {origin: 'bottom', reset: false,})
}



window.addEventListener('load', () => {
  revealFunction();
})