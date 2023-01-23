// Write a function that takes in an array of integers from 0-9, and 
// returns a new array:

// Numbers with no identical numbers preceding or following it 
// returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
function setReducer(arr) {
    while(arr.length-1) {
      arr = arr.reduce((a,v,i)=>{
        if(v!=arr[i-1]) a.push(1)
        else a[a.length-1]++
        return a
      }, [])
    }
    return arr.pop()
  }

//   function setReducer(input) {
//     // code here
//     if(input.length === 1) return input[0]
//     let newInput = []
//     for(let i = 0,count = 1; i < input.length; i++){
//       if(input[i] === input[i+1]){
//         count +=1
//       }else{
//         newInput.push(count)
//         count = 1
//       }
//     }
    
//     console.log(newInput)
//     return setReducer(newInput)
//   }