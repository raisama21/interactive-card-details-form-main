const username = document.querySelector("#username");
const cardnumber = document.querySelector("#cardnumber");
const cvc = document.querySelector("#cvc");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const displayUsername = document.querySelector(".card-name");
const displayCardnumber = document.querySelector(".card-number");
const displayCVC = document.querySelector(".display-cvc");
const displayMonth = document.querySelector(".display-month");
const displayYear = document.querySelector(".display-year");

const button = document.querySelector("#confirm-btn");
const formContainer = document.querySelector(".form-container");
const hiddenSection = document.querySelector(".hidden-section");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  erroMessage(username);
  erroMessage(cardnumber);
  erroMessage(cvc);
  erroMessageForDate(month);
  erroMessageForDate(year);

  let isValid =
    username.value === "" &&
    cardnumber.value === "" &&
    cvc.value === "" &&
    month.value === "" &&
    year.value === "";

  if (!isValid) {
    formContainer.style.display = "none";
    hiddenSection.style.display = "block";
  } else {
    formContainer.style.display = "block";
    hiddenSection.style.display = "none";
  }

  button.textContent = "continue";
});

username.addEventListener("input", () => {
  displayUsername.textContent = username.value;
});

cardnumber.addEventListener("input", (e) => {
  displayCardnumber.textContent = cardnumber.value;
  numbersOnly(cardnumber);

  // for adding space after every 4 character
  let target = e.target,
    position = target.selectionEnd,
    length = target.value.length;

  target.value = target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  target.selectionEnd = position +=
    target.value.charAt(position - 1) === " " &&
    target.value.charAt(length - 1) === " " &&
    length !== target.value.length
      ? 1
      : 0;
});

cvc.addEventListener("input", () => {
  displayCVC.textContent = cvc.value;
  numbersOnly(cvc);
});

month.addEventListener("input", () => {
  displayMonth.textContent = month.value;
  erroMessageForDate(month);
});

year.addEventListener("input", () => {
  displayYear.textContent = year.value;
  erroMessageForDate(year);
});

function erroMessageForDate(input) {
  let regex = /\d+/g;

  if (regex.test(input.value)) {
    input.parentElement.nextElementSibling.textContent = "";
  } else {
    input.parentElement.nextElementSibling.textContent =
      "Wrong format, numbers only";
  }

  if (input.value === "" || input.value == null) {
    input.parentElement.nextElementSibling.textContent = "Can't be blank";
  }
}

function numbersOnly(input) {
  let regex = /\d+/g;

  if (regex.test(input.value)) {
    input.nextElementSibling.textContent = "";
  } else {
    input.nextElementSibling.textContent = "Wrong format, numbers only";
  }
}

function erroMessage(input) {
  if (input.value === "" || input.value == null) {
    input.nextElementSibling.textContent = "Can't be blank";
  }
}
