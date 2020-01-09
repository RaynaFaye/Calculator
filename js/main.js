const calculatorButtons = document.querySelector('.calculator__buttons');
const result = document.querySelector('.calculator__current-value');
const previousEntry = document.querySelector('.calculator__previous-value');
let value = '';
let numberEntries = [];
let actionCalled = '';

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

//What to do when clicking on buttons
calculatorButtons.addEventListener('click', function(event) {
  let currentNumber = event.target.textContent;
  let actionKey = event.target.dataset.action;
  if (!actionKey) {
    value = value + currentNumber;
    //Show the current result on top of the calculator
    result.textContent = value;
  }
  //Action keys (+ - * /)
  if (actionKey === 'add' || actionKey === 'substract' || actionKey === 'multiple' || actionKey === 'divide') {
    if (actionKey === 'add') {
      actionCalled = 'add';
      numberEntries.push(value);
      previousEntry.textContent = `${value} + `;
      value = '';
    }
  }
  //Equal Key : Currently just simple with only two numbers
  if (actionKey === 'equal') {
    if (actionCalled === 'add') {
      numberEntries.push(value);
      let finalResult = add(...numberEntries);
      result.textContent = finalResult;
      previousEntry.textContent = `${previousEntry.textContent} ${value} = ${finalResult} `;
      value = '';
      numberEntries = [];
    }
  }
  //Clear everything
  if (actionKey === 'clear') {
    previousEntry.textContent = 0;
    result.textContent = 0;
    value = '';
  }
  //Take of last value on current shown result
  if (actionKey === 'back') {
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
