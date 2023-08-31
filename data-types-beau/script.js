//Data Types
//There are 7 data types

//Boolean
var data = true;
if(data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame.");
}

//null
var n = null;
console.log(n * 32);//0

//undefined
//variable that has not been declared or has been declared but not been assigned a value
var a;
console.log(a);//undefined
console.log(a + 2);//NaN

//Number
var num = 3.6;
var bar = 6.4;
console.log(num + bar);

//String
var fName = "Beau";
console.log("Hi! My name is " + fName);

//Symbol
//whose instances are unique and immutable
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);//false
console.log(String(sym1) === String(sym2));//true

//Object
//Object is a collection of properties
//Property is an association between a name or a key and value
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);//Ford