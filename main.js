/* Elements */

const tallyCounter = document.querySelector("#tally-counter--number");
const leftButton = document.querySelector("#tally-counter--button-left");
const rightButton = document.querySelector("#tally-counter--button-right");

let value = 0;

/**
 * Decrements value
 * @param {*} value number passed in
 * @returns decremented value
 */
const decrementValue = (value) => {
  value--;
  return value;
};

/**
 * Increments value
 * @param {*} value number passed in
 * @returns incremented value
 */
const incrementValue = (value) => {
  value++;
  return value;
};

leftButton.addEventListener("click", () => {
  tallyCounter.innerHTML = decrementValue(tallyCounter.innerHTML);
});

rightButton.addEventListener("click", () => {
  tallyCounter.innerHTML = incrementValue(tallyCounter.innerHTML);
});
