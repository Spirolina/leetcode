/**
 * @param {string} text
 * @return {number}
 */

var distinctEchoSubstrings = function (text) {
    let strs = new Set();
    for (let i = 1; i < text.length/2 +1; i++) {
        for (let j = 0; j < text.length; j++) {
            let left = text.slice(j, j + i);
            let right = text.slice(j+i, j+2*i)
            if (left === right) {
                strs.add(left+right);
            }
        }
    }

    return strs.size
};