function howManyLightsabersDoYouOwn(name = "ahmed") {
  // return name === "Zach" ? 18 : 0;
  //   if (name.length === 4 && name.startsWith("Z") && name.endsWith("h")) {
  //     return 18;
  //   } else {
  //     return false;
  //   }
  return name.includes("Zach");
}

console.log(howManyLightsabersDoYouOwn("Zach"));
console.log(howManyLightsabersDoYouOwn(""));
console.log(howManyLightsabersDoYouOwn("Adam"));
