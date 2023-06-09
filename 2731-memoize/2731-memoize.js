/**
 * @param {Function} fn
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        const field = args.join();
        if (cache[field] !== undefined) {
            return cache[field];
        }
        const result = fn(...args);
        cache[field] = result;
        return result;
    }
}