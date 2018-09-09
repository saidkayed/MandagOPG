/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("getAllUsers").onclick = function () {

    var showAll = "";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            response.json().then(function (userSelector) {
                userSelector.forEach(function (element) {
                    console.log("hello");
                    showAll += "<tr>";
                    showAll += "<td>" + element.name + "</td>";
                    showAll += "<td>" + element.phone + "</td>";
                    showAll += "</tr>";
                    console.log("hello2");
                });
                document.getElementById("tdata").innerHTML = showAll;
            })
                .catch(function () {
                    // This is where you run code if the server returns any errors
                });
        });
};

document.getElementById("submit").onclick = function () {

    var userid = document.getElementById("getUser").value;
    console.log("hello");

    var user = "";
    console.log("hello1");

    fetch("https://jsonplaceholder.typicode.com/users/" + userid)

        .then(function (response) {
            console.log("hello2");
            console.log(userid);
            response.json().then(function (userSelector) {
                console.log("hello3");
                user += "<tr>";
                user += "<td><>" + userSelector.name + "</td>";
                user += "<td>" + userSelector.phone + "</td>";
                user += "<td>" + userSelector.address.street + "</td>";
                user += "<td>" + userSelector.address.city + "</td>";
                user += "<td>" + userSelector.address.zipcode + "</td>";
                user += "<td>" + userSelector.address.geo.lat + "</td>";
                user += "<td>" + userSelector.address.geo.lng + "</td>";
                user += "</tr>";
                console.log("hello4");

                document.getElementById("tdata").innerHTML = user;
            })
                .catch(function () {
                    // This is where you run code if the server returns any errors
                });
        });
};