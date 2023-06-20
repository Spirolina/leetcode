/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev = 0;
    let next = 1;
    let current = 1;
    let i = 0;
    while (true) {
        if (!i) yield prev;
        if (i === 1) yield current;
        if (i > 1) yield next;
        
        if (i > 1) {
            prev = current;
        current = next;
        next = prev + current;
        }
        
        i++;
    }
};