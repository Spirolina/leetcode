/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */


var debounce = function (fn, t) {
    let timeout;
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


let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
 