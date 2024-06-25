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

// vars for storing display numbers ready for calculation
let firstNum = 0;
let secondNum = 0;
let operator = undefined;

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

// When equals button is clicked, calculate operation
const equalsButton = document.querySelector("#equals");

// Regex to read nums
const regexNums = 1;
// Regex to read operators
const regexOps = 1;

equalsButton.addEventListener("click", () => {
	// Use regex to read display

	updateDisplay(operate(firstNum, secondNum, operator));
});

// When clear button is clicked, delete displayVals and update
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
	displayVal = "";
	calcDisplay.textContent = displayVal;
});
