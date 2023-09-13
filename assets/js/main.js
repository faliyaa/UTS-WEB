/* ===== Show Menu =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
// kode ini mengambil elemen HTML yang memiliki atribut id 'nav-menu', 'nav-toggle', dan 'nav-close' menggunakan js
// elemen HTML tadi akan disimpan ke dalam variabel 'navMenu', 'navToggle', dan 'navClose' 

/* ===== Menu Show =====*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// ketika 'navToggle' di klik, kemudian menambahkan kelas 'show-menu' ke elemen dengan id 'navMenu'

/* ===== Menu Hidden =====*/
if(navClose) {
    navClose.addEventListener('click', () => {
        // ketika setiap nav__Link di klik, itu menghapus kelas show-menu
        navMenu.classList.remove('show-menu')
    })
}
// ketika 'navClose' true, maka saat 'navToggle' di klik, kelas 'show-menu', akan dihapus dari elemen kelas'navMenu'

/* ===== Remove Menu Mobile =====*/
const navLink = document.querySelectorAll('.nav__Link')

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // ketika klik di nav__link, show-menu di hapus
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/* ===== Add Blur to Header =====*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // ketika di scroll lebih dari 50 vh, tambah kelas 'blur-header' ke tag header
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* ===== Show Scroll Up =====*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // ketika di scroll lebih dari 350 vh, tambah kelas 'scroll-up' ke tag scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ===== Scroll Sections Active Link =====*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a [href*=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ===== Scroll Reveal Animation =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card', {delay: 500, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image', {origin: 'right'})
sr.reveal('.about__image, .join__data', {origin: 'left'})
sr.reveal('.popular__card', {interval: 100})



