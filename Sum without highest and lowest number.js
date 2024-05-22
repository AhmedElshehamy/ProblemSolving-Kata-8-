// 1-Check if Empty Value return 0
// 2-Find The Hightest Number
// 3-Find The Lower Number
// 4-filter Array
// 5- Sum All Number in The Array
// function sumArray(array) {
//   if (array == null) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, current) => acc + current, 0);
// }
// console.log(sumArray([1, 3, 6, 2, 10, 4]));

// Test
// let newArray = [1, 3, 6, 2, 10, 4];
// console.log(newArray.sort((a, b) => a - b));

// Find MaxValue Number in Array

function findMaxValue(arr) {
  if (arr.length === 0) return undefined;

  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

// console.log(findMaxValue()]));

const numbers = [3, 7, 1, 9, 5, 2, 10];
const maxNumber = findMaxValue(numbers);
console.log("Maximum value:", maxNumber);
