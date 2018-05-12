
// var myFirstStr = "Peter O' Toole";
// document.write(myFirstStr);
// var myFirstStr = 'Peter O' Toole'; 
// var myFirstStr = 'Peter O\' Toole';
// document.write(myFirstStr);
// var myFirstStr = "Hello "Sam"";
var myFirstStr = 'Hello "Sam"';
document.write(myFirstStr);
document.write("<br>");
var myFirstStr = "Hello \"Sam\"";
document.write(myFirstStr);

//Declearing variables
//####Declearing Variables#####
document.write("<br>");
var myFirstVariable = "Hello";
document.write(myFirstVariable);
console.log(window.myFirstVariable);
var myFirstVariable = 54321;
document.write("<br>");
document.write(myFirstVariable);
console.log(myFirstVariable);

//Assigning variables the values of other variables
var string1 = "Hello";
var string2 = "Goodbye";

document.write(string1);
console.log(string1);
document.write("<br>");
document.write(string2);
console.log(string2);


string2 = string1;

document.write(string1);
console.log(string1);
document.write("<br>");
document.write(string2);
console.log(string2);

string1 = "Now for somethong different";

string2 = string1;

document.write(string1);
console.log(string1);
document.write("<br>");
document.write(string2);
console.log(string2);

//undefined value converts to NaN in numeric context

var a;
document.write(a+2); 
console.log(a*2); //Evaluates to NaN
document.write("<br>");



//the null value behaves as 0 in numeric contexts and as false in boolean contexts.

var _01 = null;
document.write(_01*32);
console.log(_01*32);//Evaluates to 0

document.write("<br>");

//Golobal variable


var x = 20;
function first_Func(){
    document.write(x);
    console.log(window.x);
}
first_Func();

//Local variable

function first_Func(){
    return  x = 20;
}


// console.log(x);
// document.write("<br>");


//Variable hoisting

document.write(y);
console.log(y);
var y = 30;


// document.write("<br>");

//Constants

const PI = 3.14;
document.write(PI);
console.log(PI);

document.write("<br>");

//Boolean
var _02 = true;
console.log(_02);

document.write("<br>");

//Data Type Conversion

var _03 = 42;
console.log(_03);
document.write(_03);

document.write("<br>");

var _03 = "Welcome to Javascript tutorial";

console.log(_03);
document.write(_03);//its not showing any error

document.write("<br>");

var _04 = 'The answer is' +"&nbsp;"+ 42;
console.log(_04);
document.write(_04);

document.write("<br>");

var _05 = '37'-7;
console.log(_05);
document.write(_05);

document.write("<br>");

var $06 = "37.66"+7;
console.log($06);
document.write($06);
document.write("<br>");

var $07 = 37+"7";
console.log($07);
document.write($07);
document.write("<br>");
document.write("<br>");
//Converting Strings to numbers

var myString = "56.02 degree centigrade";
var myInt;
var myFloat;

document.write("\"" + myString + "\" is " + parseInt(myString) + " as an Integer" + "<br>");

myInt = parseInt(myString);
document.write("\"" + myString + "\" when converted to an integer equals " + myInt + "<br>");

myFloat = parseFloat(myString);
document.write("\"" + myString + "\" when converted to a floating point number equals " + myFloat);

var $10 = 20;

function myFunc(){
    document.write($10);
}
myFunc();
// document.write($10);

// $10 = 20;

// document.write($10);

var $myVar = null;
var $Myvar ;

document.write($myVar+$Myvar);
console.log($myVar+$Myvar);
document.write("<br>");
num = 20;
if(isNaN(num)){
    document.write("This is not a Number")

}
else{
    document.write("This is Number");
}
