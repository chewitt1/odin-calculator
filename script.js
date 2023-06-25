/*<<<--- THEME --->>>*/
let start = document.querySelector(".start");
let menuShown = false;

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