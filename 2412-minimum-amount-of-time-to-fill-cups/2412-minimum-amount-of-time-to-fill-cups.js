/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    let totalCups = amount.reduce((cup, sum) => sum += cup, 0);
    let n = totalCups;
    let counter = 0;
    
    for (let i = 0; i <= n; i++) {
        if (totalCups === 0) return counter;
        amount = amount.sort((a, b) => b - a);
        let max = amount[0];
        let median = amount[1];
        if (max + median >= 2 && median > 0) {
            amount[0] = max - 1;
            amount[1] = median - 1;
            totalCups -= 2;
        } else {
            amount[0] = max - 1;
            totalCups--;

        }
        counter++;
        
    }

    return counter;
};