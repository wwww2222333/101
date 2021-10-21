/**
 * Author:  Yan Yang
 * Created:   10.18.2021
 * License: Public Domain
 **/


//Define Variables
myTranspot=["ferrari F8 Spider","school bus","Uber","Lyft"];

myMainRide = {
  make :"ferrari",
  model:"F8 Spider",
  color:"Red",
  year:"2020",
  age : function() {
  return 2019-age;
 }
}

//output
document.writeln("Kinds of transportion I use:",myTranspot,"</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
