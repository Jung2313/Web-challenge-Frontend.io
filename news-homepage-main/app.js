const menu= document.querySelector(".hamburger");
const navbar= document.querySelector(".nav-bar");
const closeMenu= document.querySelector(".close-icon") 
const shadow= document.querySelector(".fade")


menu.addEventListener("click",()=>{
    navbar.classList.add("open-menu")
    shadow.style.display="block"

})
closeMenu.addEventListener("click",()=>{
    navbar.classList.remove("open-menu") 
    shadow.style.display="none"
})
