import { square, cube } from "./mathModule";

// Generic Variable
let value: number = 50;

console.log("Generic Variable:", value);

// Generic Function
function display<T>(data:T):void{
    console.log("Generic Function:", data);
}

display<string>("TypeScript");
display<number>(100);

// Generic Constraint

interface LengthWise{
    length:number;
}

function printLength<T extends LengthWise>(item:T):void{
    console.log("Length:", item.length);
}

printLength("Lahari");
printLength([10,20,30,40]);

// Module

console.log("Square =", square(5));
console.log("Cube =", cube(3));