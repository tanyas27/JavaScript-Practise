/*Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance: */

let arr = [1, 2, 3];

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...
function shuffle(arr){
  let ctr = arr.length , temp, index;
  while(ctr>0){
     index = Math.floor(Math.random()*ctr);
     ctr--;
     temp = arr[ctr];
     arr[ctr] = arr[index];
     arr[index] = temp;
  }
  return arr;
}