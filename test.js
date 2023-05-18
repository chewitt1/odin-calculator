/*Globals*/
let operations = [];
let vals = [];
let opSet = false;
let i = 0;
let decimal = false;
let done = false;

/*Functions*/

/*Visuals & Setters*/

function reset(){
    vals = [];
    operations = [];
    opSet = false;
    done = false;
}

function setCtrl(val){
    if(val == "AC"){
        $("#calc").html("0");
        reset();
    }
    else if(!done){
        if(opSet){
            operations.pop();
            opSet = false;
            resetOpBg();
        }
        let curr = $("#calc").text();
        if(val == "←"){
            if(curr.length == 1){
                $("#calc").text("0");
            }
            else{
                $("#calc").text(curr.substring(0, curr.length-1));
            }
            
        }
        else if(val == "+/-"){
            if((curr != "0") && (curr.substring(0,1) != "-")){
                curr = "-" + curr;
                $("#calc").text(curr);
            }
        }
    }
}

function setVal(val){
    opSet = false;
    let text = $("#calc").text();
    if (val == "."){
        if(!decimal){
            text += val;
            $("#calc").text(text)
            decimal = true;
        }
    }
    else if(text == "0" || text == "You can't divide by 0..."){
        $("#calc").text(val);
    }
    else if((vals.length > 0) && operations.length == vals.length){
        $("#calc").text(val);
    }
    else{
        text += val;
        $("#calc").text(text);
    }
}

function resetOpBg(){
    let ops = document.querySelectorAll(".op");
    ops.forEach(op => op.classList.remove("opClick"));
}

function setOp(elem){
    let val = elem.innerHTML;
    if(!opSet){
        resetOpBg();
        let text = $("#calc").text();
        vals.push(Number(text));
        if(val == "="){
            getResult();
        }
        else{
            operations.push(val);
            elem.classList.add("opClick");
        }
        
        opSet = true;
    }
}

function setScreen(e){
    let type = this.classList[0];
    
    if(!done){
        if(type == "num"){
            setVal(this.innerHTML);
        }
        else if(type == "op"){
            setOp(this);
        }
        else if(type == "ctrl"){
            setCtrl(this.innerHTML);
        }
    }
    else if(type == "ctrl"){
        setCtrl(this.innerHTML);
    }
}

/*Calculations*/
function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

function operate(result, num){
    if(result == "You can't divide by 0..."){
        return result;
    }
    if(result != undefined){
        let op = operations[i++];

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
                let text = document.querySelector("#calc");
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
function getResult(){
    $("#calc").text(vals.reduce(operate));
    done = true;
}

/*Buttons Listeners*/
$(document).ready(function(){
    let ctrls = document.querySelectorAll(".ctrl");
    ctrls.forEach(ctrl => ctrl.addEventListener("click", setScreen));
    let ops = document.querySelectorAll(".op");
    ops.forEach(op => op.addEventListener("click", setScreen));
    let nums = document.querySelectorAll(".num");
    nums.forEach(num => num.addEventListener("click", setScreen));

});