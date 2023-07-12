let screenOp = document.querySelector(".operation");
let screenVal = document.querySelector(".input");
let btns = document.querySelectorAll(".calc-btn");
let opSet = false;

btns.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("op")){
            setOperation(btn.innerHTML);
        }
        else if(btn.classList.contains("equal")){
            setOp();
        }
        else{setScreenVal(btn.innerHTML);}
    });
});

function setScreenVal(input){
    if(screenVal.innerHTML == "0" || opSet){
        screenVal.innerHTML = input;
        opSet = false;
    }
    else if(screenVal.innerHTML.length < 9){
        screenVal.innerHTML += input;
    }
}

function setOperation(input){
    setOp = false;
    if(input == "AC"){
        screenOp.innerHTML = "0";
        screenVal.innerHTML = "0";
    }
    else if(input == "←"){
        if(screenVal.innerHTML != "0"){
            if(screenVal.innerHTML.length < 2){
                screenVal.innerHTML = "0";
            }
            else{
                screenVal.innerHTML = screenVal.innerHTML.substring(0, screenVal.innerHTML.length-1);
            }
        }
    }
    else if(input == "←"){
        if(screenVal.innerHTML != "0"){
            if(screenVal.innerHTML.length < 2){
                screenVal.innerHTML = "0";
            }
            else{
                screenVal.innerHTML = ("-" + screenVal.innerHTML);
            }
        }
    }
    else{
        if(screenOp.innerHTML == "0"){
            screenOp.innerHTML = (screenVal.innerHTML + " " + input + " ");
        }
        else{
            screenOp.innerHTML += (screenVal.innerHTML + " " + input + " ");
        }
        opSet = true;
    }
    
}

function setOp(){
    screenOp.innerHTML += screenVal.innerHTML;
    let total = operate(screenOp.innerHTML);
    screenOp.innerHTML += (" = " + total);
}

//Math

function operate(valStr){
    let vals = valStr.split(" ");
    let total = Number(vals[0]);
    for(let i = 1; i < vals.length; i+=2){
        if(vals[i] == "+"){
            total += Number(vals[i+1]);
        }
        else if(vals[i] == "-"){
            total -= Number(vals[i+1]);
        }
        else if(vals[i] == "*"){
            total *= Number(vals[i+1]);
        }
        else if(vals[i] == "÷"){
            if(vals[i+1] != "0"){
                total /= Number(vals[i+1]);
            }
        }
    }
    return total.toFixed(6);
}

//Close window
document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector(".window").style.display = "none";
});