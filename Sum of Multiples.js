function sumMul(n, m) {
  let sum = 0;
  if (n <= 0 || m <= 0) return "INVALID";
  for (let i = n; i < m; i = i + n) {
    sum += i;
  }
  return sum;
}

console.log(sumMul(0, -1));
console.log(sumMul(3, 13));
