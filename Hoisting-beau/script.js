//Hoisting

//Function Declarations and Variable Declarations are processed before any code is executed
//So, declaring a variable or function anywhere in the code is equivalent to declaring it at the top 
//This also means functions can be used before they're declared
//This behaviour is called hoisting
//Variable Definations are when you assign a value to a variable
//these are not hoisted to the top

console.log(notDeclared); //notDeclared is not defined

console.log(definedLater);//undefined
var definedLater;
definedLater = "I am defined"
console.log(definedLater);//I am defined

console.log(definedSimultaneously);//undefined
var definedSimultaneously = "I am defined"
console.log(definedSimultaneously);//I am defined

//functions are also hoisted to the top
doSomethingElse();//I did it
function doSomethingElse(){
    console.log('I did it');
}

functionVar();//functionVar is not a function
functionVar = function(){
    console.log("I did it!");
}

//you must declare all your variables to the top of your function scope, define the variables before you use them
//define your function at the bottom of your scope to keep them out of the way