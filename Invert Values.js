function invert(array) {
  //   let inverse = array.map(function (ele) {
  //     if (ele > 0) {
  //       return ele * -1;
  //     } else {
  //       return ele * -1;
  //     }
  //   });
  //   return inverse;
  //////////////////////////////////////////////
  //  Another Solution
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i] * -1);
    } else {
      newArray.push(array[i] * -1);
    }
  }
  return newArray;
}

// console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
