function between(a, b) {
  //   let arr = [];
  //   for (let i = a; i <= b; i++) {
  //     arr.push(i);
  //   }
  //   return arr;

  return Array(b - a + 1)
    .fill(a)
    .map((ele, i) => ele + i);
}
console.log(between(1, 4));
