// api/utils.ts
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

const fetchWithTimeout = (url, options, timeout = DEFAULT_TIMEOUT) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request Timeout')), timeout)
        )
    ]);
};

const createFetch = () => {
    return {
        get: async (url, headers = {}) => {
            try {
                const response = await fetchWithTimeout(url, {
                    method: 'GET',
                    headers: { ...DEFAULT_HEADERS, ...headers }
                });

                return await response.json();
            } catch (error) {
                throw error;
            }
        },
        post: async (url, data, headers = {}) => {
            try {
                const response = await fetchWithTimeout(url, {
                    method: 'POST',
                    headers: { ...DEFAULT_HEADERS, ...headers },
                    body: JSON.stringify(data)
                });

                return await response.json();
            } catch (error) {
                throw error;
            }
        }
        // 后面拓展
    };
};

export default createFetch;

