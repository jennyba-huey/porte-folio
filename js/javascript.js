const menu = document.querySelector('.menu');
const menuButton = document.getElementById('menu-button'); // Remplacez 'menu-button' par l'ID de votre bouton/menu

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});


