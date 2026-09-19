// Function with return type
function add(a: number, b: number): number {
    return a + b;
}

console.log("Sum =", add(10, 20));

// Optional Parameter
function display(name: string, age?: number): void {
    if (age) {
        console.log("Name:", name, "Age:", age);
    } else {
        console.log("Name:", name);
    }
}

display("Lahari");
display("Lahari", 20);

// Default Parameter
function welcome(name: string = "Student"): void {
    console.log("Welcome", name);
}

welcome();
welcome("Lahari");

// Arrow Function
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log("Multiplication =", multiply(5, 4));

// REST Parameter
function total(...numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log("Total =", total(10, 20, 30, 40));