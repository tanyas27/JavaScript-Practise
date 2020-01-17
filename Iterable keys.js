/* We’d like to get an array of map.keys() in a variable and 
then do apply array-specific methods to it, e.g. .push. */

let map = new Map();
map.set("name", "John").set("age",25);
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);