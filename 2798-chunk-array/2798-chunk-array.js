/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let chunked = [];
    let n = arr.length;
    for (let i = 0; i < n;) {
        console.log(i);
        let cache = arr.slice(i, i + size);
        chunked.push(cache);
        i += size;
    }
    return chunked;
};
