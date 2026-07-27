"use strict";
// ==============================
// WEEK 1 - TypeScript Basics
// ==============================
// ---------- Simple Types ----------
// Number
let age = 20;
// String
let studentName = "Lahari";
// Boolean
let isStudent = true;
console.log("----- Simple Types -----");
console.log("Age:", age);
console.log("Name:", studentName);
console.log("Student:", isStudent);
// ---------- Special Types ----------
// any
let data = "Hello";
console.log("\n----- Any Type -----");
console.log("Value:", data);
data = 100;
console.log("Updated Value:", data);
// unknown
let value = "TypeScript";
console.log("\n----- Unknown Type -----");
if (typeof value === "string") {
    console.log("Uppercase:", value.toUpperCase());
}
// void
console.log("\n----- Void Type -----");
function displayMessage() {
    console.log("This function does not return anything.");
}
displayMessage();
// ---------- Type Annotations ----------
console.log("\n----- Type Annotations -----");
let rollNo = 101;
let department = "CSE (AI&ML)";
let passed = true;
console.log("Student Name:", studentName);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Passed:", passed);
// ---------- End of Program ----------
console.log("\nWeek 1 Experiment Completed Successfully.");
