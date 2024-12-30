const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let counter = 0;

const updateCounter = () => {
  counterValue.textContent = counter;
};

incrementButton.onclick= () => {
  counter++;
  updateCounter();
};

decrementButton.onclick= () => {
  counter--;
  updateCounter();
};

resetButton.onclick= () => {
  counter = 0;
  updateCounter();
};
