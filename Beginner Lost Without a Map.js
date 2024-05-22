function maps(x) {
  //   return x.map((ele) => ele + ele);
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    newArr.push(x[i] + x[i]);
  }
  return newArr;
}

console.log(maps([1, 2, 3]));
