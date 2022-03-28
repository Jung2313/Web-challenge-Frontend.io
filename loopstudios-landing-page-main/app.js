//<i class="fas fa-times"></i>

const burger =document.querySelector(".burger")
const closee=document.querySelector(".close");
const menu= document.querySelector(".menu")

burger.addEventListener("click",()=>{
   menu.classList.add("display")
})
closee.addEventListener("click",()=>{
    menu.classList.remove("display")
})