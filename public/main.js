const topMenu = document.querySelector('#top-menu');
const toggleTopMenu = document.querySelector('#toggle-top-menu');

document.addEventListener('click', event => {
  if (toggleTopMenu.contains(event.target)) {
    //click to toggle menu icon
    topMenu.classList.toggle('hidden');
    topMenu.classList.toggle('ct-top-menu-expanded');
  } else {
    //click outside toggle menu icon
    if (topMenu.classList.contains('ct-top-menu-expanded')) {
      topMenu.classList.remove('ct-top-menu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});
