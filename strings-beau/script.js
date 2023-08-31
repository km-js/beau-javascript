//A string or string literal is a series of 0 or more characters enclosed in single or double quotes
var myName = "Beau";

var sentence1 = "He said \"Hi!\"";
var sentence2 = 'He said "Hi!"';

/*/' single quote
/" double quote
\\backslash
\n newline
\r carriage return
\t tab 
\b backspace
\f form feed
*/

var fullName = "Beau" + "Carnes";// 'Beau Carnes'

var sentence2 = "My name is " + fullName;//'My name is Beau Carnes'

fullName += 'is my name'; //fullName = fullName is my name
//'Beau Carnes is my name

//string values are immutable i.e it can't be altered once created
//you can change a element in a array but you can't change a character in a string after you created

//string
//bracket notation
var firstName = "Beau"

console.log(firstName[1]);//e

console.log(firstName[firstName.length - 1]);//u
firstName[0] = "q";//error
firstName = "Quincy";//no error
console.log(firstName);//Quincy

//20 string Methods
var stringOne = "freecodecamp is the best place to learn"
var stringTwo = "frontend and backend development"

//charAt()
//returns the character at the specified position
console.log(stringOne.charAt(1));//r

//charCodeAt()
//returns the unicode of the character at the specified index
console.log(stringOne.charCodeAt(1));//114

//concat()
//joins two or more strings and returns the joined string
 console.log(stringOne.concat(stringTwo));//freecodecamp is the best place to learnfrontend and backend development

 //endsWith()
 //checks if the string ends with specified string or character
 console.log(stringOne.endsWith("to"));//false

 //fromCharCode()
 //this converts unicode values to characters
 console.log(String.fromCharCode(114));//r

 //includes
 //check if string contains a specified string or character
 console.log(stringTwo.includes("end"));//true

 //indexOf()
//returns the index of the first found occurence of a specified value
console.log(stringTwo.indexOf("end"));//5

//lastIndexOf()
//returns the index of the last found occurrence of a specified value
console.log(stringTwo.lastIndexOf("end"));//17

//match()
//it is going to search a string for a match against a regular expression and return the matches
console.log(stringTwo.match(/end/g));//(2) ['end', 'end']

//repeat()
//return a new string with a specified number of copies of an existing string
console.log(stringOne.repeat(3));//freecodecamp is the best place to learnfreecodecamp is the best place to learnfreecodecamp is the best place to learn

//replace()
//searches a string for specified value or regular expression and returns a new string where the specified values are
console.log(stringTwo.replace(/end/g, "END"));//frontEND and backEND development

//search()
//it is going to search a string for specified value or regular expression and return the position of the match
console.log(stringTwo.search("end"));//5

//slice()
//It is going to extract a part of string and return a new string
//argument(firstIndex, index after it ends )
console.log(stringTwo.slice(2,4));//on

//split()
//It is going to split a string into an array of substrings
console.log(stringOne.split(" "));//['freecodecamp', 'is', 'the', 'best', 'place', 'to', 'learn']

//startsWith()
//It is going to check whether a string begins with specified characters
console.log(stringOne.startsWith("free"))//true

//substr()
//extract the characters from a string beginning at a specified  start position and through the number of characters
console.log(stringTwo.substr(2,4));//onte

//substring()
//It is going to extract the characters from a string between two specified indexes
console.log(stringTwo.substring(2,4));//on

//toLowerCase()
//make the string all lowercase letters
console.log(stringOne.toLowerCase());//freecodecamp is the best place to learn

//toUpperCase()
//make the string all uppercase letters
console.log(stringOne.toUpperCase());//FREECODECAMP IS THE BEST PLACE TO LEARN

//trim()
//remove whitespace from either side of the screen
var stringThree = "    Subscribe now!     ";
console.log(stringThree.trim());//Subscribe now!