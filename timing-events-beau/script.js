//setTimeout and setInterval
//There are two timing events that are part of the window object that both allow execution of code at specific time intervals
//setTimeout you pass in a function in milliseconds and the program will wait the specified number of milliseconds and execute the function

//setTimeout
var timeoutID = setTimeout(bye, 3000);

console.log("hello");

function bye(){
    console.log('goodbye');
}

clearTimeout(timeoutID);//to clear the timeout

//setInterval
//we pass in a function in millisecoonds but the program will execute the function continously waiting the specified number of milliseconds between each function 

var count = 0;
var intId = setInterval(counter, 1000);

function counter(){
    console.log(++count);
}