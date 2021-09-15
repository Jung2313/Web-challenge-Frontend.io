const container=document.querySelector(".meni__ul");
const menu=document.querySelector(".burger");
const icon=document.querySelector(".fa-bars");

menu.addEventListener("click",()=>{
    const isExist=container.classList.contains("appear");
    if(isExist){
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        container.classList.remove("appear");
    }
    else{
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        container.classList.add("appear");
    }
})

