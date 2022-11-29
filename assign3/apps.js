const numberForm = document.querySelector("#number-form");
const numberInput = document.querySelector(".set-input");
const numberUserInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const endComent = document.querySelector(".end");
const HIDDEN_CLASSNAME = "hidden";

function numberSubmit(event) {
  event.preventDefault();
  result.classList.add(HIDDEN_CLASSNAME);
  const numberVal = numberInput.value;
  const randNum = Math.ceil(Math.random() * numberVal);
  const numberUserVal = numberUserInput.value;
  end(numberUserVal, randNum);
}

numberForm.addEventListener("submit", numberSubmit);

function end(numberUserVal, randNum) {
  numberUserVal = parseInt(numberUserVal);
  result.innerText = `you chose ${numberUserVal}, the machine chose ${randNum}`;
  result.classList.remove(HIDDEN_CLASSNAME);
  if (numberUserVal == randNum) {
    endComent.innerText = "you won";
  } else {
    endComent.innerText = "you lose";
  }
}
