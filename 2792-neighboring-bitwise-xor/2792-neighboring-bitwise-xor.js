/**
 * @param {number[]} derived
 * @return {boolean}
 */



var doesValidArrayExist = function (derived) {
    const result = derived.reduce((total, num) => total ^ num, 0);
    return result === 0;
};