let valA = 0;
let valB = 0;
let valOp = "+";

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

function operate(){
    if(valOp == "+"){
        return add(valA,valB);
    }
    else if(valOp == "-"){
        return subtract(valA,valB);
    }
    else if(valOp == "*"){
        return multiply(valA,valB);
    }
    else{
        return divide(valA, valB);
    }
}

function setScreen(val){
    let text = document.querySelector("#screen-text");
    if(val == "+" || val == "-" || val == "*" || val == "/"){
        valA = Number(text);
        valOp = val;
        text.innerHTML += (" " + val + " ");
    }
    else{
        if(text.innerHTML == "0"){
            text.innerHTML = val;
        }
        else{
            text.innerHTML += val;
        }
    }
}

function getInput(e){
    val = this.innerHTML;
    if(val == "="){
        console.log("Yerr");
    }
    else{
        setScreen(val);
    }
    
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", getInput));

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