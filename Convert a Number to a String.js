function numberToString(num) {
  //   return String(num);num
  //   return num.toString();
  //   return `${num}`;
  //   return num.toFixed();
  //   return "" + num;
  //   return JSON.stringify(num);
  //   return "".concat(num);
  return [num].join("");
}

console.log(numberToString(123));
console.log(numberToString(-2000));
