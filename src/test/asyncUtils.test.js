const { retry, timeout, concurrent } = require('../main/asyncUtils');

describe('Async Utilities', () => {
    describe('retry', () => {
        test('retries failed operation', async () => {
            let attempts = 0;
            const operation = jest.fn().mockImplementation(() => {
                attempts++;
                if (attempts < 2) throw new Error('Failed');
                return 'success';
            });

            const result = await retry(operation, 3);
            expect(result).toBe('success');
            expect(attempts).toBe(2);
        });
    });

    describe('timeout', () => {
        test('resolves when promise completes within timeout', async () => {
            const promise = Promise.resolve('success');
            const result = await timeout(promise, 1000);
            expect(result).toBe('success');
        });

        test('rejects when operation times out', async () => {
            const slowPromise = new Promise(resolve => setTimeout(resolve, 2000));
            await expect(timeout(slowPromise, 1000))
                .rejects
                .toThrow('Operation timed out');
        });
    });

    describe('concurrent', () => {
        test('executes tasks concurrently with limit', async () => {
            const tasks = [
                () => Promise.resolve(1),
                () => Promise.resolve(2),
                () => Promise.resolve(3),
                () => Promise.resolve(4)
            ];

            const results = await concurrent(tasks, 2);
            expect(results).toEqual([1, 2, 3, 4]);
        });
    });
});