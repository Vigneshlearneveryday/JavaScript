// Methods 

// 1: tofixed()
let amount = 49.9753;
let result1 = amount.toFixed(1);
// console.log(result);

// 2: parseFloat() and parseInt()

let qty = "50";
let convertedNumber = parseFloat(qty);
console.log(convertedNumber);
console.log(qty);
console.log(typeof convertedNumber);
console.log(typeof qty);

// comparison operators

//!---Define the variables---
let ageOfJohn = 25; //Number
let ageOfDoe = 30;
let userInput = "25"; //string
// using == (double equal to)
// console.log(ageOfJohn == userInput);

// using ===
// console.log(ageOfJohn === userInput);

// using !=
// console.log(ageOfJohn != ageOfDoe);

// using !==
// console.log(ageOfJohn !== userInput);

// using >
// console.log(ageOfJohn > ageOfDoe);

// using >=
// console.log(ageOfJohn >= ageOfDoe);

// using <
// console.log(ageOfJohn < ageOfDoe);

// using <=
console.log(ageOfJohn <= ageOfDoe);

// Assignment Operators

// Assignment operator (=)

// Definition: The assignment operator assigns a value to a variable.

// Case study: You just purchased 10 apples from the grocery store. How can you use JavaScript to keep track of how many apples you now have?

let myTotalApples = 10;

// Assignment operator (+=)

// Definition: The addition assignment operator adds the value on the right to the variable on the left and then assigns the result to the variable on the left.

// Case study: As the mayor of a small town, the current population of your town is 100. During the year, an additional 50 people moved to your town. How would you calculate the total population now?

let population = 100;

//!
population += 50;

// Assignment operator (-=)
// Case study: You have $200 in your wallet. After buying a book for $30, how can you calculate how much money you now have in your wallet?

let moneyInWallet = 200;
moneyInWallet -= 30;

// Assignment operator (*=)
// Case study: You have 12 cookies and decide to break each one into 3 pieces to share with your friends. How would you calculate the total number of cookie pieces you have now?

let cookiesInJar = 12;
cookiesInJar *= 3;
// console.log(cookiesInJar);


// Division assignment operator (/=)
// Case study: You have a 200-page book that you want to study over the next 5 days, planning to read the same number of pages each day. How would you calculate how many pages you need to read each day?

let myTotalPages = 200;
myTotalPages /= 5;

// Remainder assignment operator (%=)

// Case study: You have 25 concert tickets that you want to distribute equally among 4 friends. How would you calculate the number of leftover tickets?

let tickets = 25;
tickets %= 4;

// Exponentiation assignment operator (**=)
// Case study: In a math problem, you are given a base number of 2 and asked to raise this number to the power of 4. How would you calculate this?

let base = 2;
base **= 4;

//! Logical Operators:

//Logical AND (&&)
// Definition: The logical AND operator returns true if both operands are true. Otherwise, it returns false.

// Case Study: You want to decide whether to go to the park based on two conditions: if it's sunny and warm outside.

let isSunny = false;
let isWarm = true;
let shouldGoTopark = isSunny && isWarm;

// Logical OR (||)
// Definition: The logical OR operator returns true if either or both of the operands are true. It returns false only if both operands are false.

// Case Study: You want to check if it's not raining so that you can go outside.

let isRaining = false;
let isSnowy = false;
let isNight = true;
const result = isRaining || isSnowy || isNight;
// console.log(result);


//! String Operators (+)
// Let's consider a case where you want to create a personalized greeting message by combining a fixed greeting string with a variable name string.

let greeting = "Hello, ";
let firstName = "Vignesh";
let lastName = "Developer";
let message = greeting + firstName + " " + lastName;
// console.log(message);


//+=

let sentence = "I love";
sentence += " " + "Javascript";
// console.log(sentence);

let value = "10" + 10;
// console.log(value);
