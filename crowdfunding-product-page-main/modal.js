const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".header-menu");
const elIcon = document.querySelector(".fa-solid");
const backProject = document.querySelector(".back-to-project");
const openModal = document.querySelector(".dialogo-back-this-project")
const closeModal = document.querySelector(".close-modal")
const bookmarkedChild = document.querySelector(".fa-bookmark")
const bookmarkedGranpa = document.querySelector(".button-wrap")
const spanbookmarkSibling = document.querySelector(".bookmarked-span")
const secondModal = document.querySelector(".completed-dialog")
const gotIt = document.querySelector(".finish-completed")
const plageNoReward = document.getElementById("plage-no-reward")
const radioButtons = document.querySelectorAll(".input-radio-modal")
const buttonContinue = document.querySelectorAll(".enter-plege-continue")
const rewardContinue = document.querySelectorAll(".reward")

/*OpenMenu version Mobile */
ham.addEventListener("click", () => {
    let contain = nav.classList.contains("appear")
    if (!contain) {
        nav.classList.add("appear");
        elIcon.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        nav.classList.remove("appear")
        elIcon.classList.replace("fa-xmark", "fa-bars");
    }


})


/* Open Modal */

backProject.addEventListener("click", () => {
    openModal.showModal();
})

closeModal.addEventListener("click", () => {
    openModal.close();
})
gotIt.addEventListener("click", () => {
    secondModal.close();


})

plageNoReward.addEventListener("click", () => {
    openModal.close();
    secondModal.showModal();

})

buttonContinue.forEach(item => {
    item.addEventListener("click", () => {
        secondModal.showModal()
        openModal.close();
    })
})
rewardContinue.forEach(item => {
    item.addEventListener("click", () => {
        openModal.showModal();
    })
})

/*Bookmark/Bookmarked*/

bookmarkedGranpa.addEventListener("click", () => {
    let bookmarkToogle = bookmarkedChild.classList.contains("bookmark-selected")
    if (!bookmarkToogle) {
        bookmarkedChild.classList.add("bookmark-selected");
        spanbookmarkSibling.style.color = "hsl(176, 72%, 28%)"
        spanbookmarkSibling.innerHTML = "Bookmarked"
    }
    else {
        bookmarkedChild.classList.remove("bookmark-selected");
        spanbookmarkSibling.style.color = "";
        spanbookmarkSibling.innerHTML = "Bookmark"
    }

})


//radio buttons when is change

radioButtons.forEach(radio => {
    radio.addEventListener("change", () => {
        radioButtons.forEach(btn => {
            if (btn.checked) {
                btn.parentElement.parentElement.classList.add("cyanClass")
                btn.parentElement.parentElement.lastElementChild.classList.add("openAppear")

            }
            else {
                btn.parentElement.parentElement.classList.remove("cyanClass")
                btn.parentElement.parentElement.lastElementChild.classList.remove("openAppear")
            }
        })
    })
})




//Scroll into View

const links = document.querySelectorAll(".bambo-wrap-prices")

links.forEach(item => {

    item.addEventListener("click", () => {
            let el = document.getElementById(item.getAttribute('data-link'));
            el.scrollIntoView(true);

    })

})


