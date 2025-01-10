const rangeInput = document.getElementById("range")
const pagesInput = document.querySelector(".pages")
const pricesInput = document.querySelector(".prices")
const toogle = document.querySelector(".toggle")
const variablee = document.querySelector(".variable")

const pageViewsRanges = [
    {
        page: "10K",
        price: 8,
        date: ["month", "yearly"]
    },
    {
        page: "50K",
        price: 12,
        date: ["month", "yearly"]
    },
    {
        page: "100K",
        price: 16,
        date: ["month", "yearly"]
    },
    {
        page: "500K",
        price: 24,
        date: ["month", "yearly"]
    },
    {
        page: "1M",
        price: 36,
        date: ["month", "yearly"]
    },
]
const updating = () => {
    const { page, price, date } = pageViewsRanges[rangeInput.value]

    if (toogle.checked) {
        let finalPrice = Math.floor(price - (price * (25 / 100)))
        pricesInput.textContent = `$${finalPrice}.00`
        variablee.textContent = `/ ${date[1]}`
    }
    else {
        pricesInput.textContent = `$${price}.00`
        variablee.textContent = `/ ${date[0]}`
    }
    pagesInput.textContent = `${page} PAGEVIEWS`
}

toogle.addEventListener("change", updating)
range.addEventListener("input", updating)
updating()


/*Progress/Slider for Chrome */
document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.addEventListener('input', function () {
        const value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.setProperty('--progress-width', `${value}%`);
    });
});
