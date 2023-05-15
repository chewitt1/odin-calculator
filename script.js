let vals = [];
let opVals = [];
let i = 0;
let done = false;

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


function operate(result, num){
    if(result != undefined){
        let op = opVals[i++];

        if(op == "+"){
            return add(result,num);
        }
        else if(op == "-"){
            return subtract(result,num);
        }
        else if(op == "*"){
            return multiply(result,num);
        }
        else{
            return divide(result, num);
        }
    }
    return num;
}

function reset(){
    vals = [];
    opVals = [];
    i = 0;
}

function setScreen(val){
    let text = document.querySelector("#screen-text");
    if(isNaN(val)){
        if(val == "(^_^)"){
            text.innerHTML = "(^_^) Boop! ";
            reset();
        }
        else{
            let texts = text.innerHTML.split(" ");
            vals.push(Number(texts[texts.length-1]));
            opVals.push(val);
            text.innerHTML += (" " + val + " ");
        }
    }
    else if(text.innerHTML != "0"){
        text.innerHTML += val;
    }
    else{
        text.innerHTML = val;
    }
    
}

function getOutput(){
    let text = document.querySelector("#screen-text");
    let texts = text.innerHTML.split(" ");
    vals.push(Number(texts[texts.length-1]));
    let result = vals.reduce(operate);
    text.innerHTML = result;
    done = true;
    reset();
}

function setInput(e){
    let text = document.querySelector("#screen-text");
    if(text.innerHTML != ""){
        val = this.innerHTML;
        if(val == "="){
            getOutput();
        }
        else if(val == "CLR"){
            reset();
            let text = document.querySelector("#screen-text");
            text.innerHTML = "0";
        }
        else if (val == "OFF"){
            reset();
            text.innerHTML = "";
        }
        else{
            setScreen(val);
        }
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