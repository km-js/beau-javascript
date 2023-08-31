//Objects
//Object is a standalone entity with properties 
//property is a variable i.e attached to the object
//properties can be accessed using dot notation

var myCar = new Object();
myCar.make="Ford";
myCar.model="Mustang";
//you can also create a property and not assign a value
myCar.color;

console.log(myCar.make);//Ford
console.log(myCar.color);//undefined

//bracket notation
myCar["year"] = 1969;
console.log(myCar["model"]);//Mustang

myCar["Do I like?"] = "I hate my car";
console.log(myCar["Do I like?"]);//I hate my car

function showProps(obj, objName) {
    var result = "";
    //for each property in object
    for(var i in obj){
        //obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if(obj.hasOwnProperty(i)){
            result += objName + "." + i + "=" + obj[i] + "\n";
        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));//myCar.make=Ford
                                       //myCar.model=Mustang
                                       //myCar.year=1969
                                       //myCar.Do I like?=I hate my car

//Three ways to create an object
//Creation: object initializer
var myHonda ={color: "red", wheels: 4, engine:{cylinders: 4, size: 2.2}};

//Creation: constructor function
function Car(make, model, year){
    //this means this object
    this.make = make;
    this.model = model;
    this.year = year;
}
console.log(new Car("Honda","abc",2019));//Car {make: 'Honda', model: 'abc', year: '2019'}
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(anothercar);//Car {make: 'Mazda', model: 'Miata', year: 1990}
console.log(anothercar.model);//Miata
anothercar.color = "black";
console.log(anothercar);//Car {make: 'Mazda', model: 'Miata', year: 1990, color: 'black'}

//Creation: Object.create
//Objects can be created with object.create method, this method can be very useful because it allows you to choose the prototype object for the object you want to create without having to define a constructor function


//A method is just a property of an object that is a function
//first, we are going to define the prototype
var Animal = {
    type: "Invertebrates",
    displayType: function(){
        console.log(this.type);
    }
}

var animal1 = Object.create(Animal);
animal1.displayType();//Invertebrates

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();//Fishes

/* Objects: Part 2 */

//Using Objects for lookups
//Objects can be thought of as key value storage like a dictionary
//if you have tabular data, you can use an object to look up values in the data
var alpha = {
    1:"Z",
    2:"Y",
    3:" X",
    4:"W"
    //...
}
console.log(alpha[2]);//Y

//Remove Object Properties
let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};

delete dishes.cups;
console.log(dishes);//{plates: 8, forks: 28, bowls: 13}

//Testing Objects for Properties
//checking if properties exist in a object or not
console.log(dishes.hasOwnProperty('plates'));//true
console.log(dishes.hasOwnProperty('cups'));//false

//Acessing and Modifying Nested Objects
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet":{
        "top drawer":{
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2);//secrets
console.log(ourStorage.desk.drawer);//stapler
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);//cake recipe

//Generate an Array of all Object Keys
//using object.keys method and passing the object as argument
console.log(Object.keys(ourStorage));//(2) ['desk', 'cabinet']