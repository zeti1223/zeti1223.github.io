let calculation = "";

function updateDisplay(value) {
  const display = document.getElementById("display");
  calculation += value;
  display.value = calculation;
}

function clearDisplay() {
  const display = document.getElementById("display");
  calculation = "";
  display.value = "";
}

function backspace() {
  const display = document.getElementById("display");
  calculation = calculation.slice(0, -1);
  display.value = calculation;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(calculation);
    calculation = result.toString();
    display.value = result.toString();
  } catch (error) {
    alert("Invalid calculation");
    clearDisplay();
  }
}
