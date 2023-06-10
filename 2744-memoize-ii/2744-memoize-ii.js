/**
 * @param {Function} fn
 */
function memoize(fn) {
    const globalCache = new Map();

    return function (...args) {
        let currentCache = globalCache;
        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) return currentCache.get('result');

        const result = fn(...args);
        currentCache.set('result', result);
        return result;
    }
}