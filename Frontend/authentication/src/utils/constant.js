// Database URL
export const DB_URL = import.meta.env.VITE_DB_URL

// Option for fetch
export const options = (method, data) => {
    return {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data })
    }
}