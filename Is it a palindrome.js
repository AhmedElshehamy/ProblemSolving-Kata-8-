function isPalindrome(x) {
  //   if (x[0].toLowerCase() === x[x.length - 1].toLowerCase()) {
  //     return true;
  //   }
  //   if (x === "") {
  //     return true;
  //   } else if (x[0].toLowerCase() === x[x.length - 1].toLowerCase()) {
  //     return true;
  //   } else {
  //     return false;
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome(""));
console.log(isPalindrome("nOwTAzun"));
str = "Hello";
// console.log(str[0].toLowerCase());
