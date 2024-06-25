// add 2 nums
const add = function (num1, num2) {
	//console.log(num1 + num2);
	// convert to numbers
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	return num1 + num2;
};

// subtract 2 nums
const subtract = function (num1, num2) {
	//console.log(num1 - num2);
	// convert to numbers
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	return num1 - num2;
};

// multiply 2 nums
const multiply = function (num1, num2) {
	//console.log(num1 * num2);
	// convert to numbers
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	return num1 * num2;
};

// divide 2 nums
const divide = function (num1, num2) {
	// Catch divide by 0
	if (num2 === "0") {
		return "Nice try nerd";
	} else {
		//console.log(num1 / num2);
		// convert to numbers
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		return num1 / num2;
	}
};

// Operate function used for equals button

const operate = function (num1, num2, operator) {
	//console.log(operator(num1, num2));
	// convert to numbers
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	return operator(num1, num2);
};

// Update calculator display when called with number

let displayVal = "";

const calcDisplay = document.querySelector("#display");

const updateDisplay = function (val) {
	//console.log(`Val is = ${val}`);
	//console.log(`Val type is = ${typeof val}`);
	displayVal = displayVal.concat(val);
	// round to 35 chars
	if (displayVal.length > 35) {
		displayVal = displayVal.slice(0, 36);
	}
	//console.log(`displayVal is = ${displayVal}`);
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
});
subtractButton.addEventListener("click", () => {
	updateDisplay("-");
});
multiplyButton.addEventListener("click", () => {
	updateDisplay("*");
});
divideButton.addEventListener("click", () => {
	updateDisplay("/");
});

// When equals button is clicked, calculate operation
const equalsButton = document.querySelector("#equals");

// vars for storing display numbers and ops ready for calculation
let firstNum = undefined;
let secondNum = undefined;
let operator = undefined;
let operatorSign = undefined;
let result = undefined;
// Regex to read nums
const regexNums = /\d+/g;
// Regex to read operators
const regexOps = /[+\-*/]/g;

equalsButton.addEventListener("click", () => {
	// Use operator regex to read operators
	let opsArray = displayVal.match(regexOps);
	console.log(`Ops array: ${opsArray}`);
	// Use nums regex to read nums
	let numsArray = displayVal.match(regexNums);
	console.log(`Nums array: ${numsArray}`);

	// Loop through calculations
	for (let i = 0; i < numsArray.length - 1; i++) {
		// read num1
		// if first calc in sequence take nums[i] 
		if (i===0) {
			firstNum = numsArray[i];
		} else {
			// else take previous result
			firstNum = result;
		}
		// read num2
		secondNum = numsArray[i+1];
		// read operatorSign
		operatorSign = opsArray[i];
		operatorSign = operatorSign.toString().trim();
		//console.log(`Operator is ${operatorSign} of type: ${typeof operatorSign}`);
		// convert operator sign into function
		switch (operatorSign) {
			case "+":
				//console.log("Add");
				// clear display
				clearDisplay();
				// update display with new result
				result = operate(firstNum, secondNum, add);
				updateDisplay(result);
				break;
			case "-":
				//console.log("Subtract");
				// clear display
				clearDisplay();
				// update display with new result
				result = operate(firstNum, secondNum, subtract);
				updateDisplay(result);
				break;
			case "*":
				//console.log("Multiply");
				// clear display
				clearDisplay();
				// update display with new result
				result = operate(firstNum, secondNum, multiply);
				updateDisplay(result);
				break;
			case "/":
				//console.log("Divide");
				// clear display
				clearDisplay();
				// update display with new result
				result = operate(firstNum, secondNum, divide);
				updateDisplay(result);
				break;
		}
		console.log(
			`First num: ${firstNum}, Second num: ${secondNum}, Result: ${result}`
		);
	}
	/* 
    Need to add exceptions for if display is invalid 
    - lacking two numbers separated by an operator
    */
	// clear saved values
	firstNum = undefined;
	secondNum = undefined;
	operatorSign = undefined;
	operator = undefined;
	result = undefined;
});

// When clear button is clicked, delete displayVals and update
const clearButton = document.querySelector("#clear");

// reusable clear function
const clearDisplay = function () {
	displayVal = "";
	calcDisplay.textContent = displayVal;
};

clearButton.addEventListener("click", () => {
	clearDisplay();
});
