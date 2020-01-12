function getSecondLargest(nums) {
    // Complete the function
   let first = Math.max(...nums);
   let second = Math.min(...nums);
   for(let i =0; i<nums.length;i++){
       if(first < nums[i]){
           second= first;
           first = nums[i];
       }
       else if (second < nums[i] && nums[i]!=first){
           second = nums[i];
       }
    }
    return second ;
}
let arr = [2,3,6,6,5];

getSecondLargest(arr);