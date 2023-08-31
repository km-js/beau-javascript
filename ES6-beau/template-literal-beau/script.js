//Template literals
//Template literals are string literals allowing embedded expressions
//Template Literals are enclosed by back ticks ``

//multi-line strings
console.log(`string text line 1

string text line 2`);//string text line 1

//string text line 2

//expression interpolation
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and \nnot ${2* a + b}.`);//Fifteen is 15 and 
//not 20

//Tagged template literals
function tag(strings, ...values){
    console.log(strings);//['Hello ', ' world ', '', raw: Array(3)]
    console.log(values);//[15, 50]

    return "Js Nuggets!";
}

console.log(tag`Hello ${a + b} world ${a * b}`);//Js Nuggets