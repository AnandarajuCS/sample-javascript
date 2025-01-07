// Math utility functions

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function factorial(n) {
    if (n < 0) return null;
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

module.exports = {
    add,
    multiply,
    factorial
};