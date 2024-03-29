const body = document.querySelector('body');
const hamburger = body.querySelector('.hamburger');
const menu = body.querySelector('.menu');
const backing = body.querySelector('.backing');
const menuItem = body.querySelectorAll('.menu-item');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('clicked'),
   menu.classList.toggle('disable'),
   backing.classList.toggle('dark')
})

for (let i = 0; i < menuItem.length; i++) {
   menuItem[i].addEventListener('click', () => {
      hamburger.classList.toggle('clicked'),
      menu.classList.toggle('disable'),
      backing.classList.toggle('dark')
   })
}

