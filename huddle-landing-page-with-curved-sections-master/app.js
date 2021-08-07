//first step adding class error
const container= document.querySelector(".news__button");
const email= document.querySelector(".email")
const button= document.querySelector(".subscribe");
const message= document.querySelector(".p__error");

const validarEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


button.addEventListener("click", ()=>{
    if(!validarEmail(email.value)){
        container.classList.add("error");
        message.innerHTML="Check your email please";

    }
    else{
        container.classList.remove("error")
        email.value="";
        message.innerHTML="";
    }
})