const parrafo= document.querySelector(".p");
const title = document.querySelector(".advice");
const pressBtn= document.querySelector(".fa-dice-five");

document.addEventListener("DOMContentLoaded",()=>{
    fetchData();
})

pressBtn.addEventListener("click",()=>{
    fetchData();
})

const fetchData = async () => {
    try {
        const resp = await fetch('https://api.adviceslip.com/advice');
        const data = await resp.json();
        parrafo.textContent =data.slip.advice;
        title.textContent = data.slip.id;

    } catch (error) {
        console.log(error)
    }
}

