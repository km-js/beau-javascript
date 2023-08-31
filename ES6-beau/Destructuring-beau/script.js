/* Destructuring */
//Destructuring Assignment is a javascript syntax that makes it possible to extract data from arrays or objects into distinct variables

//1.Assign variables from objects
var voxel = { x:3, y:7, z:6 };
//old way
// var x = voxel.x; //x=3
// var y = voxel.y; //y=7
// var z = voxel.z; //z=6

//destructuring
const {x, y, z} = voxel;
console.log(x);//3

//change the names
const {x: a, y: b, z: c} = voxel;
console.log(b);//7

//2.Assign variables from nested objects
const nest = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9}
};
const { start : { x: startX, y: startY }} = nest;
console.log(startX);//5

//3.Assign Variables from Array
const [q, r] = [1,2,3,4,5];
const[p,,,s] = [1,2,3,4,5];
console.log(q, r);// 1 2
console.log(p, s);//1 4

//4.Rest Operator to reassign array elements
//Rest must be always last variable in the list
const [k,l, ...rest] = [1,2,3,4,5]
console.log(q,r); //1 2
console.log(rest); //(3) [3, 4, 5]

//5.Pass an object as a Function's Parameters
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    //do something with these variables
}
//or
const profileUpdate1 = ({ name, age, nationality, location }) => {
    //do something with these variables
}

