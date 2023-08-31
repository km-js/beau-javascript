//For Loops

//for([initialization]; [condition]; [final-expression]) {}
//you can run the same code multiple times using a loop
//for loop runs for a specific number of times

var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);//(5) [0, 1, 2, 3, 4]

var ourArray2 = [];
for (var i = 0; i < 5; i++){
    if(i > 2) break;
    ourArray2.push(i);
}
console.log(ourArray2);//(3) [0, 1, 2]

var arr=[10,9,8,7,6];
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);//10 9 8 7 6
}

var arr1 = [
    [1,2], [3,4], [5,6]
];

for(var i=0; i<arr1.length; i++){
    for(var j=0; j < arr1[i].length ; j++){
        console.log(arr1[i][j]);// 1 2 3 4 5 6
    }
}