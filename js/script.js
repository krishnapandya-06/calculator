function appendValue(value){
 const display = document.getElementById("display");
 display.value += value;
}

function clearScreen() {
 const display = document.getElementById("display");
 display.value = "";
}

function cal() {
 const display = document.getElementById("display");
 try {
   display.value = eval(display.value);
 } catch (error) {
   display.value = "error";
 }
}

function deleteLastDigit(){
 const display = document.getElementById("display");
 display.value = display.value.slice(0, -1);
}