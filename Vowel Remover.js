function shortcut(string) {
  //   const wolves = ["a", "e", "i", "o", "u"];
  //   return string
  //     .split("")
  //     .filter((ele) => !wolves.includes(ele))
  //     .join("")
  //     .trim();
  //   return string.replace(/[aeiou]/g, "");
  return string
    .split("")
    .filter((ele) => !"aeiou".includes(ele))
    .join("");
}

console.log(shortcut("helloa"));
console.log(shortcut("codewars"));
// console.log(shortcut("goodbye"));
// console.log(shortcut("HELLO"));
console.log(shortcut("how are you today"));
