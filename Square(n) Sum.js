function squareSum(numbers) {
  //   let arr = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     arr.push(Math.pow(numbers[i], 2));
  //   }
  //   return arr.reduce((acc, current) => acc + current, 0);
  return numbers
    .map((ele) => ele * ele)
    .reduce((acc, current) => acc + current, 0);
}

console.log(squareSum([1, 2, 3]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
