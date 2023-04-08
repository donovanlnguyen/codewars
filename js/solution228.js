// 136.Single Number 
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
var singleNumber = function(nums) {
    nums.sort();
for (var i = 0; i < nums.length; i += 2) {
if (nums[i] != nums[i + 1]) {
return nums[i];
}
}
};

// var singleNumber = function(nums) {
//     if(nums.length<0){
//         return 0
//     }
//     let num = 0 ;
//     for (let i = 0; i<nums.length; i++ ){
//         num^=nums[i]
//     }
//     return num
// };