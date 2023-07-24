//Calling the inputs
const cardNameInput = document.querySelector("#carholder") //input
const cardNumberInput = document.querySelector("#cardNumber") //input
const charName = document.querySelector(".charName") //p
const charNumber = document.querySelector(".cardNumb")//p
const sendFor = document.querySelector(".send")
const nameEx = document.querySelector(".name") //front
const numberEx = document.querySelector(".credit-front-number") //front
const cvcInput = document.querySelector("#cvc")
const cvcBack = document.querySelector(".credit-back-number");//front
const cvcError = document.querySelector(".cvcNumber")
const mesInput = document.querySelector("#expDateMM")
const mesError = document.querySelector(".expireDatemm")
const mesCard = document.querySelector(".caducidad-mm")
const extra = document.querySelector(".extra");
const yearInput = document.querySelector("#expDateYY");
const yearError = document.querySelector(".expireDateyy")
const yearCard = document.querySelector(".caducidad-yy")
const formulario = document.querySelector(".formulario")
const finalWrap = document.querySelector(".last-final-wrap")
const contiForm = document.querySelector(".continue-final");
/* Events */
cardNameInput.addEventListener("input", () => {
    nameEx.innerHTML = cardNameInput.value
    validarNombre()

})
cardNumberInput.addEventListener("input", (event) => {
    numberEx.innerHTML = cardNumberInput.value
    let inputTarget = event.target.value

    //busca los espacios y luego automaticamente reemplaza los espacios.
    cardNumberInput.value = inputTarget.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim()
    validarNumero()
})
cvcInput.addEventListener("input", () => {
    cvcBack.innerHTML = cvcInput.value
    validarCvc()
})

mesInput.addEventListener("input", () => {
    mesCard.innerHTML = mesInput.value < 10 ? "0" + mesInput.value : mesInput.value
    validarmes()

})
yearInput.addEventListener("input", () => {
    yearCard.innerHTML = yearInput.value
    validarYear()
})

//Booleans
let cardNameBoolean = false;
let cardNumberBoolean = false;
let monthCardBoolean = false;
let yearCardBoolean = false;
let cvcCardBoolean = false;


sendFor.addEventListener("click", (e) => {
    e.preventDefault()
    if (cardNameBoolean && cardNumberBoolean && monthCardBoolean && yearCardBoolean && cvcCardBoolean) {
        formulario.style.display = "none";
        finalWrap.style.display = "block";

    }
    else {
        validarNombre()
        validarNumero()
        validarmes()
        validarYear()
        validarCvc()
    }
})
//Continue bottom
contiForm.addEventListener("click", () => {
    location.reload()
    formulario.reset();
    formulario.style.display = "block";
    finalWrap.style.display = "none";

})



//Validando el nombre
function validarNombre() {
    let inputName = cardNameInput.value.toLowerCase().trim();
    let letters = /^[a-z\s/a-z]+$/g
    if (!cardNameInput.value) {
        charName.textContent = "Can't be blank"
        cardNameInput.classList.add("red-danger")
        nameEx.textContent = `JANE APPLESEED`
    }
    else if (!inputName.match(letters)) {
        charName.textContent = "Wrong format, letters only"
        cardNameInput.classList.add("red-danger")

    }
    else {
        cardNameInput.classList.remove("red-danger")
        charName.value = ""
        charName.innerHTML = ""
        cardNameBoolean = true
    }

}

//Validando el numero\

function validarNumero() {
    let numberValue = cardNumberInput.value;
    let onlynumber = /^[(\d)+(\s)]+$/gi;
    if (!numberValue) {
        charNumber.textContent = "Can't be blank"
        numberEx.textContent = `0000 0000 0000 0000`
        cardNumberInput.classList.add("red-danger")
    }
    else if (!numberValue.match(onlynumber)) {
        charNumber.textContent = "Wrong format, numbers only"
        cardNumberInput.classList.add("red-danger")
    }
    else if (numberValue.length < 19) {
        charNumber.textContent = "The number of credit card is incomplete"
    }
    else {
        cardNumberInput.classList.remove("red-danger")
        charNumber.value = ''
        charNumber.textContent = ''
        cardNumberBoolean = true;
    }
}

//Validar el CVC

function validarCvc() {
    let cardcvc = cvcInput.value;
    let onlynumber = /^[0-9]+$/gi;
    if (!cardcvc) {
        cvcError.textContent = "Can't be blank";
        cvcInput.classList.add("red-danger");
        cvcBack.textContent = `000`

    }
    else if (!cardcvc.match(onlynumber)) {
        cvcError.textContent = "Wrong format, numbers only";
        cvcInput.classList.add("red-danger")

    }
    else if (cardcvc.length < 3) {
        cvcError.textContent = "The number of cvc is incomplete"
    }

    else {
        cvcInput.classList.remove("red-danger")
        cvcError.value = ''
        cvcError.textContent = ''
        cvcCardBoolean = true;
    }
}

//Validar el mes
function validarmes() {
    let mes = mesInput.value;
    let onlynumber = /^[0-9]+$/gi;
    if (!mes) {
        mesError.textContent = "Can't be blank";
        mesInput.classList.add("red-danger");
    }
    else if(mes ==0){
        mesError.textContent = "No valid month";
        mesInput.classList.add("red-danger")
        mesInput.value =""
    }

    else if (!mes.match(onlynumber)) {
        mesError.textContent = "Numbers only";
        mesInput.classList.add("red-danger")
    }
    else if ( mes > 12) {
        mesError.textContent = "No valid month";
        mesInput.classList.add("red-danger")
    }
    else {
        mesInput.classList.remove("red-danger")
        mesError.value = ''
        mesError.textContent = ''
        monthCardBoolean = true;
    }
}


//Validar year // tener en cuenta que solo se puede ingresar 2 numeros

function validarYear() {
    let yearInputValue = yearInput.value
    let fecha = new Date().getFullYear()
    let nuevafe = Number(String(fecha).substring(2))
    let onlynumber = /^[0-9]+$/gi;
    if (!yearInputValue) {
        yearError.textContent = "Can't be blank"
        yearInput.classList.add("red-danger")
    }
    else if (!yearInputValue.match(onlynumber)) {
        yearError.textContent = "Numbers only";
        yearInput.classList.add("red-danger")
    }
    else if (yearInputValue <= nuevafe) {
        yearError.textContent = "No valid"
        yearInput.classList.add("red-danger")
    }
    else {
        yearInput.classList.remove("red-danger")
        yearError.value = ''
        yearError.textContent = ''
        yearCardBoolean = true
    }

}