//Error Handling is used most when working with data from other sources or user inputs

//try statement lets you test a block of code for errors 
//catch statement lets you handle the errors
//throw statement lets you create custom errors
//finally statement lets you execute code after try and catch regardless of the result

try{
    console.log('Start of try runs');

    unicycle;

    console.log('End of try runs -- never reached');
}
catch(err){
console.log('Error has occured: ' + err);
}
finally{
    console.log('This always run');
}

console.log('...Then the execution continues')

//output:-
// Start of try runs
// script.js:16 Error has occured: undefined
// script.js:19 This always run
// script.js:22 ...Then the execution continues

//try catch only handles run time errors

//throw - create your own errors
let json = '{"age": 30}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name");
    }
    console.log(user.name);
}
catch(e){
    console.log("JSON Error:" + e.message );//Incomplete data: no name
    console.log("JSON Error:" + e.name );//SyntaxError
}