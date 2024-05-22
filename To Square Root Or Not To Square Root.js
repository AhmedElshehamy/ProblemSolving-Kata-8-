function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    let newArray = array.map((ele) =>
      Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * ele
    );
    return newArray;
  }
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// console.log(Math.sqrt(2));
// console.log(Number.isInteger(Math.sqrt(4)));
