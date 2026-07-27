// ==============================
// WEEK 1 - TypeScript Basics
// ==============================

// ---------- Simple Types ----------

// Number
let age: number = 20;

// String
let studentName: string = "Lahari";

// Boolean
let isStudent: boolean = true;

console.log("----- Simple Types -----");
console.log("Age:", age);
console.log("Name:", studentName);
console.log("Student:", isStudent);

// ---------- Special Types ----------

// any
let data: any = "Hello";
console.log("\n----- Any Type -----");
console.log("Value:", data);

data = 100;
console.log("Updated Value:", data);

// unknown
let value: unknown = "TypeScript";

console.log("\n----- Unknown Type -----");

if (typeof value === "string") {
    console.log("Uppercase:", value.toUpperCase());
}

// void
console.log("\n----- Void Type -----");

function displayMessage(): void {
    console.log("This function does not return anything.");
}

displayMessage();

// ---------- Type Annotations ----------

console.log("\n----- Type Annotations -----");

let rollNo: number = 101;
let department: string = "CSE (AI&ML)";
let passed: boolean = true;

console.log("Student Name:", studentName);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Passed:", passed);

// ---------- End of Program ----------

console.log("\nWeek 1 Experiment Completed Successfully.");