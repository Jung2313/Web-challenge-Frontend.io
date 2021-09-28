const  button=document.querySelector(".slide");

button.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    button.classList.toggle("active");
})