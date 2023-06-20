/**
 * @param {Array} arr
 * @return {Generator}
 */

var inorderTraversal = function* (arr) {
    let results = []
    let iter = function (sbArr) {
        if (sbArr.length !== undefined) {
            for (let i = 0; i < sbArr.length; i++) {
                iter(sbArr[i]);
            }
    
         
        } else {
            
            results.push(sbArr);
        }
    }
    
    iter(arr);

    for (let i = 0; i < results.length; i++) {
        yield results[i];
    }


}