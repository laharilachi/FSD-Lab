"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
})(Calculator || (Calculator = {}));
console.log("Addition =", Calculator.add(10, 20));
console.log("Multiplication =", Calculator.multiply(5, 6));
