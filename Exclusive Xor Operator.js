function xor(a, b) {
  //   if (a === false && b === false) return false;
  //   if (a === true && b === false) return true;
  //   if (a === false && b === true) return true;
  //   if (a === true && b === true) return false;
  ////////////////////////////////////////////////////
  //   return a === false && b === false
  //     ? false
  //     : a === true && b === false
  //     ? true
  //     : a === false && b === true
  //     ? true
  //     : false;
  //   return a != b;
  return a === b ? false : true;
}

console.log(xor(false, false)); // false
console.log(xor(false, true)); // true
console.log(xor(true, true)); //false
console.log(xor(false, true)); // true

// console.log(xor(false, true));
