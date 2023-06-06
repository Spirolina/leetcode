/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) return [];
    let temp = [];
    let index = 0;
    let direction = 0;

    for (let i = 0; i < rowsCount; i++) {
        temp.push(new Array(colsCount));
    }


    for (let i = 0; i < colsCount * rowsCount; i++){
        if (i % rowsCount === 0 && i !== 0) {
            index++;
            direction = !direction;
        }
        if(!direction ) temp[i % rowsCount][index] = this[i];
        if(direction) temp[rowsCount - (i % rowsCount) - 1][index] = this[i];
        
    }
 
    return temp;
}