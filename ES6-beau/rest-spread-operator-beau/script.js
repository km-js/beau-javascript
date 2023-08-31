//Spraed Operator
//Spread Operator allows expressions to be expanded in places where multiple arguments, elements or variables are expected


//Add elements of an existing array into new array
var firstArray = ["a","b","c"];
var secondArray = ["d",...firstArray,"e","f"];

console.log(secondArray);//(6) ['d', 'a', 'b', 'c', 'e', 'f']

//Pass elements of an array as arguments to a function
function addThreeNumbers(x,y,z){
    console.log(x+y+z)
}
var args = [0,1,2,3];
addThreeNumbers(...args);//3

//copy arrays
var arr = [1,2,3];
var arr2 = [...arr];//like arr.slice()
arr2.push(4);
console.log(arr);//(3) [1, 2, 3]
console.log(arr2);//(4) [1, 2, 3, 4]

//concatenate arrays
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr1.concat(arr2);//or
arr1=[...arr1,...arr2];
console.log(arr1);//(6) [0, 1, 2, 3, 4, 5]



//Rest: Condense multiple elements into an array

//Since, these three dots has been passed in as argument of a function, that's how we know that it's being used as rest operator, and not the spread operator


function multiply(multiplier, ...theArgs){
    return theArgs.map(function(element){
        return multiplier * element;
    });
}

var arr = multiply(2,1,2,3);
console.log(arr);//(3) [2, 4, 6]