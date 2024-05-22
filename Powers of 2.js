function powersOfTwo(n) {
  //   let newArr = [];
  //   let arr = Array.from(Array(n).keys());
  //   for (let i = 0; i <= arr.length; i++) {
  //     newArr.push(2 ** i);
  //   }
  //   return newArr;
  //   return Array.from(Array(n + 1).keys()).map((ele) => 2 ** ele);
  //   let result = [];
  //   for (let i = 0; i <= n; i++) {
  //     result.push(2 ** i);
  //   }
  //   return result;
  //   return [...Array(n + 1)].map((_, ele) => Math.pow(2, ele));
  return Array(n + 1)
    .fill(0)
    .map((_, ele) => Math.pow(2, ele));
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
console.log(powersOfTwo(4));

console.log("Ahmed");
