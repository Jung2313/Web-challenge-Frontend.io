//email
const container= document.querySelector(".container__notice");
const email=document.getElementById('email');
const send= document.getElementById('button');
const error=document.getElementById('error')

//email
send.addEventListener('click', ()=>{
    if(!validarEmail(email.value)){
    container.classList.add('error');
    error.innerHTML="Please provide a valid email address";
    }
    else{
        container.classList.remove('error');
        email.value="";
        error.innerHTML=""
        
    }

});

const validarEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}