/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let cols = [];
    let n = grid.length;


    let cache = [];
    for (let i = 0, j = 0; i < n && j < n; j++) {
        cache.push(grid[j][i]);

        if (j === n - 1) {
            i++;
            cols.push([...cache]);
            cache = [];
            j =  -1;
        }
    }

    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i].join() === cols[j].join()) {
                counter++;
            }

        }
    }

    
    return counter;
};