function removeEveryOther(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (i % 2 === 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;

  //   for (let i = 0; i < arr.length; i += 2) {
  //     newArr.push(arr[i]);
  //   }
  //   return newArr;
  return arr.filter((ele, i) => i % 2 === 0);
}
// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
