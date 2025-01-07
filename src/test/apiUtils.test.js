const { buildQueryString, handleApiError } = require('../main/apiUtils');

describe('API Utilities', () => {
    describe('buildQueryString', () => {
        test('builds query string from object', () => {
            const params = {
                name: 'John Doe',
                age: '30',
                city: 'New York'
            };
            expect(buildQueryString(params))
                .toBe('name=John%20Doe&age=30&city=New%20York');
        });

        test('handles empty object', () => {
            expect(buildQueryString({})).toBe('');
        });
    });

    describe('handleApiError', () => {
        test('handles 404 error', () => {
            const error = {
                response: {
                    status: 404
                },
                message: 'Resource not found'
            };
            expect(handleApiError(error)).toEqual({
                error: 'Not Found',
                details: 'Resource not found'
            });
        });

        test('handles network error', () => {
            const error = {
                message: 'Network failed'
            };
            expect(handleApiError(error)).toEqual({
                error: 'Network Error',
                details: 'Network failed'
            });
        });
    });
});
