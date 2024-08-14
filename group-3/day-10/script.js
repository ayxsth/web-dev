import { sum, subtract } from "./calc.js";

let [count] = document.getElementsByClassName("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.querySelector("#decrement");

incrementBtn.addEventListener("click", () => {
  // let prevValue = +count.innerText;
  // let prevValue = parseInt(count.innerText);
  let prevValue = Number(count.innerText);

  count.innerText = sum(prevValue);
});

decrementBtn.addEventListener("click", () => {
  let prevValue = Number(count.innerText);

  if (prevValue <= 0) {
    return;
  }

  count.innerText = subtract(prevValue);
});
