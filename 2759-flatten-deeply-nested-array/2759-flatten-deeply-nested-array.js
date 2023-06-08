/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++){
            let index = 0;
            if (typeof arr[j] !== 'number') {
                index = arr[j].length;
                arr.splice(j, 1, ...arr[j])
                j = j + index - 1;
            }
        }
    }
    return arr;
};