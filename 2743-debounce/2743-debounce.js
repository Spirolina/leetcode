/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */


var debounce = function (fn, t) {
    let timeout;
    let start = Date.now();
    return function (...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn(...args);
                timeout = 0;
            }, t)
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn(...args);
                timeout = 0;
            }, t)
        }
    }
};