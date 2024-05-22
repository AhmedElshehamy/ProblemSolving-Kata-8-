// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     } else continue;
//   }
//   return sum;
// }

// console.log(positiveSum([1, 2, -5, -3]));

// Another Solution

function positiveSum(arr) {
  return arr
    .filter(function (x) {
      return x > 0;
    })
    .reduce((acc, current) => acc + current, 0);
}

console.log(positiveSum([1, -2, -5, -3]));
