namespace Calculator {

    export function add(a:number,b:number):number{
        return a+b;
    }

    export function multiply(a:number,b:number):number{
        return a*b;
    }
}

console.log("Addition =", Calculator.add(10,20));
console.log("Multiplication =", Calculator.multiply(5,6));