function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, op){
    if(op == 0){
        return add(a,b);
    }
    else if(op == 1){
        return subtract(a,b);
    }
    else if(op == 2){
        return multiply(a,b);
    }
    else{
        return divide(a, b);
    }
}

/*TEST
let arr = [3, 3, 8, 35];
let a = 3;
let b = 3; 
let op = 0;

console.log("Add: " + add(a, b));
console.log("Subtract: " + subtract(a,b));
console.log("Multiply: " + multiply(a,b));
console.log("Divide: " + divide(a,b));
*/