/* Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.*/
function topSalary(salaries) {
    if(!Object.entries(salaries)) return null;
    let maxS =0 , maxName ="" ;
    for(let [key,value] of Object.entries(salaries))
    {
       if(value>maxS){
           maxS = value;
           maxName = key;
       }
       
    }
    return maxName ;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));