/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    console.log('a')
    for (const [key, value] of Object.entries(context)) {

        this.prototype[key] = value;
    } 
    
    return this.prototype.constructor(...args);
    
}