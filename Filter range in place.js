/*filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b.
 The test is: a ≤ arr[i] ≤ b. */
 let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
function filterRangeInPlace(arr,a,b)
{
 for(let i =0; i< arr.length ; i++)
  {
    if(arr[i]>= a && arr[i] <= b){
       
    }
    else{
        arr.splice(i,1);
        i--;
    }
  }
}