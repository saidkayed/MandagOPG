/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var calculate = function(){
// var val = event.target.innerText;
//  document.getElementById("display").innerHTML += val;
//};




var tal1 = "";
var tal2 = "";
var val;
var val2;
var turn = true;
var math;
var sum = 0;
function display() {

    if (turn) {
        document.getElementById("display").innerHTML = 0;
        val = event.target.innerText;
       all = document.getElementById("display").innerHTML += val;
    }



    
document.getElementById("plus").onclick = function () {
turn = false;  
tal1 = all;
document.getElementById("display").innerHTML =""; 
math = 1;
};
document.getElementById("minus").onclick = function () {
    turn = false;
tal1 = all;
document.getElementById("display").innerHTML =""; 
math = 2;
};
document.getElementById("gange").onclick = function () {
    turn = false;
tal1 = all;
document.getElementById("display").innerHTML =""; 
math = 3;
};
document.getElementById("divi").onclick = function () {
    turn = false;
tal1 = all;
document.getElementById("display").innerHTML =""; 
math = 4;
};



 
if(!turn){

        val2 = event.target.innerText;
       
       all2 = document.getElementById("display").innerHTML += val2;
tal2 = all2;
}
   
    document.getElementById("summen").onclick = function () {
        
        
   switch(math){
       case 1:
                sum = parseFloat(tal1) + parseFloat(tal2.slice(1,tal2.length));
                document.getElementById("display").innerHTML = sum;
                break;
            case 2:
       sum = parseFloat(tal1) - parseFloat(tal2.slice(1,tal2.length));
      
                document.getElementById("display").innerHTML = sum;
                break;
       
   case 3:
       sum = parseFloat(tal1) * parseFloat(tal2.slice(1,tal2.length));
       document.getElementById("display").innerHTML = sum;
       break;
   case 4:
        sum = parseFloat(tal1) / parseFloat(tal2.slice(1,tal2.length));
       document.getElementById("display").innerHTML = sum;
       break;
   }
  

        console.log(tal2);
        console.log(tal2.slice(1,tal2.length),"størrelsen");  
        console.log(tal1,"størrelsen på tal1");  
       console.log(sum);
       console.log(5-5);
    };
}













