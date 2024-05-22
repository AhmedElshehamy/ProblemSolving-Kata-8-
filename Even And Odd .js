// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOdd(value) {
//   if (value % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// Another Solution

function evenOdd(value) {
  return value % 2 == 0 ? "Even" : "Odd";
}
console.log(evenOdd(-8));
console.log(evenOdd(-42));
console.log(evenOdd(10));
console.log(evenOdd(-9));
console.log(evenOdd(9));
