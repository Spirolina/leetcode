
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode();
    let seek = result;
    let addition = 0;
    while (l1 || l2) {
        console.log(l1.val, l2.val)
        let sum = l1.val + l2.val + addition;
        addition = Math.floor(sum / 10);
        sum = sum - addition*10;
        seek.val = sum;
        if(!l1.next && !l2.next){
            if(addition){
                seek.val = sum;
                seek.next = new ListNode(addition);
            } 
             break;

        }

        seek.next = new ListNode();
        seek = seek.next;
        l1 = l1.next ? l1.next : new ListNode();
        l2 = l2.next ? l2.next : new ListNode();
   }
   return result
};