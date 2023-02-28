// 1. Two Sum 

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

function twoSum (nums, target){
    let result = new Map()
    for(let i=0; i < nums.length; i++){
        let num1 = nums[i]
        let num2 = target - num1;
        if(result.has(num2)) {
            return[i, result.get(num2)];
        }
        result.set(num1, i)
    }
}