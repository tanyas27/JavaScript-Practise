/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr. */
function unique(arr) {
    let set = new Set(arr);
     return Array.from(set);
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O

  //**************OR************ Second Method without using Set()
  function unique(arr){
   let result = [];
   for(let s of arr){
       if(!result.includes(s)){
         result.push(s);
       }
   }
   return result;
  }