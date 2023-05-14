function add(sum, num){
    return sum + num;
}

function subtract(diff, num){
    return diff - num;
}

function multiply(mult, num){
    return mult * num;
}

function divide(a, b){
    return a / b;
}

let arr = [3, 3, 8, 35];

console.log("Add: " + arr.reduce(add, 0));
console.log("Subtract: " + arr.reduce(subtract, 0));
console.log("Multiply: " + arr.reduce(multiply, 1));
console.log("Divide: " + arr.reduce(divide));