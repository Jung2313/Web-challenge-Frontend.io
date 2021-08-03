const content = document.querySelector(".button__early");
const send = document.querySelector(".getemail");
const email = document.querySelector(".email");
const textError= document.querySelector(".errortext")

const validarEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


send.addEventListener("click", ()=>{
    if(!validarEmail(email.value)){
        content.classList.add("error");
        textError.innerHTML="Please enter a valid email address";

    }
    else{
        content.classList.remove("error")
        email.value="";
        textError.innerHTML="";
    }
})