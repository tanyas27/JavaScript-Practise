/* Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.  
For instance:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:
Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
P.S. Which solution variant is the fastest? The slowest? Why?
P.P.S. Can we use recursion to count sumTo(100000)? */
/* 1 */
function sumTo(n) {
    let sum=0;
    for(let i=1; i<=n ; i++){
       sum += i;
    }
    return sum;
}
/* 2 */
function sumTo(n) {
    return (n==1)? 1 :n + sumTo(n-1);
}
/* 3  */
function sumTo(n) {    
    return n*(n+1)/2;
}
console.log( sumTo(100) ); // 5050
