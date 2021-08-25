// nombre de la clase. appear
const container= document.querySelector(".meni__ul");
const botton=document.querySelector('.menu');//fa-bars

botton.addEventListener("click",()=>{
    container.classList.toggle("appear");
});