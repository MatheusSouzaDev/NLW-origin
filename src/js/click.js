window.addEventListener('scroll', scroll)

const nav = document.querySelector('#navigation')
const back = document.querySelector('#backToTopButton')

scroll()

function scroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    if (scrollY > 0) {
        nav.classList.add('scroll')
    } else {
        nav.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 500) {
        back.classList.add('show')
    } else {
        back.classList.remove('show')
    }  
}

function openMenu(){
    document.body.classList.add('menuExpanded')
}

function closeMenu(){
    document.body.classList.remove('menuExpanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home header, 
#home .content,
#home .stat,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about img,
#contact,
#contact header,
#contact .content,
#contact img,
footer
`);