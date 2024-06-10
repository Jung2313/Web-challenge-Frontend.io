/*User Inputs */
const userDay = document.getElementById("day");
const userMonth = document.getElementById("month");
const userYear = document.getElementById("year");
/*Button Submit */
const btn = document.querySelector(".icon-arrow")
/*Outputs */
const year = document.querySelector(".resultYear")
const month = document.querySelector(".resultMonths")
const day = document.querySelector(".resultDays")
/*ALL INPUTS IN ONE */
const inputs = document.querySelectorAll(".inputs-in")

/*ERRORS */

const error = document.querySelectorAll(".error")
const red = document.querySelectorAll(".red")

const form = document.querySelector("form")
/*Dates */
let today = new Date();
let currentDay = today.getDate()
let currentMonth = today.getMonth() + 1
let currentYear = today.getFullYear()


form.addEventListener("submit", (e) => {
    e.preventDefault()
})



const validationForm = () => {
    let monthU = Number(userMonth.value.trim())
    let yearU = Number(userYear.value.trim())
    let userBorn = new Date(userYear.value, userMonth.value, userDay.value)
    let currentDate = new Date(currentYear, currentMonth, currentDay)


    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            error[i].textContent = "This field is required"
            red[i].style.color = "hsl(0, 100%, 67%)"
            inputs[i].classList.add("error1")

        }
        else if (!inputs[i].value.match(/[0-9]/gm)) {
            error[i].textContent = "Only numbers are allowed"
            red[i].style.color = "hsl(0, 100%, 67%)"
            inputs[i].classList.add("error1")

        }

        else if (userMonth.value > 12 || userMonth.value < 1) {
            error[1].textContent = "Must be a valid month"
            red[1].style.color = "hsl(0, 100%, 67%)"
            inputs[1].classList.add("error1")

        }
        else if (userYear.value > currentYear || userYear.value < 1900) {
            error[2].textContent = "Must be a valid year"
            red[2].style.color = "hsl(0, 100%, 67%)"
            inputs[2].classList.add("error1")

        }
        else if (userDay.value > ultimodiaMesNacido(yearU, monthU) || userDay.value < 1) {
            error[0].textContent = "Must be a valid day"
            red[0].style.color = "hsl(0, 100%, 67%)"
            inputs[0].classList.add("error1")
        }
        else if (userBorn > currentDate) {
            error[i].textContent = "Must be in the past"
            red[i].style.color = "hsl(0, 100%, 67%)"
            inputs[i].classList.add("error1")

        } else {
            error[i].textContent = ""
            red[i].style.color = "hsl(0, 0%, 8%)"
            inputs[i].classList.remove("error1")
        }
    }
}
form.addEventListener("keyup", validationForm)

btn.addEventListener("click", () => {

    validationForm();
    let dayU = Number(userDay.value.trim());
    let monthU = Number(userMonth.value.trim());
    let yearU = Number(userYear.value.trim());

    // Solo calcula la edad si la validación es exitosa
    if (!inputs[0].classList.contains("error1") &&
        !inputs[1].classList.contains("error1") &&
        !inputs[2].classList.contains("error1")) {
        calculateAge(yearU, monthU, dayU);
    }
})

const ultimodiaMesNacido = (year, month) => {
    return new Date(year, month, 0).getDate();
}


/* Necessary */
const calculateAge = (userYear, userMonth, userDay) => {
    let resultDay, resultMonth, resultYear;

    if (currentMonth >= userMonth) {
        resultMonth = currentMonth - userMonth
    }
    else {
        resultYear--;
        resultMonth = 12 - userMonth + currentMonth
    }

    if (currentDay >= userDay) {
        resultDay = currentDay - userDay

    }
    else {
        resultMonth--
        resultDay = ultimodiaMesNacido(userYear, userMonth) - userDay + currentDay

    }
    if (!userDay && !userMonth && userYear) {
        resultMonth = "--"
        resultDay = "--"
        resultYear = "--";
    }
    else {
        resultYear = currentYear - userYear

    }


    if (resultMonth < 0) {
        resultMonth = 11;
        resultYear--
    }

    if (resultYear < 0) {
        resultMonth = "--"
        resultDay = "--"
        resultYear = "--";
        error[0].textContent = "Must be a valid date"
        red[0].style.color = "hsl(0, 100%, 67%)"
        inputs[0].classList.add("error1")
    }

    day.innerText = resultDay
    month.innerText = resultMonth
    year.innerText = resultYear
}

