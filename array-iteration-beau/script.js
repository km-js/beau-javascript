//Array Iteration: 8 methods
//Iterating means you're going through the array and you're doing something with each item of the array

//forEach
//it does something for each item of the array
[1,2,3].forEach(function(item,index){
    console.log(item, index);//1 0 2 1 3 2
})

//map
//It takes the item from the array, it does something to it and then puts a new thing back in that same place in the array
const three = [1,2,3];
const doubled = three.map(function(item){
    return item * 2;
})
console.log(doubled);//(3) [2, 4, 6]

//filter
//filter is going to take an array and it's gonna check each item in the array , it gets some kind of condition to see if it's true or false, if it's true it's gonna put that item back in the array, if it's false it's not going to put the item in the array
const ints = [1,2,3];
const evens = ints.filter(function(item){
    return item % 2 === 0;
})
console.log(evens);//[2]

//reduce
//we're going to do something and then pass the result to the next iteration along with the next item in the array
const sum  = [1,2,3].reduce(function(result, item){
    return result + item;
}, 0);
console.log(sum);//6//0+1=1, 1+2=3, 3+3=6

//some
//Some means "Does any item in the entire array meet the condition"
const hasNegativeNumbers = [1,2,3,-1,4].some(function(item){
    return item < 0;
});
console.log(hasNegativeNumbers);//true

//every
//every number has to meet the condition to be true
const allPositiveNumbers = [1,2,3].every(function(item){
    return item > 0;
});
console.log(allPositiveNumbers);//true

//find
//find goes through every item in the array and checks it against the condition and if that's true it returns that item
//So, it's searching for specific item in the array
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(function(item){
    return item.id === 'b';
});
console.log(found);//{id: 'b'}

//find index
//Same as find, it's going to retun index of the item
const objects2 = [{id:'a'},{id:'b'},{id:'c'}];
const foundIndex = objects2.findIndex(function(item){
    return item.id === "b";
});
console.log(foundIndex)//1