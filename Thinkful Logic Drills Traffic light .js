function updateLight(current) {
  //   switch (current) {
  //     case "green":
  //       return "yellow";
  //       break;
  //     case "yellow":
  //       return "red";
  //       break;
  //     default:
  //       return "green";
  //   }
  //   return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";
  let lightsArray = ["green", "yellow", "red"];
  if (lightsArray.indexOf(current) == 2) {
    return "green";
  } else if (lightsArray.indexOf(current) == 1) {
    return "red";
  } else return "yellow";
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
