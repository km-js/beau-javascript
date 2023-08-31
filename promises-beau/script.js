//Promises
//A Promise is a proxy or placeholder for a value that you may not know when the promise is created
//you don't know exactly when an asynchronous method is going to finish in your program
//promises allow you to do something as soon as an asynchronous method or action does finish
//Instead of immediately returning the final value the asynchronous method returns a promise to supply the value at some point in the future
//A pending promise can either be fulfilled with a value or rejected with a reason or error 
//Basic Usage
var p = new Promise(function(resolve, reject){
    //Do an async task async task and then...
    if(good_condition){
        resolve('Success');
    }
    else{
        reject('Failure')
    }
});

//then function is whatever you're going to do after the asynchronous task in the promise completes 
p.then(function (){
    //do something with the result
}).catch(function(){
    //error
})

debugger;
var promiseCount = 0;

function testPromise(){
    var thisPromiseCount =++promiseCount;
console.log(thisPromiseCount + ': Started - Sync code started');

var p1 = new Promise(function(resolve,reject){
    console.log(thisPromiseCount + ": Promise started - Async code started");
    //This is only an example to create asynchronous
    window.setTimeout(function(){
        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
});

p1.then(function(val){
    console.log(val + ": Promise fulfilled - Async code terminated");
}).catch(function(reason){
    console.log('Handle rejected promise ('+reason+') here');
});
console.log(thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();
// 1: Started - Sync code started
// 1: Promise started - Async code started
// 1: Promise made - Sync code terminated
// 2: Started - Sync code started
// 2: Promise started - Async code started
// 2: Promise made - Sync code terminated
// 3: Started - Sync code started
// 3: Promise started - Async code started
// 3: Promise made - Sync code terminated
// 3: Promise fulfilled - Async code terminated
// 1: Promise fulfilled - Async code terminated
// 2: Promise fulfilled - Async code terminated