const burger = document.querySelector('.humburger-menu')
const menuElement = document.querySelector('.menu')

const toggleMenu = () => {
  menuElement.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())