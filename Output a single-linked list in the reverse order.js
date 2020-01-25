/* Output a single-linked list from the previous task Output a single-linked list in the reverse order.
Make two solutions: using a loop and using a recursion.*/
function printReverse(list) {
   if(link.next) 
    printReverse(list.next);
   console.log(list.value) ;
}
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
printReverse(list);