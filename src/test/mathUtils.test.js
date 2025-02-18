const { add, multiply, factorial } = require('../main/mathUtils');

describe('Math Utilities', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(6);
        });

        test('handles negative numbers', () => {
            expect(add(-1, 1)).toBe(0);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(multiply(2, 3)).toBe(6);
        });

        test('handles zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });

    describe('factorial', () => {
        test('calculates factorial of positive number', () => {
            expect(factorial(5)).toBe(120);
        });

        test('returns 1 for factorial of 0', () => {
            expect(factorial(0)).toBe(1);
        });
    });
});
