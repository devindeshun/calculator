function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    
}

let numpadKeys = [...document.querySelectorAll('.numpad-key')];
let textArea = document.querySelector('.calculator-input');
let screen = ""

function updateScreen(newValue) {
    screen = screen + newValue;
    textArea.value = screen;
}

numpadKeys.map((item) => item.addEventListener('click', (e) => {
    updateScreen(e.target.innerHTML);
}));

// console.log([3,5,6,'+',4,'/',2,7].find(operator => operator == "+" || operator == "-" || operator == "*" || operator == "/"))

let var1;
let var2;
let var3;