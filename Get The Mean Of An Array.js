function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array

  //   let result = 0;
  //   let average = 0;
  //   for (let i = 0; i < marks.length; i++) {
  //     result += marks[i];
  //   }
  //   return Math.round((average = result / marks.length));

  return Math.trunc(
    marks.reduce((acc, current) => acc + current) / marks.length
  );
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
