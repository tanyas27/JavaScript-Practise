//code to sort it in decreasing order.
let arr = [5, 2, 1, -10, 8];

arr.sort((a,b)=> a>b ? -1 : 1);

alert( arr ); // 8, 5, 2, 1, -10

// OR
 
arr.sort((a, b) => b - a);

alert( arr );