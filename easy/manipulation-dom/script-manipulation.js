//dobavljanje elem
//queryselect-vraca prvi sa html oznakom,all-sve  sa tim html oznakom,getelembyid-odredjeni element

let allBtns = document.querySelectorAll(".button");
let btnFirst = document.querySelector(".button");
let specButton = document.getElementById("btnSpec");

document.getElementById("no").textContent = "Nou";

//izmena teksta/sadryaja
//innerhtml ili textcontent, ovo drugo je accessability
//document.getElementById("demo").innerHTML = "I have changed!";
btnFirst.textContent = "dd";

//dodavanje/uklanjanje klasa
