function add(num1, num2) {
    return num1 + num2;
}
console.log('The sum of the following addition 7 & 2 is: $(add(7, 2))');
function subtract(num1, num2) {
    return num1 - num2;
}
console.log('the subtracted result for 10-7 is : $(subtract(10 , 7))');
function multiply(num1, num2) {
    return num1 * num2;
}
console.log('the product of the numbers 8 & 2 is : $(multiply(8, 2))');
function divide(num1, num2) {
    if (num2 === 0) {
        return 'Err:Division by zero is not allowed';
    }
    return num1 / num2;
}
console.log("Result of 20 divide by 4: ".concat(divide(20, 4)));
console.log("when trying to divide 20 by 0:".concat(divide(20, 0)));
function findRemainder(num1, num2) {
    return num1 % num2;
}
var result = findRemainder(7, 3);
console.log("the remainder of 7 divided by 3 is: ".concat(result));
