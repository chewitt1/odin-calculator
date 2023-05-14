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

function operate(opVals){
    let a = Number(opVals[0]);
    let op = opVals[1];
    let b = Number(opVals[2]);
    if(op == "+"){
        return add(a,b);
    }
    else if(op == "-"){
        return subtract(a,b);
    }
    else if(op == "*"){
        return multiply(a,b);
    }
    else{
        return divide(a, b);
    }
}

function setScreen(val){
    let text = document.querySelector("#screen-text");
    if(val == "+" || val == "-" || val == "*" || val == "/"){
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

function getOutput(){
    let text = document.querySelector("#screen-text");
    let opVals = (text.innerHTML).split(" ");
    text.innerHTML = operate(opVals);
}

function setInput(e){
    val = this.innerHTML;
    if(val == "="){
        getOutput();
    }
    else if(val == "CLR"){
        let text = document.querySelector("#screen-text");
        text.innerHTML = "0";
    }
    else{
        setScreen(val);
    }
    
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", setInput));

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