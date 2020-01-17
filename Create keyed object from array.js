/*Let’s say we received an array of users in the form {id:..., name:..., age... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 */
 function groupById(users){
    let obj = {}; 
    for(let a of users){
       obj[a.id] = a;
    }
    return obj;
  }
 let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
 let usersById = groupById(users);
 console.log(usersById);
 
  /*
  // after the call we have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20}
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */-
 /* OR using reduce()*/
 function groupById(users){
    users.reduce((obj,value) => {obj[value.id] = value},{});
    return obj;
  }