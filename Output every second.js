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

/************ OR **************/ 
function printNumbers1(from, to){
    setInterval(function (){
        console.log(from++);
        if(from>to){
            clearInterval(timerId);  
          }
    },1000);
}
printNumbers1(11,20);

/************** OR ***************/
function printNumbers2(from,to){
 setTimeout(function  printN(){
      console.log(from++);
      if(from<to)
        setTimeout(printN(),1000);      
  },1000);
}
printNumbers2(21,29);