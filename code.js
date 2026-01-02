

let numpadNumberKeys = [...document.querySelectorAll('.numpad-number')];
let numpadSymbolKeys = [...document.querySelectorAll('.numpad-symbol')];
let textArea = document.querySelector('.calculator-input');
let operatorArea = document.querySelector('.calculator-operator');
let clearKey = document.querySelector('.numpad-clear');
let backspaceKey = document.querySelector('.numpad-backspace');
clearAll();

function add(num1, num2) {
    num1 = Number(num1) + Number(num2);
    clearScreen();
    // num2 = "";
    updateScreen(num1);
    return num1;
}

function subtract(num1, num2) {
    num1 = Number(num1) - Number(num2);
    clearScreen();
    // num2 = "";
    updateScreen(num1);
    return num1;
}

function multiply(num1, num2) {
    num1 = Number(num1) * Number(num2);
    clearScreen();
    // num2 = "";
    updateScreen(num1);
    return num1;
}

function divide(num1, num2) {
    num1 = Number(num1) / Number(num2);
    clearScreen();
    // num2 = "";
    updateScreen(num1);
    return num1;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 = add(num1, num2);
        case "-":
            return num1 = subtract(num1, num2);
        case "x":
            return num1 = multiply(num1, num2);
        case "÷":
            return num1 = divide(num1, num2);
    }
}

function updateScreen(newValue) {
    screen = screen + newValue;
    textArea.value = screen;
    console.log(`Num1: ${num1} Num2: ${num2} Operator: ${operator} Screen: ${screen}`);
}

function clearAll() {
    screen = "";
    operator = "";
    num1 = "";
    num2 = "";
    operatorArea.value = "";
}

function clearScreen() {
    screen = "";
}

clearKey.addEventListener('click', () => {
    clearAll();
    updateScreen(screen);
});

backspaceKey.addEventListener('click', () => {
    arr = screen.split('').slice(0,-1).join('');
    clearScreen();
    updateScreen(arr);
});

numpadNumberKeys.map((item) => item.addEventListener('click', (e) => {
    updateScreen(e.target.innerHTML);
    operatorArea.value = "";
    if (!num2 && num1) {
        num2 = screen;
    } else if (num2 && num1) {
        num2 = screen;
    }
}));

numpadSymbolKeys.map((item) => item.addEventListener('click', (e) => {
    if (e.target.innerHTML != '='){
        operatorArea.value = e.target.innerHTML;
        operator = e.target.innerHTML;
    }

    if (num1 && num2) {
        num2 = screen;
        num1 = operate(operator, num1, num2);
        num2 = "";
    }

    if (num1) {
        num2 = screen;
        // return [num1, num2] = operate(operator, num1, num2);
    } else {
        num1 = screen;
    }
    clearScreen();
}))