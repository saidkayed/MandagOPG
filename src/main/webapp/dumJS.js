/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];



// add boy and girl + refresh section
document.getElementById("addboy").onclick = function(){
       var addb = document.getElementById("newboy").value;
       boys.push(addb);
       console.log(boys);
       
       refresh_list();
      
};

document.getElementById("addgirl").onclick = function(){
       var addg = document.getElementById("newgirl").value;
       girls.push(addg);
       console.log(girls);
       
       refresh_list();
       

};

window.onload= function(){
    var all = boys.concat(girls);
       document.getElementById("boys").innerHTML  = boys.join("<br>");
       document.getElementById("girls").innerHTML = girls.join("<br>");
       document.getElementById("all").innerHTML = all.join("<br>");
    };
    
    function refresh_list(){
        var all = boys.concat(girls);
      document.getElementById("boys").innerHTML  = boys.join("<br>");   
       document.getElementById("girls").innerHTML  = girls.join("<br>");
       document.getElementById("all").innerHTML = all.join("<br>");
    }
    
    
    
    var first_check = false;  
    var last_check = false;
    
    
    //remove boys and girls section
    document.getElementById("first").onclick = function(){
      first_check = true;
      last_check = false;
        if(first_check){
        document.getElementById("removeboy").onclick = function(){
          boys.shift();
          console.log(boys + " first");
            refresh_list();
      };
       document.getElementById("removegirl").onclick = function(){
          girls.shift();
          console.log(girls + " first");
            refresh_list();
      };
  }
    };
    
    document.getElementById("last").onclick = function(){
      first_check = false;
      last_check = true;
        if(last_check){   
        document.getElementById("removeboy").onclick = function(){
          boys.pop();
          console.log(boys + "last");
            refresh_list();
      
      };
      
       document.getElementById("removegirl").onclick = function(){
          girls.pop();
          console.log(girls + " last");
            refresh_list();
      
      };
  }
    };
    
    document.getElementById("reverse").onclick = function(){
       allreverse = boys.concat(girls).reverse();
       document.getElementById("all").innerHTML = allreverse.join("<br>");
       console.log(allreverse);
        
    };
    
    document.getElementById("sort").onclick = function(){
    
    all_Sort = boys.concat(girls).sort(function(a,b){
        var x = a.toLowerCase(),y = b.toLowerCase();
        
        if (x < y){ return -1;}
        if (x > y){ return 1;}
        return 0;
    });
    
   document.getElementById("all").innerHTML = all_Sort.join("<br>");
      
        
    };
    
    
     
 
