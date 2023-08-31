//Arrays
//In array variable, we can store several pieces of data in one place

var sandwich = ["peanut butter", "jelly", "bread"];

//multidimensonal arrays
var teams = [["Bulls", 23], ["White Sox", 45]];

//you can access elemnts of arrays using indexes
console.log(sandwich[1]);//jelly

//you can also change array elements using indexes
sandwich[1] = "bananas";
console.log(sandwich);

console.log(teams[1][0]);//White Sox
team[1][0] = "red socks";
console.log(teams[1][0]);//red socks

sandwich.forEach(function(element){
    console.log(element);
});

//10 Common Array Methods
var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);