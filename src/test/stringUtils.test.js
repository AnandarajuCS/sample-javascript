const { capitalizeFirst, reverseString, countVowels } = require('../main/stringUtils');

describe('String Utilities', () => {
    describe('capitalizeFirst', () => {
        test('capitalizes first letter of string', () => {
            expect(capitalizeFirst('hello')).toBe('Hello');
        });

        test('returns empty string for empty input', () => {
            expect(capitalizeFirst('')).toBe('');
        });
    });

    describe('reverseString', () => {
        test('reverses a string', () => {
            expect(reverseString('hello')).toBe('olleh');
        });

        test('handles empty string', () => {
            expect(reverseString('')).toBe('');
        });
    });

    describe('countVowels', () => {
        test('counts vowels in string', () => {
            expect(countVowels('hello')).toBe(2);
        });

        test('returns 0 for string without vowels', () => {
            expect(countVowels('cry')).toBe(0);
        });
    });
});