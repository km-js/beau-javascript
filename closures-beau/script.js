//Closures
//A closure is the combination of a function and the environment within which the function has been declared
//the environment may consist of local variable that were in scope at the time closure was created
//In javascript, all functions form closures

function makeFunc (){
    var name = "JS Nuggets";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();//Js Nuggets

//the function has access to any variable i.e within the scope or the environment it is created in

//practical example
//one way to use a closure is to emulate private methods
//private methods can only be called by other methods in same class

//anonymous function
var counter = (function(){
    //private
var privateCounter = 0;
function changeBy(val){
    privateCounter += val;
}
return{
    //public
    increment: function(){
        changeBy(1);
    },
    decrement: function(){
        changeBy(-1);
    },
    value: function(){
        return privateCounter;
    }
};
})();

console.log(counter);//{increment: ƒ, decrement: ƒ, value: ƒ}
console.log(counter.value());//0
counter.increment();//1
counter.increment();//2
console.log(counter.value());//2
counter.decrement();//1
console.log(counter.value());//1
