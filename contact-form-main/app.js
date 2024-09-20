const submitBtn = document.querySelector(".submit");
const form = document.querySelector(".container");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const radioButtons = document.querySelectorAll('input[name="genSupport"]');
const message = document.getElementById("message-textarea");
const errorTextField = document.querySelectorAll(".error");
const radioError = document.querySelector(".radioerror");
const checkBox = document.querySelector(".check");
const checkBoxError = document.querySelector(".checkerror");
const messageSent = document.querySelector(".message-sent");
const container = document.querySelector(".container");

// Regex
const regexLetters = /^[a-zA-Z]+$/; // to validate letters
const emailRegex = /^[\w&-]+@[a-zA-Z]+\.[a-zA-Z]+$/; // to validate the email

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

const radioCheck = () => {
  let isradioChecked = false;
  radioButtons.forEach(radio => {
    if (radio.checked) {
      isradioChecked = true;
    }
  });

  if (!isradioChecked) {
    radioError.textContent = "Please select a query type";
  } else {
    radioError.textContent = "";
  }
  return isradioChecked;
};

const checkConcent = () => {
  if (!checkBox.checked) {
    checkBoxError.textContent = "To submit this form, please consent to being contacted";
  } else {
    checkBoxError.textContent = "";
  }
  return checkBox.checked;
};

const resetBtn = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";
  radioButtons.forEach(radio => (radio.checked = false));
  checkBox.checked = false;
};

const validateForm = () => {
  let flag = true;
  [firstName, lastName, email, message].forEach((item, index) => {
    if (item.value.trim() === "") {
      errorTextField[index].textContent = "This field is required";
      item.classList.add("error-border");
      flag = false;
    }else if ((index === 0 || index === 1) && !regexLetters.test(item.value)) {
      item.classList.add("error-border");
      errorTextField[index].textContent = "Only letters are allowed";
      flag = false;
    } else if (index === 2 && !emailRegex.test(item.value)) {
      errorTextField[index].textContent = "Please enter a valid email address";
      item.classList.add("error-border");
      flag = false;
    } else {
      errorTextField[index].textContent = "";
      item.classList.remove("error-border");
    }
  });

  if (!radioCheck()) {
    flag = false;
  }

  if (!checkConcent()) {
    flag = false;
  }

  return flag;
};

submitBtn.addEventListener("click", () => {

  if (validateForm()) {
    messageSent.classList.add("appear");
    container.classList.add("out-margin");
    resetBtn()
  }
  setTimeout(() => {
    messageSent.classList.remove("appear");
    container.classList.remove("out-margin");

  }, 4000)


});
