"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathModule_1 = require("./mathModule");
// Generic Variable
let value = 50;
console.log("Generic Variable:", value);
// Generic Function
function display(data) {
    console.log("Generic Function:", data);
}
display("TypeScript");
display(100);
function printLength(item) {
    console.log("Length:", item.length);
}
printLength("Lahari");
printLength([10, 20, 30, 40]);
// Module
console.log("Square =", (0, mathModule_1.square)(5));
console.log("Cube =", (0, mathModule_1.cube)(3));
