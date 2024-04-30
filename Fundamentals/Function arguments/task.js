// Define the function sumAll() that takes an arbitrary number of numbers as
// arguments and that returns the sum of all arguments. You may assume that
// all arguments are numbers.

// Hint: any function receives an implicit argument named "arguments" as an
// array of all arguments. Any array has a property named "length" that
// returns the length of the array

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// Test the function with some sample arguments
// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
// console.log(sumAll(10, 20, 30)); // Output: 60
// console.log(sumAll(50, 100)); // Output: 150
// console.log(sumAll(100)); // Output: 100
// console.log(sumAll()); // Output: 0
