const btnSwith=document.querySelector(".paid");
const basic=document.querySelector(".basic");
const professional=document.querySelector(".professional");
const master=document.querySelector(".master");

btnSwith.addEventListener("click",()=>{
   let contain= btnSwith.classList.contains("active");
   if(contain){
       btnSwith.classList.remove("active");
        basic.innerHTML=199.99;
        professional.innerHTML=249.99;
        master.innerHTML=399.99;
   }
   else{
       btnSwith.classList.add("active");
       basic.innerHTML=19.99;
       professional.innerHTML=24.99;
        master.innerHTML=39.99;
   }
})