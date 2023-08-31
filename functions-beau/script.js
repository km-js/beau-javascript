//Functions
//A Function is a javascript procedure which is just a set of statements that performs a task or calculate a value
function square(number){
    return number*number;
}

console.log(square(4));//16

//scope refers to visibility of variables
//variables that are defined outside of function block have global scope
//variables that are defined within the function block have local scope
//global variable
var someVar = "Hat";
function myFunc() {
    //local variable
    //if global and local variable have same name, local variable is going to take precedence over global variable
    var someVar = "Shoes";
    console.log(someVar);
}

myFunc();//Shoes
console.log(someVar)//Hat

//Hoisting
//you can call a function before it actually appears in the code
console.log(addSquare(1,3));//10
//Nesting of functions
//When you nest a function within another function, the nested or inner function is private to its containing outer function
function addSquare(a,b) {
    function square(x){
        return x * x; 
    }
    return square(a) + square(b);
}
//square(a);//error
a = addSquare(2, 3);//4+9=13
console.log(a);
b = addSquare(3, 4);
console.log(b);//9+16=25
c = addSquare(4, 5);
console.log(c);//16+25=41

//The inner function forms a closure 
//The inner function can use the arguments and variables of the outer function while the outer function cannot use the arguments and variables of the inner function
