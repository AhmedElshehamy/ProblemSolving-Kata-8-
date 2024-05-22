function addLength(str) {
  //   let arr = str.split(" ");
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(`${arr[i]} ${arr[i].length}`);
  //   }
  //   return newArr;
  return str.split(" ").map((ele) => `${ele} ${ele.length}`);
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
