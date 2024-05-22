function reverseWords(str) {
  //   let arr = str.split(" ");
  //   let newArr = [];
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     newArr.push(arr[i]);
  //   }
  //   return newArr.join(" ");
  //   return str.split(" ").reduce((acc, current) => current + " " + acc);
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!"));
