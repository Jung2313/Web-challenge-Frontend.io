const containerSummary = document.querySelector(".json-wrap")

const jData= async()=>{
    let output='';
    const response = await fetch('data.json')
    const data = await response.json();

    data.forEach(value => {
      let title= value.category
      let titleMinus = value.category.toLowerCase();
      let iconImage = value.icon 
      let percent= value.score

      output+=`<div class="json flex ${titleMinus}">
      <div class="icon-text flex">
        <img src="${iconImage}" alt="icon-${titleMinus}">
        <span>${title}</span>
      </div>
      <div class="percent">
        <span class="percent-json">${percent}</span>
        <span class="bold">/ 100</span>
      </div>
    </div>`
        containerSummary.innerHTML = output

    });
}

jData()