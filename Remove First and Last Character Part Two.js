function array(string) {
  let arr = string.split(",");
  if (arr.length <= 2) {
    return null;
  }
  //   else {
  //     return arr.slice(1, -1).join(" ");
  //   }
  // Another Solution
  //   let newArr = [];
  //   for (let i = 1; i < arr.length - 1; i++) {
  //     newArr.push(arr[i]);
  //   }
  //   return newArr.join(" ");
  // Another Solution

  arr.pop();
  arr.shift();
  return arr.join(" ");
}

console.log(array("1,2,3,4,5"));
console.log(array("1 B"));
console.log(array(""));
console.log(array("1,2,3,4"));

console.log(array("A1,B2"));

console.log(array("A1,B2,C3,D4,E5"));
