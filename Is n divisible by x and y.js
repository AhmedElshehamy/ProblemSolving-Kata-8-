function isDivisible(n, x, y) {
  //   if (Number.isInteger(n / x) && Number.isInteger(n / y)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   return n % x == n % y;
  return n % x == 0 && n % y == 0;
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(48, 3, 4));
