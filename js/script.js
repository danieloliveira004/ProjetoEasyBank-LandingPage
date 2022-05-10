const iconMenu = document.getElementById('icon-burger');
const navBar = document.getElementById('nav-header');

iconMenu.addEventListener('click', () => {
  navBar.classList.toggle('on');
})