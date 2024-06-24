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