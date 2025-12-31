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
let textArea = [document.querySelector('.calculator-input')];


numpadKeys.map((item) => item.addEventListener('click', (e) => {
    textArea = [document.querySelector('.calculator-input')];
    console.log(e.target.innerHTML);
    console.log(textArea.value);
}))

console.log(textArea.value)

// console.log([3,5,6,'+',4,'/',2,7].find(operator => operator == "+" || operator == "-" || operator == "*" || operator == "/"))

let var1;
let var2;
let var3;