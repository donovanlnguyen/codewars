// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index where 
// it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length
   while(left < right) {
       const mid = left + Math.floor((right - left) / 2)
       if(nums[mid]===target) {
          return mid
       } else if(nums[mid] > target){
           right = mid
       } else {
           left = mid + 1
       }
   }
   return left
};