const containerGraph = document.querySelector(".balance-graphic-wrap");

const fetchData = async () => {
    try {

        const resp = await fetch('data.json')
        const data = await resp.json();
        data.forEach(element => {
            containerGraph.innerHTML += ` 
        <div class="balance-graphic-content">
          <div class="balance-text">$${element.amount}</div>
          <div class="balance-increment-size" style="height:${(element.amount * 2)}px"></div>
          <small class="days">${element.day}</small>
        </div>`
        });

        const balanceIncrementHover = document.querySelectorAll(".balance-increment-size")
        const balanceTextHover = document.querySelectorAll(".balance-text")

        balanceIncrementHover.forEach((item, index) => {
            item.addEventListener("mouseover", () => {
                balanceTextHover[index].style.opacity = 1
            })
        })

        balanceIncrementHover.forEach((item, index) => {
            item.addEventListener("mouseout", () => {
                balanceTextHover[index].style.opacity = 0
            })
        })


    } catch (error) {
        console.log("error")
    }
}

fetchData()



