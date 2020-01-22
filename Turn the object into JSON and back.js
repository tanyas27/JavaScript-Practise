/* Turn the user into JSON and then read it back into another variable.*/
let user = {
    name: "John Smith",
    age: 35
};
let jsonobj = JSON.stringify(user);
let stringobj = JSON.parse(jsonobj);
console.log(jsonobj);
console.log(stringobj);