/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let out = [];
    let cache = []
    for (let i = 0; i < nums.length; i++) {
        cache.push(nums[i]);

       

       

        if (nums[i] === nums[i + 1] - 1) {
            cache.push(nums[i]);
            continue;
        } else {
            cache.push(nums[i]);
            let result = [cache[0], cache[cache.length - 1]]
            if (result[0] !== result[1]) {
                out.push(result[0]+ '->' +result[1])
            } else {
                out.push(String(result[0]))
            }
            cache = [];
        }
    }

    return out;
};