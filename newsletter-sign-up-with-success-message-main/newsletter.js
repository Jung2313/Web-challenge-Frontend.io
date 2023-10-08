//my expreesion regular para validar el correo

const subscribe = document.querySelector(".subscribe")
const input = document.querySelector(".contact-email")
const invalEmail= document.querySelector(".invalidemail")
const firstContent = document.querySelector(".container")
const secondContent = document.querySelector(".submit-message-container")
const showSuccessEmail = document.querySelector(".success-email")
const dismissMessage = document.querySelector(".btn-dismiss-final")

subscribe.addEventListener("click", () => {
    let exp = /^[a-z].+\d*@[a-z]+.[a-z]+$/gm
    if(!exp.test(input.value)){
        input.classList.add("error")
        invalEmail.innerHTML="Valid email required"
    }
    else{
        input.classList.remove("error")
        invalEmail.innerHTML=""
        firstContent.style.display ="none"
        secondContent.style.display="block"
        showSuccessEmail.innerHTML= input.value 
    }
})

dismissMessage.addEventListener("click", ()=>{
    input.value =""
    firstContent.style.display ="block"
    secondContent.style.display="none"
    showSuccessEmail.innerHTML=""

})