const btnHamburguer = document.querySelector('.hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

btnHamburguer.addEventListener('click', () => {
  menuMobile.style.display = menuMobile.style.display === 'block' ? 'none' : 'block';
});
