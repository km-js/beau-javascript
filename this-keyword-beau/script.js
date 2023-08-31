// this
//In javascript, this is the object that owns the javascript code 
//The value of this when used in a function is the object that owns the function 
//the value used in an object is the object itself
//when used outside a function or object this refers to global object
//so, this.document is same as document because it's in the global object
console.log(this.document === document);//true

console.log(this === window);//true

this.a =37;
console.log(window.a);//37

//In a function, if the value of this is not set by the call, this will default to global object
function f1(){
    return this;
}
console.log(f1() === window);//true

//the value of this remains at whatever was set to when entering the execution context
function f2(){
    return this;
}
console.log(f2() === window);//false, this will be equal to undefined

//call and apply methods
//when a function use the this keyword in its body, its value can be bound to a particular object in the call using the call or apply methods
function add(c,d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};
//the first parameter of call is the object to use as 'this' and the other parameters are passed in as arguments in the function call
console.log(add.call(o,5,7));//16
//apply is like call, the main difference is that call accepts an argument list while apply just accepts a single array of arguments
//so, we are passing in the arguments as 1 array instead of a list
console.log(add.apply(o,[10,20]));//34

//bind method
//when you call the bind method on a function and pass in an object, it creates a new function with the same body in scope as the original function
//but where this occurs in the original function, in the new function it is bound to the first argument of bind 
function f(){
    return this.a;
}

var g = f.bind({a: 'unicycle'});
console.log(g());//unicycle

var h = g.bind({o: 'cereal'});//won't work second time
console.log(h());//unicycle

var o = {a:8, f:f, g:g, h:h};
console.log(o.f(), o.g(), o.h());// 8 unicycle unicycle

//with arrow functions, this is bound to the enclosing scope at creation time and cannot be changed
var o = {
    traditionalFunc: function(){
        console.log('traditionalFunc this === 0?', this === o);
    },
    arrowFunc: () => {
        console.log('arrowFunc this === 0?', this === o);
        console.log('arrowFunc this === window?', this === window);
    }
}

o.traditionalFunc();//traditionalFunc this === 0? true
o.arrowFunc();//arrowFunc this === 0? false
             //arrowFunc this === window? true

//the arrow function attached to o was created in the scope of window and run in the scope of o
//this arrow function is forever bound to the scope of window where it was created

//when a function is called as a method of an object 
//this is set to the object the method is called on
var o ={
    prop: 37,
    f: function(){
        return this.prop;
    }
};

console.log(o.f());// 37

//it doesn't mather where the function is defined
var o = {props: 23};

function independent(){
    return this.prop;
}

o.f = independent;

console.log(o.f());