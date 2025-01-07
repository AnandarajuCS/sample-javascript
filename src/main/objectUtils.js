// Object utility functions

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function pick(obj, keys) {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}

module.exports = {
    deepClone,
    merge,
    pick
};