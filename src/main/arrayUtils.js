// Array utility functions

function unique(arr) {
    return [...new Set(arr)];
}

function flatten(arr) {
    return arr.reduce((flat, toFlatten) => 
        flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

function chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

module.exports = {
    unique,
    flatten,
    chunk
};