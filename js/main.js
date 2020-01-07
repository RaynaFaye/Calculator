const calculatorButtons = document.querySelector('.calculator__buttons');
calculatorButtons.addEventListener('click', function(event) {
  let currentNumber = event.target.textContent;
  console.log(currentNumber);
  let actionKey = event.target.dataset.action;
  if (!actionKey) {
    console.log('number key');
  }
  if (actionKey === 'add' || actionKey === 'substract' || actionKey === 'multiple' || actionKey === 'divide') {
    console.log('operator key');
  }
  if (actionKey === 'equal') {
    console.log('equal key');
  }
  if (actionKey === 'clear') {
    console.log('clear key');
  }
  if (actionKey === 'back') {
    console.log('return key');
  }
});

document.addEventListener('keydown', function(event) {
  console.log(event.key);
});
