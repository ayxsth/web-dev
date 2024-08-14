import { add, sub } from "./calc.js";

let [count] = document.getElementsByClassName("count");
let [incrementBtn] = document.getElementsByClassName("increment");
let [decrementBtn] = document.getElementsByClassName("decrement");

incrementBtn.addEventListener("click", () => {
  count.innerText = add(parseInt(count.innerText));
});

decrementBtn.addEventListener("click", () => {
  if (parseInt(count.innerText) <= 0) return;

  count.innerText = sub(parseInt(count.innerText));
});
