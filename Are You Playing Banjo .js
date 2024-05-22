function areYouPlayingBanjo(name) {
  //   if (name.startsWith("R") || name.startsWith("r")) {
  //     return `${name} plays banjo`;
  //   } else {
  //     return `${name} does not play banjo`;
  //   }
  //////////////////////////////////////////////////

  //   for (let i = 0; i < name.length; i++) {
  //     if (name[0] === "R" || name[0] === "r") {
  //       return `${name} plays banjo`;
  //     } else {
  //       return `${name} does not play banjo`;
  //     }
  //   }
  return name[0].toUpperCase() === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Raul"));
