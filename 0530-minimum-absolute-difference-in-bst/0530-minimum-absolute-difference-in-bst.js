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



var minDiffOfNode = function(root) {

    let cacheDiff;
    if(root.left && root.right) {
        cacheDiff = Math.min((root.val - root.left.val), (root.right.val - root.val));
    }
    
    if(!root.left && root.right) {
        cacheDiff = root.right.val - root.val;
    }

    if(root.left && !root.right) {
        cacheDiff = root.val - root.left.val
    }

    var leftDiff = function (root, value) {
        while(root) {

            if(root.right) root = root.right;
            let diff = value - root.val
            if(diff < cacheDiff) cacheDiff = diff;

            if(!root.right) break;
        }
    }

    var rightDiff = function (root, value) {
        while(root) {
            if(root.left) root = root.left;

            let diff = root.val - value;
            if(diff < cacheDiff) cacheDiff = diff;
            if(!root.left) break;
        }
    }

    rightDiff(root.right, root.val);
    leftDiff(root.left, root.val);
    
    return cacheDiff;
}


var getMinimumDifference = function(root) {
    let minDiff;
    if(root.left && root.right) {
        minDiff = Math.min((root.val - root.left.val), (root.right.val - root.val));
    }
    
    if(!root.left && root.right) {
        minDiff = root.right.val - root.val;
    }

    if(root.left && !root.right) {
        minDiff = root.val - root.left.val
    }

    var leftDiff = function(root) {
        if(minDiff === 1) return;
        let newDiff = minDiffOfNode(root);
        if(newDiff < minDiff) minDiff = newDiff;

        if(root.left) leftDiff(root.left);
        if(root.right) rightDiff(root.right);

        return;

    }

    var rightDiff = function(root) {
        if(minDiff === 1) return;

        let newDiff = minDiffOfNode(root);
        if(newDiff < minDiff) minDiff = newDiff;

        if(root.left) leftDiff(root.left);
        if(root.right) rightDiff(root.right);

        return
    }


    rightDiff(root);
    leftDiff(root);
    return minDiff;
    
    


        
    
};