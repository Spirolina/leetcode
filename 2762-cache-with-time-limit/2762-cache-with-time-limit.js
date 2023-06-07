var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    this.deleter;

    let clear;
    if (this.cache.has(key)) {
        clearTimeout(this.cache.get(key).deleter);

                        this.cache.set(key, { value, duration });



        clear = () => {

        
            return new Promise(resolve => {
               this.cache.get(key).deleter = setTimeout(() => {
                        this.cache.delete(key);
                        resolve(key);
                    
                    
                }, this.cache.get(key).duration)
            })
        } 
            clear();

        return true;
    }
            this.cache.set(key, {value, duration});

    clear = () => {


        return new Promise(resolve => {
            this.cache.get(key).deleter = setTimeout(() => {
                    this.cache.delete(key);
                    resolve(key);
                
                
           }, this.cache.get(key).duration)
        })
    } 
    clear();
    
    return false;

};

TimeLimitedCache.prototype.get = function (key) {
    if (this.cache.has(key)) return this.cache.get(key).value;
    return -1
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.set(1, 42, 2000)); // false

console.log(obj.get(1)) // 42
console.log(obj.count()) // 1
 