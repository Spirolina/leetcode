/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    let cache = {};
    for (let i = 0; i < this.length; i++) {
        let field = fn(this[i]);
        
        if (cache[field]) {
            cache[field].push(this[i]);
            continue;
        }

        cache[field] = [this[i]];
    }
    
    return cache;
};