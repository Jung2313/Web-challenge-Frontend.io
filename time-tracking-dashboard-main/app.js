const container = document.querySelector(".content-wrap-wrap")
const daily = document.querySelector(".daily")
const weekly = document.querySelector(".weekly")
const monthly = document.querySelector(".monthly")

const jData = async (timeFrame) => {
  let output = ""
  const response = await fetch('data.json');
  const data = await response.json();
  data.forEach(value => {
    let title = value.title
    let titleClass = value.title.toLowerCase().replace(' ', '-').trim() //
    let current = value.timeframes[timeFrame].current
    let previous = value.timeframes[timeFrame].previous
    let fechas = {
      'daily': 'Yesterday',
      'weekly': 'Last Week',
      'monthly': 'Last Month '
    }
    output += `<div class="content-wrap ${titleClass}-color">
        <div class="content">
          <div class="context flex">
            <span class="white">${title}</span>
            <img src="images/icon-ellipsis.svg" alt="ellipsis" class="ellipsis">
          </div>
          <div class="time flex">
            <span class="white">${current}hrs</span>
            <span class="week">${fechas[timeFrame]} - ${previous}hrs</span> 
          </div>
          </div>
        </div>
        </div>
        `
  });
  container.innerHTML = output
}
window.addEventListener("DOMContentLoaded", () => jData('weekly'))
daily.addEventListener("click", () => jData('daily'))
weekly.addEventListener("click", () => jData('weekly'))
monthly.addEventListener("click", () => jData('monthly'))
