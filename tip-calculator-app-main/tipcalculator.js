//variables
const inputBill = document.querySelector(".input-bill");
const inputButtonPercent = document.querySelectorAll(".percent-tip")
const inputCustomPercent = document.querySelector(".custom")
const inputNumberPeople = document.querySelector(".number-of-people")
const resultTipAmount = document.querySelector(".result-tipAmount");
const resultTotalPerson = document.querySelector(".result-totalPerson");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container")

let inputpercentCustom = 0
const calculatorTip = () => {
    const bill = parseFloat(inputBill.value) 
    const customPercentaje = inputpercentCustom || parseFloat(inputCustomPercent.value)
    const numberPeople = parseInt(inputNumberPeople.value)
    let tipAmount = ((bill * (customPercentaje / 100)) / numberPeople).toFixed(2)
    let result = ((bill / numberPeople) + parseFloat(tipAmount)).toFixed(2)
    resultTipAmount.innerHTML = ` ${tipAmount}`
    resultTotalPerson.innerHTML = `${result}`
    reset.disabled = false

}
inputButtonPercent.forEach(input => {
    input.addEventListener("click", () => {
        inputpercentCustom = parseFloat(input.dataset.percent)
        inputButtonPercent.forEach(btn => btn.classList.remove("active"));
        input.classList.add("active")
        inputCustomPercent.value = ""
        if (validation()) {
            calculatorTip();
        }

    })
})
const validation = () => {
    let flag = true
    const regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    const regexInteger = /^[1-9]+[0]*/g;
    const errorType = document.querySelector(".typerror")
    if (!regex.test(inputBill.value) || inputBill.value === "" || parseFloat(inputBill.value) < 1) {
        flag = false
        inputBill.classList.add("error")
    }
    const isTipSelected = Array.from(inputButtonPercent).some(input => input.classList.contains("active")) || inputCustomPercent.value !== "";

    if (!isTipSelected) {
        flag = false
    }

    if ((inputNumberPeople.value === "0")) {
        flag = false
        inputNumberPeople.classList.add("error")
        errorType.textContent = "Can't be zero"
    }
    else if (inputNumberPeople.value === "") {
        flag = false
        inputNumberPeople.classList.add("error")
        errorType.textContent = "Can't be empty"
    }
    else if (!regexInteger.test(inputNumberPeople.value)) {
        flag = false
        inputNumberPeople.classList.add("error")
        errorType.textContent = "Only numbers"
    }
    else {
        inputNumberPeople.classList.remove("error")
        inputBill.classList.remove("error")
        errorType.textContent = ""
    }

    return flag
};

inputCustomPercent.addEventListener("input", () => {
    inputpercentCustom = 0;  // Restablece el porcentaje seleccionado
    inputButtonPercent.forEach(input => input.classList.remove("active"));
});

container.addEventListener("input", () => {
    if (validation()) {
        calculatorTip()
    }
})


reset.addEventListener("click", () => {
    inputBill.value = ""
    inputpercentCustom = 0;
    inputButtonPercent.forEach(input => input.classList.remove("active"));
    inputCustomPercent.value = ""
    inputNumberPeople.value = ""
    resultTipAmount.innerHTML = `$0.00`
    resultTotalPerson.innerHTML = `$0.00`
    reset.disabled = true;
})