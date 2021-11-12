const mostrar = document.querySelectorAll(".dropdown")
const prnaviga = document.querySelectorAll(".pr-navigation")
const arrow= document.querySelectorAll(".arrow")

//Only Movile

    for (let i = 0; i < prnaviga.length; i++) {
    prnaviga[i].addEventListener('click', () => {
        let contains= mostrar[i].classList.contains("show");
        if(!contains){
            mostrar[i].classList.add("show")
            arrow[i].style.transform=`rotate(180deg)`
            arrow[i].style.right=`96px`
        }
        else{
            mostrar[i].classList.remove("show")
            arrow[i].style.transform="";
            arrow[i].style.right="";
        }
        
       
    })

 
} 