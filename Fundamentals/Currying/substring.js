// define the getSubstring function
const getSubstring = (start, length, str) => str.substring(start, length);

const str = "Hello world";
const subStr = getSubstring(0, 5, str);
// console.log(subStr);
// NOTE THAT FOR THE USE WITH THE TEST PROGRAM, THE FUNCTION VARIABLE
// MUST BE DECLARED AS var VARIABLES (and NOT as let VARIABLES)

// define the curriedSubstring function using arrow function
// so that it can be called as curriedSubstring(start)(length)(str)
let curriedSubstring = start => length => str => str.substring(start, length);

// define the function getFirstCharacters using
// the partially evaluated curriedSubstring(0) function
// getFirstCharacters can be called as getFirstCharacters(str, length);
let getFirstCharacters = (str, length) => curriedSubstring(0)(length)(str);
// console.log(getFirstCharacters(str, 5));

// define the function getFirstCharacter using the same principle.
// getFirstCharacter can be called as getFirstCharacter(str);
let getFirstCharacter = str => curriedSubstring(0)(1)(str);
console.log(getFirstCharacter(str));


