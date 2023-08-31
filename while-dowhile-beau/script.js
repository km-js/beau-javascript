//While, Do While
//The while loop creates a loop that executes a specified statement as long as the test condition evaluates to true and the condition is evaluated before executing the statement

var n = 6;

while(n < 5) {
    n++;
    console.log("n = "+ n);
}

var i = 6;

//The do loop is going to create a loop that executes until the test condition evaluates to false
//the condition is evaluated after executing the statement 
//the statements are going to run atleast once
do{
i++;
console.log("i=" + i);
}while(i < 5);// i=7

var s = 0;
while(s < 5 ){
    s++;
    //continue command means to not run any code after that command and just go to the next iteration of the loop
    if(s===3) continue;
    console.log("s=" + s);//s=1 s=2 s=4 s=5
}

var t = 0;
while(t < 5){
    t++;
    //continue command means to not run any code after that command and just go to the next iteration of the loop
    if(t===3) break;
    console.log("t=" + t);//t=1 t=2

}