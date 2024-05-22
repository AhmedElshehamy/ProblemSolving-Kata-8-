// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
  //   let positivesNumbers = [];
  //   let sumNegativeNumbers = 0;

  //   for (let i = 0; i < input.length; i++) {
  //     if (input[i] > 0) {
  //       positivesNumbers.push(input[i]);
  //     } else {
  //       sumNegativeNumbers += input[i];
  //     }
  //   }
  //   return [positivesNumbers.length, sumNegativeNumbers];
  // Another Solution
  if (input === null || input.length == 0) return;
  let positivesNumbers = input.filter((x) => x > 0).length;
  let sumNegativeNumbers = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current, 0);
  return [positivesNumbers, sumNegativeNumbers];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
