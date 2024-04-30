// todo: replace this with an actual task
function makeMultiplier(x) {
    /* Implement the makeMultiplier function */
    return function (y) {
        return x * y
    }
}

const mult5 = makeMultiplier(5);
const mult10 = makeMultiplier(10);

console.log(mult5(2)) // should print 10
console.log(mult10(2)) // should print 20
