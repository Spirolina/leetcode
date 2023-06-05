/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < word1.length; i++) {
        let char = word1[i];

        for (let j = 0; j < word2.length; j++) {
            if (word2[j] === char) count2++;
            if (word1[j] === char) count1++;
        }
        if (Math.abs(count1 - count2) > 3) {
            return false;
        }
        count1 = 0;
        count2 = 0
    }

    count1 = 0;
    count2 = 0;
    for (let i = 0; i < word2.length; i++) {
        let char = word2[i];

        for (let j = 0; j < word2.length; j++) {
            if (word2[j] === char) count2++;
            if (word1[j] === char) count1++;
        }
        if (Math.abs(count1 - count2) > 3) {
            return false;
        }
        count1 = 0;
        count2 = 0
    }
    return true;
};