let numpadNumberKeys = [...document.querySelectorAll(".numpad-number")];
let numpadSymbolKeys = [...document.querySelectorAll(".numpad-symbol")];
let textArea = document.querySelector(".calculator-input");
let operatorArea = document.querySelector(".calculator-operator");
let clearKey = document.querySelector(".numpad-clear");
let backspaceKey = document.querySelector(".numpad-backspace");
let decimalKey = document.querySelector(".numpad-decimal");
let numKeys = "0 1 2 3 4 5 6 7 8 9";
let symKeys = "+ - * / Enter =";
let decKey = ".";
let bkspKey = "Backspace";
let clrKey = "Escape";
numKeys = numKeys.split(" ");
symKeys = symKeys.split(" ");
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
      return (num1 = add(num1, num2));
    case "-":
      return (num1 = subtract(num1, num2));
    case "x":
      return (num1 = multiply(num1, num2));
    case "÷":
      return (num1 = divide(num1, num2));
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

function ifEqualSymbol(symbol) {
  if (symbol == "=") {
    ["keyup", "mousedown"].forEach((event) => {
      document.body.addEventListener(
        event,
        (e) => {
          const clearPressed = 
            e.target.className.split(" ").some((e) => e == "numpad-clear") ||
            e.key == clrKey;
          const numpadPressed =
            e.target.className.split(" ").some((e) => e == "numpad-number") ||
            numKeys.includes(e.key);
          const backspacePressed =
            e.target.className
              .split(" ")
              .some((e) => e == "numpad-backspace") || e.key == bkspKey;
          if (numpadPressed || backspacePressed || clearPressed) {
            clearAll();
          }
        },
        { once: true }
      );
    });
  }
}

document.addEventListener("keyup", (e) => {
  console.log(e.key);

  if (numKeys.includes(e.key)) {
    updateScreen(e.key);
    operatorArea.value = "";
  } else if (symKeys.includes(e.key)) {
    let symbol = e.key;
    if (symbol == "Enter") {
      symbol = "=";
    }

    if (symbol != "=") {
      operatorArea.value = symbol;
      operator = symbol;
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

    ifEqualSymbol(symbol);
  } else if (e.key == decKey) {
    if (!screen.includes(".")) {
      updateScreen(e.key);
    }
  } else if (e.key == bkspKey) {
    backspacedNumber = screen.split("").slice(0, -1).join("");
    clearScreen();
    updateScreen(backspacedNumber);
  } else if (e.key == "Escape") {
    clearAll();
    updateScreen(screen);
  }
});

clearKey.addEventListener("click", () => {
  clearAll();
  updateScreen(screen);
});

backspaceKey.addEventListener("click", () => {
  backspacedNumber = screen.split("").slice(0, -1).join("");
  clearScreen();
  updateScreen(backspacedNumber);
});

decimalKey.addEventListener("click", (e) => {
  if (!screen.includes(".")) {
    updateScreen(e.target.innerHTML);
  }
});

numpadNumberKeys.map((item) =>
  item.addEventListener("click", (e) => {
    updateScreen(e.target.innerHTML);
    operatorArea.value = "";
  })
);

numpadSymbolKeys.map((item) =>
  item.addEventListener("click", (e) => {
    const symbol = e.target.innerHTML;
    if (symbol != "=") {
      operatorArea.value = symbol;
      operator = symbol;
    }

    !num1 ? (num1 = screen) : (num2 = screen);

    if (num1 && num2) {
      num1 = operate(operator, num1, num2);
      num2 = "";
    }

    clearScreen();

    ifEqualSymbol(symbol);
  })
);
