//Null vs Undefined
//Undefined- a variable has been declared but not assigned a value
var test;
console.log(test);

//null- null is a assignment value, it can be assigned to a variable as a representation of null value
//Javascript never sets a value to null, this must be done specifically in your program
test = null;
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(null === undefined);//false
console.log(null == undefined);//true
console.log(!null);//true
console.log(null);//null
console.log(!!null);//false
console.log(1 + null);//1 //in math, null is zero
console.log(1 + undefined);//NaN //in math, undefined is NaN