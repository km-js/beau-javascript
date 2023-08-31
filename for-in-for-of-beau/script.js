//for in will loop through property names
//for of will loop through property values

// for(variable in object){
//     statements
// }

// for(variable of object){
//     statements
// }

let person = {fname: "Beau", lname:"Carnes", arms:2};

let arr = [3,5,7];
//user defined properties
arr.foo = "hello";

let text = "";
for(let x in person){
    text += person[x];
    console.log(x)//fname lname arms
};
console.log(text);//"BeauCarnes2"


for(let x of person){
    console.log(x)//person is not iterable
};


//In arrays, for in returns numeric indexes
for(let i in arr){
    console.log(i);// 0 1 2 foo
}

for(let i of arr){
    console.log(i);//3 5 7
}