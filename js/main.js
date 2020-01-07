const calculatorButtons = document.querySelector('.calculator__buttons');
calculatorButtons.addEventListener('click', function(event) {
  console.log(event.target.value);
});

document.addEventListener('keydown', function(event) {
  console.log(event.key);
});
