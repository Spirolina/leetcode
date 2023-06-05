/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = s.split(/(?=[-+()])|(?<=[-+()])/g,)
    let total = 0;
    function calc(sub) {
        let sum = 0;
        let operation = '+';
        for (let i = 0; i < sub.length; i++) {
            switch (sub[i]) {
                case '+':
                    operation = '+'
                break;
                
                case '-':
                    operation = '-'
                    break;
                
                default:
                    if (operation === '+') sum += Number(sub[i]);
                    if (operation === '-') sum -= Number(sub[i]);
            }
        }

        return sum;
    }

    let startingIndex;
    for (let i = 0; i < stack.length; i++) {
        if (stack.length === 1) break;
        switch (stack[i]) {
            case '(':
                startingIndex = i;
                break;
            case ')':
                let temp = stack.slice(startingIndex + 1, i);
                let subTotal = calc(temp);
                stack.splice(startingIndex, temp.length +2  , subTotal);
                i = 0;
                startingIndex = 0;
                break;
            case ' ':
                stack.splice(i, 1);
                i=0
                break;
            default:
                stack[i] = stack[i];

                continue;
            
        } 
    }
    total = calc(stack);
    return total;
};
