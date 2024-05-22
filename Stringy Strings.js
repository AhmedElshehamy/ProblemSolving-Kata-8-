function stringy(size) {
  let arr = Array.from(Array(size).keys());
  return arr.map((ele, index) => (index % 2 === 0 ? 1 : 0)).join("");
}

console.log(stringy(1));
console.log(stringy(12));
