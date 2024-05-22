function correct(string) {
  //   return string
  //     .split("")
  //     .map((ele) =>
  //       ele == "5"
  //         ? "S"
  //         : ele == "1"
  //         ? "I"
  //         : ele == "0"
  //         ? "O"
  //         : ele == "c"
  //         ? "PARIS"
  //         : ele
  //     )
  //     .join("");
  //   return string
  //     .replaceAll(/0/g, "O")
  //     .replaceAll(/1/g, "I")
  //     .replaceAll(/5/g, "S");

  const characters = {
    0: "O",
    1: "I",
    5: "S",
  };
  return string.replace(/[015]/g, (character) => characters[character]);
}

console.log(correct("L0ND0N"));
console.log(correct("51NGAP0RE"));
console.log(correct("PAR15"));
