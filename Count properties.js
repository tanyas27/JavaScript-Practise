/* Write a function count(obj) that returns the number of properties in the object: */
let user = {
    name: 'John',
    age: 30
  };
  
  console.log(count(user)); // 2
function count(user){
   return Object.keys(user).length;
}