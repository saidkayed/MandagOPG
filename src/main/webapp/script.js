/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//The 3 clockhands, found by id
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//will eventually contain the degrees the hands will move
let hourRotation = 0;
let minuteRotation = 0;
let secondRotation = 0;

  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

    //converts time into initial deg position
  let hrPosition = (hr * 360/12) + (min *(360/60)/12);
  let minPosition = (min * 360/60) + (sec * (360/60)/60);
  let secPosition = sec * 360/60;


function runTheClock()
{
//moves hands and solves return to zero problem
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;

//style.transform is what moves the hand by xPosition degrees
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}
//SetInterval(function,time) runs the function every defined time period
var interval = setInterval(runTheClock, 1000);
