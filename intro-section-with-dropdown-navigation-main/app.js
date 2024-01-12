const arrow = document.querySelectorAll(".dropdown-wrap")
const openMenu = document.querySelectorAll(".display-wrap")
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector(".nav-wrap")
const menuHan = document.querySelector(".menu ")

arrow.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("menu-open")
    })
})

openMenu.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open-toogle")
    })
})
menuHan.addEventListener("click",()=>{
    nav.classList.toggle("close-tab")
})
closeMenu.addEventListener("click",()=>{
    nav.classList.toggle("close-tab")
})
