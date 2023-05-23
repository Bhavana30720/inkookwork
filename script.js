const numberInput = document.getElementById('number');
const output = document.getElementById('output');

numberInput.addEventListener('input', handleInput);

function handleInput() {
  const inputValue = parseInt(numberInput.value);

  if (isNaN(inputValue)) {
    output.textContent = '';
  } else if (inputValue < 0) {
    output.textContent = 'Enter a positive value';
  } else if (inputValue % 2 === 0) {
    output.textContent = 'NEXT 3 EVEN NUMBERS: ' + generateNumbers(inputValue, 3, 2).join(', ');
  } else {
    output.textContent = 'NEXT 3 ODD NUMBERS: ' + generateNumbers(inputValue, 3, 2).join(', ');
  }
}

function generateNumbers(start, count, step) {
  const numbers = [];
  let current = start + step;

  for (let i = 0; i < count; i++) {
    numbers.push(current);
    current += step;
  }
  return numbers;
}
