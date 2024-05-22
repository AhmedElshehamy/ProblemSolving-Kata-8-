function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}
console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(4, 27));
