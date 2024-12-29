// Steps of creating and using a function

// Define the function (declaration)
//  function addNumbers (){
//    // write code in the function body
//    let x = 100;
//    let y = 200;
//    let sum = x + y;
//    console.log(sum);
//  }
// Call or use the function     // using or calling the function called function invocation 
// addNumbers()

// Function parameter or Inputs

function addNumbers(x,y) {
    let result = x + y;
    // console.log(result);
}
addNumbers(100,200);
addNumbers(1000,2000);

// Return Keyword 

// function MultiplyNumbers(x,y) {
//     let result = x * y;
//     // Return the result
//     return result;
// }
// let ans = MultiplyNumbers(8,8);
// console.log(ans);
// alert(ans);

// Function Expression
// Most of the we use to pass this function to another function so use this method and store it in a variable using const

const multiplyNumbers = function (x,y) {
    let result = x * y;
    return result;
}
let ans = multiplyNumbers(9,9);
console.log(ans);
alert(ans);