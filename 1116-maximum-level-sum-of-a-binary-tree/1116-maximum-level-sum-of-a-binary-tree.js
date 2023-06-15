/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let data = new Map();
    data.set(1, root.val);
    var getSum = function(root, level) {
        if(!root.left && !root.right) return;
        let cacheSum = 0;
        if(root.left) cacheSum += root.left.val;
        if(root.right) cacheSum += root.right.val;
        if(!data.has(level)) {
            data.set(level, cacheSum);
        } else {
            let sum = data.get(level)
            data.set(level, sum+= cacheSum);
        }
        
        if(root.right) getSum(root.right, level+1);
        if(root.left) getSum(root.left, level+1);
        return;
    }
    getSum(root, 2);

    let max = -Infinity;
    let maxLevel;
    
    data.forEach((sum, level) => {
            if (sum > max) {
                    maxLevel = level;
                    max = sum;
            }
    })
    return maxLevel;

};