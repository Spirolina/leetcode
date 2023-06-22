/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */



var minCost = function (nums, cost) {
    let minCost = Infinity
    let sorted = [...nums].sort((a, b) => a -b);
    let min = 0
    let max = nums.length - 1;
    let mid = Math.floor((min + max)/2)
    let findCost = (nums, cost, targetIndex) => {
        let target = sorted[targetIndex];
        return nums.reduce((sum, item, index) => sum += Math.abs(item - target) * cost[index], 0)
    }

    let i = 1;
    while (min < max) {
        if (mid + i === nums.length) break;
        let cost1 = findCost(nums, cost, mid);
        let cost2 = findCost(nums, cost, mid + i);

        if (cost2 > cost1) {
            if (cost1 < minCost) minCost = cost1;
            i = 1;
            max = mid;
            mid = Math.floor((min + max)/2)
        
        } else if(cost2 < cost1) {
            if (cost2< minCost) minCost = cost2;
            i = 1;
            min = mid + 1;
            mid = Math.floor((min + max) / 2)
        } else {
            if (cost2< minCost) minCost = cost2;
            i++;
        }


    }


    return minCost;

    
};