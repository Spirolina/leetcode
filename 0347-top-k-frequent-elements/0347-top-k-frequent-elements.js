/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    nums = nums.sort((a, b) => a - b)
    let outs = [];
    let count = 1;
    let minCount;
    let result;
    for (let i = 0; i < nums.length; i++) {

        if (i === nums.length - 1) {
            if (outs.length === k) {
                if (count > minCount) {
                    outs.splice(0, 1, [nums[i], count]);
                }
            }
        }
        if (nums[i] === nums[i + 1]) {
            count++;
        } 

        if (nums[i] !== nums[i + 1]) {
            if (outs.length === k) {
                if (count <= minCount) {
                    count = 1;
                    continue;
                }
                outs.splice(0, 1, [nums[i], count]);
                count = 1;
                continue;
            }
            outs.push([nums[i], count]);
            count = 1;
        }
        if (outs.length !== 0) {
            outs = outs.sort((a, b) => a[1] - b[1])
            minCount = outs[0][1]
        }
    }
    result = outs.map(a => a[0])
    return result;
    
};