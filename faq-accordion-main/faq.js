const toogle = document.querySelectorAll(".image-plus-minus")
const paragraph = document.querySelectorAll(".paragraph")

for (let i = 0; i < toogle.length; i++) {
   toogle[i].addEventListener("click", () => {
      let containt = paragraph[i].classList.contains("display")
      if (!containt) {
         toogle[i].style.background = "url(assets/images/icon-minus.svg) no-repeat"
         paragraph[i].classList.add("display")
      }
      else {
         toogle[i].style.background = "url(assets/images/icon-plus.svg) no-repeat"
         paragraph[i].classList.remove("display")
      }
   })
}

