function monkeyCount(n) {
  //   let newArr = [];
  //   for (let i = 0; i < n; i++) {
  //     newArr.push(i + 1);
  //   }
  //   return newArr;
  return Array.from(Array(++n).keys()).slice(true);
}
console.log(monkeyCount(10));
console.log(monkeyCount(1));
