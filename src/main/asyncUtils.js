// Async utility functions

async function retry(fn, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

async function timeout(promise, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), ms);
    });
    return Promise.race([promise, timeoutPromise]);
}

async function concurrent(tasks, limit = 3) {
    const results = [];
    const executing = new Set();

    for (const task of tasks) {
        const promise = Promise.resolve().then(() => task());
        results.push(promise);
        executing.add(promise);
        
        promise.finally(() => executing.delete(promise));
        
        if (executing.size >= limit) {
            await Promise.race(executing);
        }
    }
    
    return Promise.all(results);
}

module.exports = {
    retry,
    timeout,
    concurrent
};