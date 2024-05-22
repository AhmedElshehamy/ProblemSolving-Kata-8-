function arrayPlusArray(arr1, arr2) {
  // return arr.reduce((acc, current) => acc + current, 0);
  //   let sum = 0;
  //   let arr = arr1.concat(arr2);
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum;
  //   return arr1.concat(arr2).reduce((acc, current) => acc + current, 0);
  let arr = [...arr1, ...arr2];
  let sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
