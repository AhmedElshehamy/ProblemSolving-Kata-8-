function remove(string) {
  //   return string.split("").splice(0, string.length - 1);
  //   if (string.endsWith("!")) {
  //     return string.slice(0, -1);
  //   } else {
  //     return string;
  //   }
  return string.replace(/!$/, "");
}

console.log(remove("Hi!"));
console.log(remove("!Hi"));
