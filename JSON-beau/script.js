//JSON- stands for Javascript object notation
//It's a syntax for storing and exchanging data
//characteristics:
//1.data is in name value pair
//2.data is seperated by commas
//3.curly braaces hold objects
//4.square braces hold arrays
//5.json values must be following data types: string, number, json object, array, boolean or null
//6.json values cannot be a function, a date or undefined

//when exchanging data between browser and server, the data can only be text, json format is text only , that's why json can be very useful

var myJSON={
    "name": {
        "first": "Beau",
        "last": "Carnes"
    },
    "age": 33,
    "skills": ["juggling", "stillwalking", "coding"],
    "married": true,
    "superpowers": null
}

//stringify method
//converts json to a string
var stringified = JSON.stringify(myJSON);
console.log(stringified);//{"name":{"first":"Beau","last":"Carnes"},"age":33,"skills":["juggling","stillwalking","coding"],"married":true,"superpowers":null}

//parse method
//converts string i.e in json format to object
var stringJSON= '{"name": "Beau", "kids": 2, "state": "Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);//{name: 'Beau', kids: 2, state: 'Michigan'}