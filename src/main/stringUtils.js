// String utility functions

function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = {
    capitalizeFirst,
    reverseString,
    countVowels
};