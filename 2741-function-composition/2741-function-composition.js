/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    let func = (x, cbs) => {
        if (cbs.length !== 0) {
            let cb = cbs.pop()
            let newX = cb(x);
            return func(newX, cbs);
        } else {
            return x
        }

    }
   

    return function (x) {

        return func(x, functions);
    }
};