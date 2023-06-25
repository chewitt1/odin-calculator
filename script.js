/*<<<--- THEME --->>>*/
let start = document.querySelector(".start");
let menuShown = false;
let tabOpen = true;

start.addEventListener("click", () =>{
    let menu = document.querySelector(".menu");
    if(!menuShown){
        menu.style.bottom = "24px";
    }
    else{
        menu.style.bottom = "-300px";
    }
    menuShown = !menuShown;
});


let currTab = document.querySelector(".tab-curr");
let currWindow = document.querySelector(".window");
let minimize = document.querySelector("#minimize");
let tabs = document.querySelectorAll(".tab");
let tabClose = document.querySelector("#close");
let calcOpen = document.querySelector("#calculator-open");


function minimizeTab(){
    currWindow.classList.remove("window-maximize");
    currWindow.classList.remove("window-close");
    currWindow.classList.add("window-minimize");
    currTab.classList.remove("tab-curr");
    tabOpen = false;
}
minimize.addEventListener("click", () => {
    if(tabOpen){
        minimizeTab();
    }
});

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if(tabOpen){
            minimizeTab();
        }
        else{
            currWindow.classList.remove("window-minimize");
            currWindow.classList.remove("window-close");
            currWindow.classList.add("window-maximize");
            tab.classList.add("tab-curr");
            tabOpen = true;
        }
    });
});

tabClose.addEventListener("click", () => {
    if(tabOpen){
        currWindow.classList.remove("window-maximize");
        currWindow.classList.remove("window-minimize");
        currWindow.classList.add("window-close");
        currTab.style.display = "none";
        tabOpen = false;
    }
});

calcOpen.addEventListener("click", () => {
    if(!tabOpen){
        currWindow.classList.remove("window-maximize");
        currWindow.classList.remove("window-minimize");
        currWindow.classList.remove("window-close");
        currWindow.classList.add("window-open");
        currTab.style.display = "block";
        tabOpen = false;
    }
});

/*<<<--- CALCULATOR --->>>*/

let screenVal = document.querySelector(".calc-screen");
let inputs = document.querySelectorAll(".calc-input");
let valSaved = false;
let vals = [];
let ops = [];


function calculate(valA, valB, op){
    let a = Number(valA);
    let b = Number(valB);
    if(op == "+"){
        return (a+b);
    }
    else if(op == "-"){
        return (a-b);
    }
    else if(op == "÷"){
        return (a/b);
    }
    else if(op == "*"){
        return (a*b);
    }
}

function setScreen(val){
    if(valSaved){
        screenVal.innerHTML = "0";
        valSaved = false;
    }
    if(screenVal.innerHTML != "0"){
        screenVal.innerHTML += val;
    }else{
        screenVal.innerHTML = val;
    }
}
function setOperation(op){
    vals.push(screenVal.innerHTML);
    ops.push(op);
    valSaved = true;
}
function getCalculation(){
    vals.push(screenVal.innerHTML);
    if(vals.length <= ops.length || ops.length == 0){
        console.log("WRONG");
    }
    else{
        console.log(calculate(vals[0], vals[1], ops[0]));
    }
    
}

inputs.forEach((input) => {
    input.addEventListener("click", ()=>{
        val = input.innerHTML;
        if( val == "="){
            getCalculation();
        }
        else if(val == "←" || val == "+/-" || val == "÷" || val == "*" || val == "-" || val == "+"){
            setOperation(val)
        }
        else{
            setScreen(val);
        }
    });
});

