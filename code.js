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

let numpadNumberKeys = [...document.querySelectorAll('.numpad-number')];
let textArea = document.querySelector('.calculator-input');
let clearKey = document.querySelector('.numpad-clear');
let backspaceKey = document.querySelector('.numpad-backspace');
let screen = "";
let arr = [];

clearKey.addEventListener('click', () => {
    screen = "";
    updateScreen(screen);
});

backspaceKey.addEventListener('click', () => {
    arr = screen.split('').slice(0,-1).join('')
    screen = '';
    updateScreen(arr);
});

function updateScreen(newValue) {
    screen = screen + newValue;
    textArea.value = screen;
}

numpadNumberKeys.map((item) => item.addEventListener('click', (e) => {
    updateScreen(e.target.innerHTML);
}));

// console.log([3,5,6,'+',4,'/',2,7].find(operator => operator == "+" || operator == "-" || operator == "*" || operator == "/"))

let var1;
let var2;
let var3;