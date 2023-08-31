//Named Exports

//lib.js
//export statement is used to export functions, objects, primitives from a given file or module
//You can have multiple named exports in one file
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x,y){
    return sqrt(square(x) + square(y));
}

//import statement is used to import functions, objects, primitives in another file
//main.js
import { square, diag } from lib;
console.log(square(11));
console.log(diag(4,3));

//importing complete module
//main.js
import * as lib from 'lib';
console.log(lib.square(11));
console.log(lib.diag(4,3));

//importing with more convenient alias
import {reallyReallyLongModuleMemberName as shortName}
from 'my-module';


//Single Default Export
//Usually, you gonna use this statement when only one value is being exported from a file
//It is also used to create a fallback value for a file or module

//myFunc.js
export default function () {....} //no semicolon

//main.js
import myFunc from 'myFunc';
myFunc();