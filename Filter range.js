/*filterRange(arr, a, b) that gets an array arr, 
looks for elements between a and b in it and returns an array of them. */
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
function filterRange(arr,a,b){    
    return arr.filter(x => ( a <= x && b >= x));
}