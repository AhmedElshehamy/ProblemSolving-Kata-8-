var summation = function (num) {
  //   let result = 0;
  //   for (let i = 1; i <= num; i++) {
  //     result += i;
  //   }
  //   return result;
  return Array.from(Array(num + 1).keys()).reduce(
    (acc, current, index) => acc + index
  );
};

console.log(summation(8));
console.log(summation(1));
console.log(summation(2));

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }
