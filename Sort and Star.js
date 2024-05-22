function twoSort(s) {
  //   let newArr = [];
  //   let n = s.sort().slice(0, 1).join("");
  //   for (let i = 0; i < n.length; i++) {
  //     newArr.push(`${n[i]}***`);
  //   }
  //   let String = newArr.join("");
  //   return String.slice(0, String.length - 3);
  return s.sort()[0].split("").join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);

console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);
