// API utility functions

async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

function buildQueryString(params) {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}

function handleApiError(error) {
    if (error.response) {
        switch (error.response.status) {
            case 400: return { error: 'Bad Request', details: error.message };
            case 401: return { error: 'Unauthorized', details: error.message };
            case 404: return { error: 'Not Found', details: error.message };
            default: return { error: 'API Error', details: error.message };
        }
    }
    return { error: 'Network Error', details: error.message };
}

module.exports = {
    fetchWithRetry,
    buildQueryString,
    handleApiError
};
