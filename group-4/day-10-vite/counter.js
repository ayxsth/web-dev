export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  // Register click event
  element.addEventListener("click", () => setCounter(counter + 1));

  // Sets initial count to 0
  setCounter(0);
}
