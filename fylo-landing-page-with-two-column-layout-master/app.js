//div
const content1=document.querySelector(".button__title");
const content2= document.querySelector(".earlyaccess__button");
//box 
const email1=document.querySelector(".email");
const email2= document.querySelector(".email2");

//button
const button1=document.querySelector(".send");
const button2=document.querySelector(".get__start");

//check out

const small1=document.querySelector(".er__1");
const small2=document.querySelector(".er__2");

//error__1  error__2

const validarEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

button1.addEventListener("click", ()=>{
    if(!validarEmail(email1.value)){
        content1.classList.add("error__1");
        small1.innerHTML="Please  check your email";
    }
    else{
        content1.classList.remove("error__1");
        email1.value="";
        small1.innerHTML="";

    }
})

button2.addEventListener("click", ()=>{
    if(!validarEmail(email2.value)){
        content2.classList.add("error__2")
        small2.innerHTML="Please  check your email";
    }
    else{
        content2.classList.remove("error__2");
        email2.value="";
        small2.innerHTML="";
    }
})