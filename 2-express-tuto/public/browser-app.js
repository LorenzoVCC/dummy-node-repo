const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
  // Rota las barritas y las convierte en X
  hamburger.classList.toggle('active');

  // Muestra/oculta el menú de links
  navbarLinks.classList.toggle('active');
});