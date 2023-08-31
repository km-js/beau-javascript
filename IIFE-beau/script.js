// Immediately Invoked Function Expression
//It is a javascript function that runs as soon as it is defined 

(function(){
    console.log("My favourite number is 3");
})();

//This function has no name and is not stored in a variable
//the first closing parentheses makes the function an expression
//and the last two paranthese tells the javascript to invoke or call this anonymous function immediately hence the name immediately invoked function expression
//it's just a function that runs right away

//we can also create a named immediately invoked function expression and we can pass in arguments
(favNumber = function (num = 3){
    console.log("My favourite number is " + num);
})();

favNumber(5);//My favourite number is 5

//The most popular use of IIFE is to avoid declaring variables in the global scope and to create closures
//many javascript libraries use this technique so that variable names don't conflict between the library and programs that use the library

var a = 2;

//closure
(function(){
    var a = 3;
    console.log(a);//3
})();

console.log(a);//2

//because javascript has function level scope
// all the variables declared in anonymous function are local variables and therefore can't be accessed outside the anonymous function

//Es6 we can use let instead of iife
//let and const variables is blocked scoped, as long as they are placed in a block, they will not pollute the global name space

let b = 2;

{
    let b = 3;
    console.log(b);//3
}
console.log(b);//2

//Before Es6, all variables had global scope but now with const and let you can have different scopes so you don't always need iife as much as you used to