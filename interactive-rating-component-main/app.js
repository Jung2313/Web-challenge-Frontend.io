const btnNumber= document.querySelectorAll(".btnNumber");
const submit =document.querySelector(".btnSumit");
const second= document.querySelector(".sectionSecond");
const first = document.querySelector(".sectionFirst");
const numberChange = document.querySelector(".numberChange");

btnNumber.forEach(element=>{
    element.addEventListener("click",()=>{
        let numberSelected =element.dataset.number;
        numberChange.textContent= numberSelected;
    })
})

submit.addEventListener("click",()=>{
first.classList.toggle("hidden");
second.classList.toggle("hidden")
})