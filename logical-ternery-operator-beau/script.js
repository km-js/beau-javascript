//Logical Operators && Short Circuit Evaluation

//AND: && OR: ||

num = 18;

if(num > 5){
    if(num < 10){
        console.log("Unicycle!")
    }
}
//or
if(num > 5 && num < 10 ){
    console.log("Unicycle!")
}

if(num > 5 || num < 10){
    console.log("Unicycle")
}

//Short Circuit Evaluation
//once it found out the first conndition is false, it don't need to evaluate the second condition
if( 4 > 5 && 5 > 6 ){
console.log("hi")
} else {
    console.log("no")
}

var test = true;
var isTrue = function(){
    console.log("Test is true.");
};
var isFalse = function(){
    console.log('Test is false')
};

if(test){
    isTrue();
}
//or
( test && isTrue() );

test = false;
if(!test){
    isFalse();
}
//or
( test || isFalse());

function theSameOldFoo(name){
    name = name || 'Bar';
    console.log("My best friend's name is " + name);
}

theSameOldFoo();//My best friend's name is Bar
theSameOldFoo('Beau');//My best friend's name is Beau

//Ternary Operator
//shortcut for if statement
//condition ? expr1 : expr2

var age = 19;

if(age >= 18){
    console.log("You are an adult!");
}else{
    console.log("You are a kid");
}

console.log((age>=18) ? "You are an adult!" : " You are a kid");

//multiline
age > 18 ? (
    console.log("OK, you can go"),
    stop = false
) : (
    console.log("Sorry, you are too much young!"),
    stop = true
);

//ternary operator inside ternary operator
var firstCheck = false,
secondCheck = false,
access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log(access);//Access granted