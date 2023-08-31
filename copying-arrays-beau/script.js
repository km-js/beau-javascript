//Copying Arrays

var original = [true, true, undefined, false, null];

//slice
//slice method is used to break apart an array into two different parts
//we can also use it to copy an entire array
var copy1 = original.slice(0);
console.log(copy1);//(5) [true, true, undefined, false, null]

//spread operator
var copy2 = [...original];
console.log(copy2);//(5) [true, true, undefined, false, null]

//Deep Copying
//If you have an array or object within the array
var deepArray = [["freeCodeCamp"]];


//In the original array, there is a pointer to an array, So when we are doing copy of the array we are copying pointers to the original array
//we are pushing isGreat to pointer of the other array
//since both of them pointing to the same second array
var shallowCopy = deepArray.slice(0);
shallowCopy[0].push("is great");
console.log(deepArray[0], shallowCopy[0]);//(2) ['freeCodeCamp', 'is great'] (2) ['freeCodeCamp', 'is great']

var deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push("is great");
console.log(deepArray[0], deepCopy[0]);//(2) ['freeCodeCamp', 'is great'] (3) ['freeCodeCamp', 'is great', 'is great']


