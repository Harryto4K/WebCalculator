const inputCal = document.getElementById("input-cal");
const numberButtons = document.getElementsByClassName("n-buttons");
const buttons = document.getElementsByClassName("buttons"); 
const cero = document.getElementById("0");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

for (let n=0; n<numberButtons.length; n++) {
    numberButtons[n].onclick = function() {
        inputCal.value += numberButtons[n].innerHTML; 
    } 
}

for(let n=0; n<buttons.length; n++) {
    buttons[n].onclick = function() {
        inputCal.value += buttons[n].innerHTML; 
    }
}

cero.onclick = function() {
    inputCal.value += cero.innerHTML;
}

clear.onclick = function() {
    inputCal.value = "";
}

equal.onclick = function() {
    try {
        inputCal.value = eval(inputCal.value); 
    } catch (error) {
        inputCal.value = error;
    }
}

