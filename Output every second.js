/* Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
Make two variants of the solution.
Using setInterval.
Using nested setTimeout. */
function printNumbers(from, to){
    console.log(from++);
    if(from<=to){
      let timerId = setInterval(printNumbers(from,to),1000);  
    }
    else{
      clearInterval(timerId);
    } 
}
printNumbers(2,8);