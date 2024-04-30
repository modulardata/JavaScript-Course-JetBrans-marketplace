function filter(array, test) {
    let filtered = [];
    for (const element of array) {
        if (test(element)) {
            filtered.push(element);
        }
    }
    return filtered;
}

function filter_positive(array) {
    return filter(array, function (number) { return number >= 0 });
}

function filter_a(array) {
    return filter(array, function (str) { return str.length > 0 && str.charAt(0) == `a`; });
}



// console.log(filter_a(["ant", "bear", "cat"]));
// console.log(filter_positive([-3, -2, -1, 0, 1, 2, 3]));
