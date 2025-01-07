const { formatDate, addDays, daysBetween } = require('../main/dateUtils');

describe('Date Utilities', () => {
    describe('formatDate', () => {
        test('formats date correctly', () => {
            const date = new Date('2023-01-15');
            expect(formatDate(date)).toBe('2023-01-15');
        });

        test('handles single digit month and day', () => {
            const date = new Date('2023-05-05');
            expect(formatDate(date)).toBe('2023-05-05');
        });
    });

    describe('addDays', () => {
        test('adds days to date', () => {
            const date = new Date('2023-01-15');
            const result = addDays(date, 5);
            expect(result.toISOString().slice(0, 10)).toBe('2023-01-20');
        });

        test('handles negative days', () => {
            const date = new Date('2023-01-15');
            const result = addDays(date, -5);
            expect(result.toISOString().slice(0, 10)).toBe('2023-01-10');
        });
    });

    describe('daysBetween', () => {
        test('calculates days between dates', () => {
            const date1 = new Date('2023-01-15');
            const date2 = new Date('2023-01-20');
            expect(daysBetween(date1, date2)).toBe(5);
        });

        test('handles same date', () => {
            const date = new Date('2023-01-15');
            expect(daysBetween(date, date)).toBe(0);
        });
    });
});