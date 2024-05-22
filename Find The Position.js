function position(letter) {
  //   let ASCll = "abcdefghijklmnopqrstuvwxyz";
  //   for (let i = 0; i < ASCll.length; i++) {
  //     if (ASCll[i] === letter) {
  //       return `Position of alphabet: ${i + 1}`;
  //     }
  //   }
  //   return ASCll.indexOf(letter) + 1;
  return `position of alphabet: ${letter.charCodeAt() - 96}`;
}
console.log(position("a"));
console.log(position("z"));
