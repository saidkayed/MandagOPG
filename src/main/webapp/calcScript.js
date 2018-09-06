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
// VI BEGYNDER MED DET FØRSTE  INPUT SOM VI INDTASTER IND
    if (turn) {
        //document.getElementById("display").innerHTML = 0; 
        val = event.target.innerText;
        all = document.getElementById("display").innerHTML += val;
    }



    // HER FINDER DEN UD AF, HVORDAN VI SKAL REGNE VORES REGNESTYKKE, VED AT VI TRYKKER PÅ EN AF DE FIRE VALGMULIGHEDER
    // PÅ LOMMEREGNEREN. DER GIVES EN UNIKT "MATH" TAL SOM VI SKAL BRUGE TIL VORES SWITCH.
    document.getElementById("plus").onclick = function () {
        turn = false;
        tal1 = all;
        document.getElementById("display").innerHTML = "";
        math = 1;
    };
    document.getElementById("minus").onclick = function () {
        turn = false;
        tal1 = all;
        document.getElementById("display").innerHTML = "";
        math = 2;
    };
    document.getElementById("gange").onclick = function () {
        turn = false;
        tal1 = all;
        document.getElementById("display").innerHTML = "";
        math = 3;
    };
    document.getElementById("divi").onclick = function () {
        turn = false;
        tal1 = all;
        document.getElementById("display").innerHTML = "";
        math = 4;
    };



    // NÅR VI ER FÆRDIG MED AT TASTE DET FØRSTE INPUT KOMMER VI VIDERE HER, HVOR VI SKAL TASTE NR 2 INPUT
    if (!turn) {

        val2 = event.target.innerText;

        all2 = document.getElementById("display").innerHTML += val2;
        tal2 = all2;
    }
    //NÅR VI ER FÆRDIG OG TRYKKER "=" PÅ LOMMEREGNERNEN, BEGYNDER DEN AT REGNE FOR DIG.
    document.getElementById("summen").onclick = function () {

        //HER BENYTTER VI DET UNIKKE MATH NUMMER.
        switch (math) {
            case 1:
                sum = parseFloat(tal1) + parseFloat(tal2.slice(1, tal2.length));
                document.getElementById("display").innerHTML = sum;
                turn = true;
                break;
            case 2:
                sum = parseFloat(tal1) - parseFloat(tal2.slice(1, tal2.length));

                document.getElementById("display").innerHTML = sum;
                turn = true;
                break;

            case 3:
                sum = parseFloat(tal1) * parseFloat(tal2.slice(1, tal2.length));
                document.getElementById("display").innerHTML = sum;
                turn = true;
                break;
            case 4:
                sum = parseFloat(tal1) / parseFloat(tal2.slice(1, tal2.length));
                document.getElementById("display").innerHTML = sum;
                turn = true;
                break;

            default :
                sum = 0;
                document.getElementById("display").innerHTML = sum;
                turn = true;
                break;
            case 0:
                sum = 0;
                document.getElementById("display").innerHTML = sum;
                turn = true;     
                break;
        }

// TEST
        console.log(tal2);
        console.log(tal2.slice(1, tal2.length), "størrelsen");
        console.log(tal1, "størrelsen på tal1");
        console.log(sum);
        console.log(5 - 5);
    };
}













