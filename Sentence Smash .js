function smash(words) {
  //   return words.join(" ");
  //   return words.toString().replaceAll(",", " ");
  //   return words.reduce((acc, current) => `${acc} ${current}`);
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word += words[i] + " ";
  }
  return word;
}
console.log(smash(["hello", "world", "this", "is", "great"]));
