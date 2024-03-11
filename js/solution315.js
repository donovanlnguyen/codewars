// before you run out of sticks and cobblestones. Within the array would be a series of strings with the exact names of the materials listed below. A single stone pickaxe is made of 3 "Cobblestone" and 2 "Sticks", check if your given array contains enough "Sticks" and "Cobblestone" to craft a single stone pickaxe or even more. Do not count any materials apart from "Cobblestones", "Sticks" and "Wood". Wood can be converted into 4 sticks!

// Here are the materials you would expect in an array:

// Sticks
// Cobblestone
// Stone (These are different from cobblestone and cannot be used to make a stone pickaxe.)
// Wool
// Dirt
// Wood (Can be treated as sticks, typically 4 sticks for 1 wood)
// Diamond
// Array sizes are randomized and range from 1 - 200 with randomized contents.

// Examples:

// Array: ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]
// Returned: 1

// Array: ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]
// Returned: 1

// Array: []
// Returned: 0

// Array: ["Sticks", "Wool", "Cobblestone"]
// Returned: 0

// Array: ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"]
// Returned: 2
// Good Luck :D

// Made by miggycoder, this is my first kata I ever created.

// function stonePick(arr) {
//     return Math.min(Math.floor(arr.filter(e=>e=="Cobblestone").length/3), (Math.floor(arr.filter(e=>e=="Sticks").length /2) + Math.floor(arr.filter(e=>e=="Wood").length*4/2)));
//   }

  const stonePick = arr => {
    let counter = [0, 0];
    for (let i = 0; i < arr.length; i++)
      if (arr[i] === 'Wood') counter[1] += 4;
      else if (arr[i] === 'Sticks') counter[1]++;
      else if (arr[i] === 'Cobblestone') counter[0]++;
    return Math.min(counter[0] / 3 | 0, counter[1] / 2 | 0);
  };