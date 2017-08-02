"use strict";

var display = document.getElementById("display");
var op=false; 



function logNumber(value) {
  
  if(op) {clearDisplay(); op=false;} 
  display.value += value;
}

function cleanNumber(value) {
  var res = "";
  console.log(value);
  for (var i = 0; i < value.length; i++) {
    var ch=value.charAt(i);
    if (i === 0  && ch != "0") {res += ch; console.log("0:"+ch)}
    if (i > 0 && ch == "0" && value.charAt(i-1) != " ") { res += ch;}
    if (i > 0 && ch != "0") { res += ch;}
  
   console.log('-- '+res); 
  }
  return res;
}

function evalCalc() {
  var value = cleanNumber(display.value);
  console.log(value);
  var result = eval(value);
  display.value = result;
  op=true;
console.log(result);
}


function clearDisplay() {
  display.value = "";
}


