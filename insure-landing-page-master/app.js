// <i class="fas fa-times"></i>
const container = document.querySelector(".container");
const button = document.querySelector(".hamburger");
const icon =document.querySelector(".fa-bars");
button.addEventListener("click", ()=>{
   let contener=container.classList.contains("menu");
   if(!contener){
    container.classList.add("menu");
    icon.classList.add("fa-times");
   }
   else{
    container.classList.remove("menu");
    icon.classList.remove("fa-times")
   }
})


