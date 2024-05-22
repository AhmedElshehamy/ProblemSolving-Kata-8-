function countBy(x, n) {
  let z = [];
  //   for (let i = 1; i <= n; i++) {
  //     z.push(x * i);
  //   }
  //   return z;

  //   return Array.from(Array(n + 1).keys())
  //     .slice(1)
  //     .map((ele) => ele * x);

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

console.log(countBy(2, 5));
