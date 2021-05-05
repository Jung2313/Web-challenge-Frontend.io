const pclass = document.querySelectorAll(".faqanswer");
const button = document.querySelectorAll(".down");
const coloor = document.querySelectorAll('.faquestion')


const  presionar=()=> {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            pclass[i].classList.toggle("appear")
            coloor[i].classList.toggle('color')
            button[i].querySelector('i.fas').classList.toggle('fa-angle-down')
            button[i].querySelector('i.fas').classList.toggle('fa-angle-up')
        })
    }
}

presionar();
