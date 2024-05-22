function simpleMultiplication(number) {
  //   return number % 2 != 0 ? number * 9 : number * 8;
  return number * (number % 2 != 0 ? 9 : 8);
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(9));
