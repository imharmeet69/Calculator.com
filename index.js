const resultDisplay = document.getElementById("result");

function calculation(value) {
  resultDisplay.textContent += value;
}

function clearResult() { // Changed the function name from 'clear' to 'clearResult'
  resultDisplay.textContent = '';
}

function calculateResult() {
  try {
    const result = eval(resultDisplay.textContent);
    resultDisplay.textContent = result;
  } catch (error) {
    resultDisplay.textContent = "Error";
  }
}
