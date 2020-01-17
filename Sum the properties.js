/*There is a salaries object with arbitrary number of salaries.
 Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and
 the for..of loop.
 If salaries is empty, then the result must be 0. */
 let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  let st = {};
  
  console.log( sumSalaries(salaries) ); // 650
  function sumSalaries(salaries){
    return Object.values(salaries).reduce((prev,item) => prev + item , 0);
  }

  /******OR *******/
  function sumSalaries(salaries){
      let sum= 0;
      if(Object.values(salaries).length){
       for(let s of Object.values(salaries)){
         sum+= s;
        }
      }
      return sum ;
    }