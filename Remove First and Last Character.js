function removeChar(str) {
  //   return str.slice(1, -1);
  //   return str.slice(1, str.length - 1);
  //   return str.substring(1, str.length - 1);
  //   return str.substr(1, str.length - 2);
  ///////////////////////////////////////////
  //   let arr = str.split("");
  //   arr.shift();
  //   arr.pop();
  //   return arr.join("");

  let arr = [];
  for (let i = 1; i < str.length - 1; i++) {
    arr.push(str[i]);
  }
  return arr.join("");
}

console.log(removeChar("eloquent"));
