//ES6

//const vs let vs var

//const-const is for value that never change
const pi = 3.14;
//pi = 1;//error

//var-var is for value that change
var pie = 3.14;
pie = 1;
console.log(pie);//1

//let- let is for block level variables
//let variables are only available within the block it is defined
//console.log(i);//error-i is not defined
for(let i = 0; i < 3; i++){
    console.log(i);
}
//console.log(i);//error-i is not defined

//var is available to entire function or if it's not within a function, to the entire program
console.log(j);//undefined
for(var j= 0; j < 3; j++ ){
    console.log(j);
}
console.log(j);//no error