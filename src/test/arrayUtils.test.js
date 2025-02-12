const { unique, flatten, chunk } = require('../main/arrayUtils');

describe('Array Utilities', () => {
    describe('unique', () => {
        test('removes duplicates from array', () => {
            expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
        });

        test('handles empty array', () => {
            expect(unique([])).toEqual([]);
        });
    });

    describe('flatten', () => {
        test('flattens nested arrays', () => {
            expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
        });

        test('handles empty array', () => {
            expect(flatten([])).toEqual([]);
        });
    });

    describe('chunk', () => {
        test('splits array into chunks', () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        });

        test('handles empty array', () => {
            expect(chunk([], 2)).toEqual([]);
        });
    });
});
