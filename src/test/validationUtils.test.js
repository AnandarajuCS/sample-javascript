const { isEmail, isStrongPassword, isPhoneNumber } = require('../main/validationUtils');

describe('Validation Utilities', () => {
    describe('isEmail', () => {
        test('validates correct email format', () => {
            expect(isEmail('test@example.com')).toBe(true);
        });

        test('rejects invalid email format', () => {
            expect(isEmail('invalid.email')).toBe(false);
        });
    });

    describe('isStrongPassword', () => {
        test('validates strong password', () => {
            expect(isStrongPassword('Test1234!')).toBe(true);
        });

        test('rejects weak password', () => {
            expect(isStrongPassword('password')).toBe(false);
        });
    });

    describe('isPhoneNumber', () => {
        test('validates phone number format', () => {
            expect(isPhoneNumber('+1-234-567-8901')).toBe(true);
        });

        test('rejects invalid phone format', () => {
            expect(isPhoneNumber('abc-def-ghij')).toBe(false);
        });
    });
});