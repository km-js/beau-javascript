//array methods
var arr=["a","b","c"];

//push-adds new element to the end of array
arr.push("d");
console.log(arr);//(4) ['a', 'b', 'c', 'd']

//pop-removes last element of the array and returns that element
console.log(arr.pop());//d
console.log(arr);['a', 'b', 'c']
//push and pop changes the original array

//concatenate two arrays
var arr2 = ["g", "q"];
console.log(arr.concat(arr2));//(5) ['a', 'b', 'c', 'g', 'q']
console.log(arr2);//(2) ['g', 'q']
//concatenate doesn't modify original array

//join-joins all the elements in an array to create a string and doesn't modify the original array
console.log(arr.join("!"));//a!b!c

//reverse-reverses the elements in an array
//It does modify the array
console.log(arr.reverse());//(3) ['c', 'b', 'a']
console.log(arr);//(3) ['c', 'b', 'a']

//shift-remove the first element of the array and return that element
console.log(arr.shift());//c
console.log(arr);//(2) ['b', 'a']

//unshift-adds the element to the begining of the array and returns the length of the modified array
console.log(arr.unshift("p"));//3
console.log(arr);//(3) ['p', 'b', 'a']

//slice-select part of an array and return that new array & the original array remains unchanged
//slice takes two elements (start,end-1)
//slice doesn't change the original array
console.log(arr.slice(1,2));//['b']
console.log(arr.slice(1,1));//[]

//sort-sorting an array
arr.sort();
console.log(arr);//(3) ['a', 'b', 'p']

//splice-similar to slice
//But, it's going to modify the original array instead of just returning a new array
//arguments(start,no. of items to count from start to remove,items to add)
console.log(arr.splice(2,2,"JS Nuggets"));//['p']
console.log(arr);//(3) ['a', 'b', 'JS Nuggets']