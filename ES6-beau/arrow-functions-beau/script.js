//Arrow Functions
// (param1, param2) => { statements }
// (param1, param2) => expression 
// (param1, param2) => { return expression; }

// (singleParam) => { statements }
// singleParam => { statements }

// () => { statements }
// () => expression
// () => { return expression; }

// (param1, param2, paramN) => expression

//Normal Function
var multiply = function(x,y){
    return x * y;
};

//Arrow Function
var multiply = (x,y) => {return x*y};
//or
var multiply = (x,y) => x*y;

//Arrow Fuction work really well with high order function such as map, filter or reduce that take other function as arguments for processing collections of data

//Example
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Berryllium'
];

var materialsLength1 = materials.map(function(material){
    return material.length;
});

var materialsLength2 = materials.map((material) => {
    return material.length;
});

var materialsLength3 = materials.map(material => material.length);

//Returning object literals
//we need to pass object in curly braces in arrow functions
var func = () => ({foo: 1});

//No binding of "this"

function Person(){
    this.age = 0;

//In normal function, this gonna refer to global object, but in arrow function it gonna refer to parent object(i.e person object)
    setInterval(() => {
        this.age++;
    }, 1000);
}

var p = new Person();