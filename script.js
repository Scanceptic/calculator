// add 2 nums
const add = function (num1, num2) {
	console.log(num1 + num2);
	return num1 + num2;
};

// subtract 2 nums
const subtract = function (num1, num2) {
	console.log(num1 - num2);
	return num1 - num2;
};

// multiply 2 nums
const multiply = function (num1, num2) {
	console.log(num1 * num2);
	return num1 * num2;
};

// divide 2 nums
const divide = function (num1, num2) {
	// Catch divide by 0
	if (!num2) {
		return "Nice try nerd";
	}
	console.log(num1 / num2);
	return num1 / num2;
};

// Operate function used for equals button

const operate = function (num1, num2, operator) {
	console.log(operator(num1, num2));
	return operator(num1, num2);
};

// Update calculator display when called with number

let displayVal = "";

const calcDisplay = document.querySelector("#display");

const updateDisplay = function (val) {
	console.log(`Val is = ${val}`);
	console.log(`Val type is = ${typeof val}`);
	displayVal = displayVal.concat(val);
	// round to 15 chars
	if (displayVal.length > 15) {
		displayVal = displayVal.slice(0, 16);
	}
	console.log(`displayVal is = ${displayVal}`);
	calcDisplay.textContent = displayVal;
};

// When number button is clicked, update display with number
for (let i = 0; i <= 9; i++) {
	//console.log(`btn${i}`)
	let btn = document.querySelector(`#btn${i}`);
	//console.log(btn);
	btn.addEventListener("click", () => {
		updateDisplay(`${i}`);
	});
}

// When operator button is clicked, update display with operator
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
addButton.addEventListener("click", () => {
    updateDisplay("+");
})
subtractButton.addEventListener("click", () => {
    updateDisplay("-");
})
multiplyButton.addEventListener("click", () => {
    updateDisplay("*");
})
divideButton.addEventListener("click", () => {
    updateDisplay("/");
})

// When equals button is clicked, calculate operation
const equalsButton = document.querySelector("#equals");

// vars for storing display numbers ready for calculation
let firstNum = 0;
let secondNum = 0;
let operator = undefined;
// Regex to read nums
const regexNums = /\d+/;
// Regex to read operators
const regexOps = /[+\-*/]/;

equalsButton.addEventListener("click", () => {
	// Use operator regex to split display into nums/ops
        // read num1
        firstNum = 3;
        // read num2
        secondNum = 56;
        // read operator
        operator = multiply;
	/* 
    Need to add exceptions for if display is invalid 
    - lacking two numbers separated by an operator
    */
    // clear display
    clearDisplay();
    // update display with new result
	updateDisplay(operate(firstNum, secondNum, operator));
});

// When clear button is clicked, delete displayVals and update
const clearButton = document.querySelector("#clear");

// reusable clear function
const clearDisplay = function () {
    displayVal = "";
	calcDisplay.textContent = displayVal;
}

clearButton.addEventListener("click", () => {
	clearDisplay();
});
