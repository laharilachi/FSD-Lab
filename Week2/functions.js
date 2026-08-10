
// Function with return type
function add(a, b) {
    return a + b;
}
console.log("Sum =", add(10, 20));
// Optional Parameter
function display(name, age) {
    if (age) {
        console.log("Name:", name, "Age:", age);
    }
    else {
        console.log("Name:", name);
    }
}
display("Lahari");
display("Lahari", 20);
// Default Parameter
function welcome(name = "Student") {
    console.log("Welcome", name);
}
welcome();
welcome("Lahari");
// Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log("Multiplication =", multiply(5, 4));
// REST Parameter
function total(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log("Total =", total(10, 20, 30, 40));
