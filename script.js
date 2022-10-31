const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelectorA("[data-equals]");
const deleteButton = document.querySelectorA("[data-delete]");
const allClearButton = document.querySelectorA("[data-all-clear]");
const previousOperandTextElement = document.querySelectorA(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectorA(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
