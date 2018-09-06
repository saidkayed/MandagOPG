/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

//Timer array [minutes,seconds,hundreths,thousandths]
var timer = [0, 0, 0, 0];
//Used to stop timer
var interval;
var timerRunning = false;

//Array holding the strings to use in speed test
var stringArray = ["Good luck my friend!", 
    "You will never get this one!", 
    "What have you done? This is not right!", 
    "Can you do it evn with spel errrors?", 
    "Which witch had a watch which was a witch watch?", 
    "English is tough, it can be taught with tough thought though",
    "!&&¤(=!=(¤&%!%#/(",
    "Im running out of ideas for test strings",
    "Just two more strings to make up, you can do it!",
    "Finally the last string is done, im so relieved"];
        



//Add a leading zero to numbers 9 or below
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

//Match the text entered with the provided text
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    //If the entered text matches the original text, we make the testWrapper border green, if its correct thus far blue, if wrong red
    if (textEntered == originText) {
        //stops the timer when the test is done
        clearInterval(interval);
        //green
        testWrapper.style.borderColor = "#429890";
    } else {
        //blue
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            //red
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}



//Run a standard minute/second/hundreths timer
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    //Math.floor to avoid decimals
    //takes the thousandths, divides into seconds, and finally into minutes etc.
    timer[0] = Math.floor((timer[3] / 100) / 60);
    //same principle, but we have to make sure the timer[1] resets when a full minute occurs
    timer[1] = Math.floor((timer[3] / 100 - (timer[0] * 60)));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

//Start the timer
function start() {
    let textEnteredLength = testArea.value.length;
    //As soon as the textarea has input, the timer starts
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        //Interval, every 10 millisecs
        interval = setInterval(runTimer, 10);
    }
}

//reset everything
function reset() {
    //Stops the timer
    clearInterval(interval);
    interval = null;
    //Sets timer to 0
    timer = [0,0,0,0];
    timerRunning = false;
    //Clear text area
    testArea.value = "";
    //Set timer to 0 in frontend
    theTimer.innerHTML = "00:00:00";
    //Set box border to grey;
    testWrapper.style.borderColor = "grey";
    
    //Chooses a new string
    stringChooser(stringArray);
}


//Sets up a new string
function stringChooser(stringArray){
    
    var rand = Math.floor((Math.random() * 10 +0));
    document.querySelector("#origin-text p").innerHTML = stringArray[rand];
    originText = stringArray[rand];
    
}

//Event listeners for keyboard input and the reset
//When a key is pressed, start function is called
testArea.addEventListener("keypress", start, false);
//When a key is released, spell check is called
testArea.addEventListener("keyup", spellCheck, false);
//When the reset button is clicked, timer is reset
resetButton.addEventListener("click", reset, false);