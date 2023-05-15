let vals = [];
let opVals = [];
let i = 0;
let done = false;
let decimal = false;

function fixedIt(val){
    if(val % 1 != 0){
        return parseFloat(val.toFixed(6));
    }
    return val;
}

function add(a, b){
    return fixedIt(a + b);
}

function subtract(a, b){
    return fixedIt(a - b);
}

function multiply(a, b){
    return fixedIt(a * b);
}

function divide(a, b){
    return fixedIt(a / b);
}

function reset(){
    vals = [];
    opVals = [];
    i = 0;
}

function operate(result, num){
    if(result == "You can't divide by 0..."){
        return result;
    }
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
            if(num == 0){
                let text = document.querySelector("#screen-text");
                text.classList.add("fontSmall");
                reset();
                return("You can't divide by 0...");
                
            }
            else{
                return divide(result, num);
            }
            
        }
    }
    return num;
}

function off(){
    let mess = document.querySelector("#off-message");
    mess.classList.remove("no-display");
}

function setScreen(val){
    let text = document.querySelector("#screen-text");
    if(isNaN(val)){
        if(val == "(^_^)"){
            text.innerHTML = "(^_^) Boop! ";
            reset();
            off();
        }
        else if (val == "."){
            if(!decimal){
                text.innerHTML += val;
                decimal = true;
            }
        }
        else{
            let texts = text.innerHTML.split(" ");
            vals.push(Number(texts[texts.length-1]));
            opVals.push(val);
            text.innerHTML += (" " + val + " ");
            decimal = false;
        }
    }
    else if(text.innerHTML != "0" && done == false){
        text.innerHTML += val;
    }
    else{
        done = false;
        text.innerHTML = val;
    }
    
}

function getOutput(){
    let text = document.querySelector("#screen-text");
    let texts = text.innerHTML.split(" ");
    if(!isNaN(texts[texts.length-1]) && (texts[texts.length-1] != "")){
        vals.push(Number(texts[texts.length-1]));
    }
    if(vals.length <= opVals.length){
        text.innerHTML = "ERROR";
    }
    else{
        let result = vals.reduce(operate);
        text.innerHTML = result;
        done = true;
    }
    reset();
}

function setInput(e){
    let text = document.querySelector("#screen-text");
    if(text.innerHTML == "ERROR" || text.innerHTML == "You can't divide by 0...") {
        val = this.innerHTML;
        if(val == "CLR"){
            reset();
            done = false;
            let text = document.querySelector("#screen-text");
            text.classList.remove("fontSmall");
            text.innerHTML = "0";
        }
    }
    else if(text.innerHTML != "" && text.innerHTML != "(^_^) Boop! "){
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
            off();
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