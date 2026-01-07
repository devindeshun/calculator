let numpadNumberKeys = [...document.querySelectorAll('.numpad-number')];
let numpadSymbolKeys = [...document.querySelectorAll('.numpad-symbol')];
let textArea = document.querySelector('.calculator-input');
let operatorArea = document.querySelector('.calculator-operator');
let clearKey = document.querySelector('.numpad-clear');
let backspaceKey = document.querySelector('.numpad-backspace');
let decimalKey = document.querySelector('.numpad-decimal');
clearAll();

function add(num1, num2) {
    num1 = Number(num1) + Number(num2);
    clearScreen();
    updateScreen(num1);
    return num1;
}

function subtract(num1, num2) {
    num1 = Number(num1) - Number(num2);
    clearScreen();
    updateScreen(num1);
    return num1;
}

function multiply(num1, num2) {
    num1 = Number(num1) * Number(num2);
    clearScreen();
    updateScreen(num1);
    return num1;
}

function divide(num1, num2) {
    num1 = Number(num1) / Number(num2);
    clearScreen();
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

document.addEventListener('keyup', (e) => {
    numKeys = "0 1 2 3 4 5 6 7 8 9";
    symKeys = "+ - * / Enter =";
    decKey = ".";
    bkspKey = "Backspace";
    clrKey = "Escape";
    numKeys = numKeys.split(' ');
    symKeys = symKeys.split(' ');
    
    if (numKeys.includes(e.key)) {
        updateScreen(e.key);
        operatorArea.value = '';
    } else if (symKeys.includes(e.key)) {
        let keyedSymbol = e.key;
        if (keyedSymbol == "Enter") {
            keyedSymbol = "=";
        }

        if (keyedSymbol != '=') {
            operatorArea.value = keyedSymbol;
            operator = keyedSymbol;
        }

        if (!num1) {
            num1 = screen;
        } else {
            num2 = screen;
        }

        if (num1 && num2) {
            num1 = operate(operator, num1, num2);
            num2 = "";
        }

        clearScreen();

        if (keyedSymbol == '=') {
            ["keyup", "mousedown"].forEach( (event) => {
                document.body.addEventListener(event, (e) => {
                    const numpadPressed = e.target.className.split(' ').some((e) => e == 'numpad-number') || numKeys.includes(e.key);
                    const backspacePressed = e.target.className.split(' ').some((e) => e == 'numpad-backspace') || e.key == bkspKey;
                    if (numpadPressed || backspacePressed) {
                        clearAll();
                    };
                }, {once : true})
        })}
    } else if (e.key == decKey) {
        if (!screen.includes('.')){
            updateScreen(e.key);
        }
    } else if (e.key == bkspKey) {
        backspacedNumber = screen.split('').slice(0,-1).join('');
        clearScreen();
        updateScreen(backspacedNumber);
    } else if (e.key == "Escape") {
        clearAll();
        updateScreen(screen);
    }
});

clearKey.addEventListener('click', () => {
    clearAll();
    updateScreen(screen);
});

backspaceKey.addEventListener('click', () => {
    backspacedNumber = screen.split('').slice(0,-1).join('');
    clearScreen();
    updateScreen(backspacedNumber);
});

decimalKey.addEventListener('click', (e) => {
    if (!screen.includes('.')){
        updateScreen(e.target.innerHTML);
    }
});

numpadNumberKeys.map((item) => item.addEventListener('click', (e) => {
    updateScreen(e.target.innerHTML);
    operatorArea.value = "";
}));

numpadSymbolKeys.map((item) => item.addEventListener('click', (e) => {
    const clickedSymbol = e.target.innerHTML;
    if (clickedSymbol != '=') {
        operatorArea.value = clickedSymbol;
        operator = clickedSymbol;
    }

    if (!num1) {
        num1 = screen;
    } else {
        num2 = screen;
    }

    if (num1 && num2) {
        num1 = operate(operator, num1, num2);
        num2 = "";
    }

    clearScreen();

    if (clickedSymbol == '=') {
        document.body.addEventListener('mousedown', (e) => {
            const numpadPressed = e.target.className.split(' ').some((e) => e == 'numpad-number');
            const backspacePressed = e.target.className.split(' ').some((e) => e == 'numpad-backspace');
            if (numpadPressed || backspacePressed) {
                clearAll();
            };
        }, {once : true})
    }
}));