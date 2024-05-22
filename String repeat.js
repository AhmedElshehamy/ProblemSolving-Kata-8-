function repeatStr(n, s) {
  return `${s.repeat(n)}`;
}
console.log(repeatStr(6, "I"));
repeatStr(5, "Hello");

// How To Repeat String Without Using Build In Function in Js

function repeatString(Str, Times) {
  if (Times < 0) {
    return ""; // If Times is Negative Number Return Empty Strings
  }
  //   let repeatString = "";
  //   for (let i = 0; i < Times; i++) {
  //     repeatString += Str;
  //   }
  //   return repeatString;
  return new Array(Times + 1).join(Str);
}

console.log(repeatString("Hello", 3));
