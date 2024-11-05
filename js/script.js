const header = document.querySelector('header')
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', this.window.scrollY > 180)
})

// responsive menu 처리
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

// responsive menu scroll 처리
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
}


