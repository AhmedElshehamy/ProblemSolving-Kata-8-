function boolToWord(bool) {
  //   if (bool == true) {
  //     return "Yes";
  //   } else if (bool == false) {
  //     return "No";
  //   }
  ///////////////////////////////////////////
  //   return bool == true ? "Yes" : "No";
  ////////////////////////////////////////////
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true));
console.log(boolToWord(false));
