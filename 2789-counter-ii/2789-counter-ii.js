/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = {
        count: init,
        increment: () => {
            return ++counter.count;
        },
        decrement: () => {
            return --counter.count;
        },
        reset: () => {
            counter.count = init;
            return counter.count;
        }
    }

    return counter;
};
