

let numpadNumberKeys = [...document.querySelectorAll('.numpad-number')];
let numpadSymbolKeys = [...document.querySelectorAll('.numpad-symbol')];
let textArea = document.querySelector('.calculator-input');
let operatorArea = document.querySelector('.calculator-operator');
let clearKey = document.querySelector('.numpad-clear');
let backspaceKey = document.querySelector('.numpad-backspace');
let arr = [];
let operator = "";
let num1 = "";
let num2 = "";
let screen = "";

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

function updateScreen(newValue) {
    screen = screen + newValue;
    textArea.value = screen;
}

clearKey.addEventListener('click', () => {
    screen = "";
    operatorArea.value = "";
    updateScreen(screen);
});

backspaceKey.addEventListener('click', () => {
    arr = screen.split('').slice(0,-1).join('')
    screen = "";
    updateScreen(arr);
});

numpadNumberKeys.map((item) => item.addEventListener('click', (e) => {
    updateScreen(e.target.innerHTML);
}));

numpadSymbolKeys.map((item) => item.addEventListener('click', (e) => {
    operatorArea.value = e.target.innerHTML;
}))

// console.log([3,5,6,'+',4,'/',2,7].find(operator => operator == "+" || operator == "-" || operator == "*" || operator == "/"))

let var1;
let var2;
let var3;