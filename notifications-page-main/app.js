const toogleMark= document.querySelector(".mark__toogle")
const faCircle = document.querySelectorAll(".fa-circle")
const sectionToogle = document.querySelectorAll(".section__toggle")
const notification = document.querySelector(".three__noti")


toogleMark.addEventListener("click", ()=>{
    faCircle.forEach(item => item.classList.remove("fa-circle"))
    sectionToogle.forEach(item => item.classList.add("read"))
    notification.textContent="0"
})