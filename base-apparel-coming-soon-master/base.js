const send = document.querySelector(".send");
const content= document.querySelector(".content__btn");
const small= document.querySelector(".smalli")
const email= document.querySelector(".email")


//email
send.addEventListener('click', ()=>{
    if(!validarEmail(email.value)){
    content.classList.add('error');
    }
    else{
        content.classList.remove('error');
        email.value="";
        small.innerHTML=""
        
    }

});

const validarEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}