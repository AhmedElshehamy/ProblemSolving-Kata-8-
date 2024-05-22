function feast(beast, dish) {
  //   if (
  //     beast[beast.length - 1] === dish[dish.length - 1] &&
  //     beast[0] === dish[0]
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bea", "bear claw"));

// console.log(name.indexOf("w"));

var name = "great blue heron";
console.log(name);
