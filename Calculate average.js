function findAverage(array) {
  //   if (array === null || array.length === 0) {
  //     return 0;
  //   }
  //   let arrLen = array.length;
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  //   }
  //   return sum / arrLen;
  //   return (average = sum / arrLen);

  ////////////////////////////////////////////////////

  //   if (array === null || array.length === 0) {
  //     return 0;
  //   }

  //   let sum = array.reduce((acc, current) => acc + current);
  //   return sum / array.length;
  return array.length == 0
    ? 0
    : array.reduce((acc, current) => acc + current) / array.length;
}

console.log(findAverage([1, 2, 3]));
console.log(findAverage([]));
