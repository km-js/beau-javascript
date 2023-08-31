//Comparison Operators & If... Else 

var isFCCGreat = true;

if(isFCCGreat){
    console.log("Freecodecamp is amazing!");
} else{
    console.log("Freecodecamp is horrible!");
}


//  Comparison Operators: > < >= <= == !=
var age = 18;

//not correct
// if(age >= 18){
//     console.log("You are an adult");
// }else if(age < 18){
// console.log("You are a child!");
// } else if (age < 2){
//     console.log("You are a baby");
// };

if(age >= 18){
    console.log("You are an adult");
} else if (age < 2){
    console.log("You are a baby")
}else if(age < 18){
console.log("You are a child!");
};

if(age == 18) {console.log("You are eighteen")};

if(a != 18) {console.log("You are not eighteen")};

//== abstract equality
//it will attempt to resolve the data types via type coercion before making a comparison


//=== strict equality
//will return false if the types are different

console.log(3 == "3");//true
console.log(3 === "3");//false

console.log(true == "1");//true
console.log(true === "1");//false

console.log("This is a string" == new String("This is a string"));//true
console.log("This is a string" === new String("This is a string"));//false
//String Literals are different than String Object



