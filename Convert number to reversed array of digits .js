// Convert number to reversed array of digits
//Solution
// 1-Change Variable To Strings

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x))
    .reverse();
}
// console.log(digitize(567));

function reverseArrayDigits(number) {
  //Convert Num To String
  let numStr = String(number);
  // Initialize an empty array to store reversed digits
  let reversedArray = [];
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversedArray.push(Number(numStr[i]));
  }
  return reversedArray;
}
// reverseArrayDigits(254);
const originalNumber = 12345;
const reversedDigits = reverseArrayDigits(originalNumber);
console.log(reversedDigits);
