/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let num = 0;
    let originalX = x;
    let i = 0;
    
    while (x) {
        let step = Math.floor(Math.log10(x));
        num += (x % 10) * Math.pow(10, step);
        x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
        i++;
        step--;
        
    }

    return originalX === num;
};