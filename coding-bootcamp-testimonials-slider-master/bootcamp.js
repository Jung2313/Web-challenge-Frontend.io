const customer = [
   {
      id: 1,
      img: "images/image-tanya.jpg",
      info: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited 
      about the future. ”`,
      name: `Tanya Sinclair`,
      job: `UX Engineer`
   },
   {
      id: 2,
      img: "images/image-john.jpg",
      info: `“If you want to lay the best foundation possible I'd recommend taking this course.
      The depth the instructors go into is incredible. I now feel so confident about starting up as
      a professional developer. ”`,
      name: `John Tarkpor`,
      job: `Junior Front-end Developer`
   },
]

const img = document.getElementById("img-person");
const info = document.getElementById('info');
const name1 = document.getElementById('name');
const job = document.getElementById('job');

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//item

let currentItem = 0;


//function customers based on item

const  customers= op=> {
   const item = customer[op]
   img.src = item.img;
   info.textContent = item.info;
   name1.textContent = item.name;
   job.textContent = item.job;

}

//button next

nextBtn.addEventListener('click', () => {
   currentItem++;
   if (currentItem > customer.length - 1) {
      currentItem = 0;
   }
   customers(currentItem)
})
//button prev

prevBtn.addEventListener('click', () => {
   currentItem--;
   if (currentItem < 0) {
     currentItem = customer.length - 1
   }
   customers(currentItem)
})