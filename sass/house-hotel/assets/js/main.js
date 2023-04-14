const menuHamburger = document.querySelector('.menu-hamburger')
const nav = document.querySelector('nav')

menuHamburger.addEventListener('click', function(){

  nav.classList.toggle('active')
})