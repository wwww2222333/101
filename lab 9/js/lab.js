/**
 * Author:    Tatum Going
 * Created:   10.31.2021
 *
 * License: Public Domain.
 **/

outputEl = document.getElementById("output");
//new element
new1El = document.createElement("p");
new1El.innerHTML= "By Yan Yang.";
new1El.setAttribute("style", "font-family: Impact");

new2El = document.createElement("p");
new2El.innerHTML= "Hi Here.";
new2El.setAttribute("style", "font-size: 250%");

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
