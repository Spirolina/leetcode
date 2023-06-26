/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;
    let i = 0;
    let production = 1;
    if (x < 0) production = -1;
    x = Math.abs(x);
    while (x) {
        let step = Math.floor(Math.log10(x));
        num += (x % 10) * Math.pow(10, step);
        x = Math.floor(x / 10);
        i++;
        step--;
        
    }
    if(num<-1*Math.pow(2, 31) || num >= (Math.pow(2,31) -1)) return 0;

    return num * production;
};
