const add = function (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

const subtract = function (num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

const multiply = function (num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}

const divide = function (num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

let firstNum = 0;
let secondNum = 0;
let operator = undefined;

const operate = function (num1, num2, operator) {
    console.log(operator(num1, num2));
    return operator(num1, num2);
}

let displayVal = "";

const calcDisplay = document.querySelector("#display");

const updateDisplay = function (val) {
    console.log(`Val is = ${val}`);
    console.log(`Val type is = ${typeof val}`)
    displayVal = displayVal.concat(val);
    console.log(`displayVal is = ${displayVal}`);
    calcDisplay.textContent = displayVal;
}

for (let i=0; i<=9; i++) {
    //console.log(`btn${i}`)
    let btn = document.querySelector(`#btn${i}`);
    //console.log(btn);
    btn.addEventListener('click',(event) => {
        updateDisplay(`${i}`);
    });
};