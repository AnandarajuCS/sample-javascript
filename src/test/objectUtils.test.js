const { deepClone, merge, pick } = require('../main/objectUtils');

describe('Object Utilities', () => {
    describe('deepClone', () => {
        test('creates deep copy of object', () => {
            const original = { a: 1, b: { c: 2 } };
            const clone = deepClone(original);
            expect(clone).toEqual(original);
            expect(clone).not.toBe(original);
        });
    });

    describe('merge', () => {
        test('merges two objects', () => {
            const obj1 = { a: 1, b: 2 };
            const obj2 = { c: 3, d: 4 };
            expect(merge(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
        });
    });

    describe('pick', () => {
        test('picks specified keys from object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
        });
    });
});