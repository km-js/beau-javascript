//Random numbers and parseInt

console.log(Math.random());//0.5227361507982995

console.log(Math.floor(Math.random() * 20));//11

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomRange(1,9));//1

console.log(parseInt("t10"));//NaN

console.log(parseInt("11", 2));//3