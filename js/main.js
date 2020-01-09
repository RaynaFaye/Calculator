const calculatorButtons = document.querySelector('.calculator__buttons');
const result = document.querySelector('.calculator__result');
let value = '';

//What to do when clicking on buttons
calculatorButtons.addEventListener('click', function(event) {
  let currentNumber = event.target.textContent;
  let actionKey = event.target.dataset.action;
  if (!actionKey) {
    console.log('number key');
    value = value + currentNumber;
    //Show the current result on top of the calculator
    result.textContent = value;
  }
  if (actionKey === 'add' || actionKey === 'substract' || actionKey === 'multiple' || actionKey === 'divide') {
    console.log('operator key');
  }
  if (actionKey === 'equal') {
    console.log('equal key');
  }
  if (actionKey === 'clear') {
    console.log('clear key');
    result.textContent = 0;
    value = '';
  }
  if (actionKey === 'back') {
    console.log('return key');
    result.textContent = result.textContent.slice(0, -1);
    value = result.textContent;
  }
});

//Get value on keypress not currently set up but kept for the time being
// document.addEventListener('keydown', function(event) {
//   console.log(event.key);
// });

//The console.log to copy paste to check the result and value variable values
//console.log(`result is ${result.textContent}; value is ${value}`);
