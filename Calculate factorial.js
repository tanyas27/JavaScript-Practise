/* The task is to write a function factorial(n) that calculates n! using recursive calls.
P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6 */
function factorial(n) {
    return (n==1)? 1 : n * factorial(n-1) ;
}
console.log( factorial(5) ); // 120