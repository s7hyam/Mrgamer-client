gsap.registerPlugin(ScrollTrigger)
let visible = false
let navbtn = document.getElementById('navbtn')
let navbtnDisplay = window.getComputedStyle(navbtn).display
let navbar = document.getElementById('navbar')

navbtn.addEventListener('click', () => {
    visible = !visible
    if (!visible) {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'flex'
    }
})

let navLi = navbar.getElementsByTagName('li')
if (navbtnDisplay === 'block') {
    for (let i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('click', () => {
            visible = !visible
            navbar.style.display = 'none'
        })
    }
}


gsap.from('h1', { y: -1000, duration: 1, ease: "bounce.out" })
gsap.from('#navbar', { x: 1000, duration: .7, ease: "none" })
gsap.from('.logo', { x: -1000, duration: .7, ease: 'none' })
gsap.from('img', { x: 1000, duration: 1, ease: "bounce" })
gsap.from('button', { rotate: 720, duration: .7, ease: "power.in" })
gsap.from('button', { y: 900, duration: 1, delay: .7, ease: "bounce.in" })



gsap.from('.fade-left', {
    x: -700,
    duration: 1,
    scrollTrigger: ".fade-left-see"
})