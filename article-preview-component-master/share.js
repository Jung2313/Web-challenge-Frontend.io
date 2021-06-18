//agregar la clase sharing

const container= document.querySelector(".container");
const button= document.querySelector(".button");

button.addEventListener("click",()=>{
    container.classList.toggle("sharing");
})