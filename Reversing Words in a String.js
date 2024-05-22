function reverse(string) {
  //   return string.split(" ").reverse().join(" ");
  return string.split(" ").reduce((acc, current) => current + " " + acc);
  //   const strArr = string.split(" ");
  //   const arr = [];
  //   for (let i = strArr.length; i >= 0; i -= 1) {
  //     arr.push(strArr[i]);
  //   }
  //   return arr.join(" ");
}

console.log(reverse("Hello World"));
console.log(reverse("Hi There."));
