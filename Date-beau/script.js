//Date
//A javascript dates constructor helps with parsing, managing and displaying dates

var d1 = new Date()
console.log(d1);//Wed Aug 16 2023 15:12:50 GMT+0530 (India Standard Time)
console.log(d1.toString())//Wed Aug 16 2023 15:13:44 GMT+0530 (India Standard Time)
console.log(d1.toDateString())//Wed Aug 16 2023
console.log(d1.toTimeString())//15:15:46 GMT+0530 (India Standard Time)
console.log(d1.toUTCString())//Wed, 16 Aug 2023 09:46:36 GMT

var d2 = new Date(2017, 1, 3, 42, 43, 23, 23)
console.log(d2);//Sat Feb 04 2017 18:43:23 GMT+0530 (India Standard Time)

var d3 = new Date(864000000)
console.log(d3)//Sun Jan 11 1970 05:30:00 GMT+0530 (India Standard Time)

var d4 = new Date("October 13, 2019 11:13:00");
console.log(d4);//Sun Oct 13 2019 11:13:00 GMT+0530 (India Standard Time)

var d5 = new Date("2015-03-25")
console.log(d5);//Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)

var d6 = new Date("2015-03")
console.log(d6);//Sun Mar 01 2015 05:30:00 GMT+0530 (India Standard Time

var d7 = new Date("2015")
console.log(d7);//Thu Jan 01 2015 05:30:00 GMT+0530 (India Standard Time)


//getters
console.log(d7.getDate());//1

console.log(d7.getDay());//4//day as a number

//setters
d7.setYear(2020);
console.log(d7);//Wed Jan 01 2020 05:30:00 GMT+0530 (India Standard Time)


var start = new Date();

doSomething();

var end = new Date();

var elapsed = end.getTime() - start.getTime();
console.log(elapsed);//10//in milliseconds

function doSomething(){
    for(var i = 0; i < 1000000; i++){

    }
}
