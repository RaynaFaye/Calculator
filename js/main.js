const calculatorButtons = document.querySelector('.calculator__buttons');
const result = document.querySelector('.calculator__current-value');
const previousEntry = document.querySelector('.calculator__previous-value');
let value = '';
let numberEntries = [];
let actionCalled = '';
let allEntries = [];

function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function substract(num1, num2) {
  return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}
function changeValuesOnPage(actionToCall) {
  numberEntries.push(value);
  allEntries.push(value);
  let finalResult = actionToCall(...numberEntries);
  result.textContent = finalResult;
  previousEntry.textContent = `${previousEntry.textContent} ${value} = ${finalResult} `;
  value = '';
  numberEntries = [];
  allEntries = [];
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
  if (actionKey === 'add' || actionKey === 'substract' || actionKey === 'multiply' || actionKey === 'divide') {
    //Set by default the value to zero if first key pressed is an action key
    if (previousEntry.textContent === '' && value === '') {
      value = 0;
    }
    //Check to see if the array of values already contains something and if it does and a new value has been entered, and the next key is an action key: add, substract, multiply or divide the two current values and then set next action.
    if (numberEntries.length !== 0 && value !== '') {
      numberEntries.push(value);
      allEntries.push(value);
      if (actionCalled === 'add') {
        let newValue = add(...numberEntries);
        numberEntries = [];
        numberEntries.push(newValue);
      }
      if (actionCalled === 'substract') {
        let newValue = substract(...numberEntries);
        numberEntries = [];
        numberEntries.push(newValue);
      }
      if (actionCalled === 'multiply') {
        let newValue = multiply(...numberEntries);
        numberEntries = [];
        numberEntries.push(newValue);
      }
      if (actionCalled === 'divide') {
        let newValue = divide(...numberEntries);
        numberEntries = [];
        numberEntries.push(newValue);
      }
    }
    //If no previous value yet in array, push it to it
    if (numberEntries.length === 0) {
      numberEntries.push(value);
      allEntries.push(value);
    }
    //Set the actions up and display the previous value and current action on screen
    if (actionKey === 'add') {
      actionCalled = 'add';
      previousEntry.textContent = `${previousEntry.textContent} ${allEntries.slice(-1)} + `;
    }
    if (actionKey === 'substract') {
      actionCalled = 'substract';
      previousEntry.textContent = `${previousEntry.textContent} ${allEntries.slice(-1)} - `;
    }
    if (actionKey === 'multiply') {
      actionCalled = 'multiply';
      previousEntry.textContent = `${previousEntry.textContent} ${allEntries.slice(-1)} * `;
    }
    if (actionKey === 'divide') {
      actionCalled = 'divide';
      previousEntry.textContent = `${previousEntry.textContent} ${allEntries.slice(-1)} / `;
    }
    result.textContent = numberEntries[0];
    value = '';
  }
  //Equal Key: Call the function to do the action and change value on page
  if (actionKey === 'equal') {
    if (actionCalled === 'add') {
      changeValuesOnPage(add);
    }
    if (actionCalled === 'substract') {
      changeValuesOnPage(substract);
    }
    if (actionCalled === 'multiply') {
      changeValuesOnPage(multiply);
    }
    if (actionCalled === 'divide') {
      changeValuesOnPage(divide);
    }
  }
  //Clear everything
  if (actionKey === 'clear') {
    numberEntries = [];
    previousEntry.textContent = '';
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
