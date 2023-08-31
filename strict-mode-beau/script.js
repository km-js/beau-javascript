//Strict Mode
//It tightens the rules for certain behaviours
//These restrictions keep code safer and help javascript engines perform optimizations

"use Strict";

function myFunction(){
    "use strict"
    y = 3.14;//error
}

//CONVERTING MISTAKES INTO ERRORS
//In strict mode, you have to first declare a variable with var,let or constt keyword before you can assign a value to it

//In strict mode, deleting a variable is not allowed
var x = 3.14;
delete x;//error

//In strict mode, any assignment to a non-writable property, getter only property, non-existing property/variable/object will throw an error

//Non-writable property
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;//error

//Getter only property
var obj = {get x() {return 0}};
obj.x = 3.14;//error

delete Object.prototype;//error

function sum(a,a,c){
    'use strict';
    return a + b + c;//error
}

//WITH AND EVAL CHANGES

//the with statement extends the scope chain for a statement 
//strict mode prohibits with compeletely
//The problem with with is that any name inside the block might map either to property or the object passed to it or to a variable in surrounding or even global scope at runtime, it's impossible to know beforehand
//when we use with, we're going to add the scope to whatever we pass in as parameter to all the code within thw with block
var x = 17;
with(obj){
    x;//Is this var x or obj x?
}

//In strict mode, eval does not introduce new variables into the surrounding scope
//In normal mode, if you have eval(var x), it will introduce a variable x into surrounding function or global scope
//In strict mode, eval creates variables only for the code being evaluated, var x is only going to exist into the little section of code
eval("var x;")

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);//true
console.assert(evalX === 42);//true

//Securing Javascript
//In browsers, it is not possible to reference the window object through this inside a strict mode function 
//Strict mode makes it impossible to easily access the most recently called function and the arguments used to run a function