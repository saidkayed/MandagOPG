/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const clearButton = document.querySelector("#clear");
//val = display
var val = "";

//Writes in the display, checks if dispay is 0 (calc has been reset) save first 0 if present.
var display = function(){
    if(event.target.innerText !== "="){
    
    if(document.getElementById("display").innerText == 0){
    val = event.target.innerText;
    document.getElementById("display").innerText = val;
    val = document.getElementById("display").innerText;
    } else {
    val = event.target.innerText;
    document.getElementById("display").innerText += val;
    val = document.getElementById("display").innerText;
    }
    }
};

//Calls when "=" is pressed, splits the display string based on regexp(-*/+) and calculates
var calculate = function(){
    var res = val.split(new RegExp('[-/+*]', 'g'));
    //check operator used in display, and calculate based on it
    if(val.includes("/")) {
        document.getElementById("display").innerText = "";
        document.getElementById("display").innerText = res[0] / res[1];
    } else if(val.includes("+")) {
        var num1 = parseFloat(res[0]);
        var num2 = parseFloat(res[1]);
        document.getElementById("display").innerText = num1 + num2;
    } else if(val.includes("-")) {
        document.getElementById("display").innerText = "";
        document.getElementById("display").innerText = res[0] - res[1];
    } else{
        document.getElementById("display").innerText = "";
        document.getElementById("display").innerText = res[0] * res[1];
    }
};

//Resets the calculater, leaves a 0
var clear = function(){
    val = 0;
    document.getElementById("display").innerText = val;
   
};
//Eventlistener for clear button
clearButton.addEventListener("click", clear, false);