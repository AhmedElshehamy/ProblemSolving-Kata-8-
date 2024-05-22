function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //   let uniqueResult = birds.filter((birds) => {
  //     return !geese.includes(birds);
  //   });
  //   return uniqueResult;
  //   let newArr = [];
  //   for (let i = 0; i < birds.length; i++) {
  //     if (!geese.includes(birds[i])) {
  //       newArr.push(birds[i]);
  //     }
  //   }
  //   return newArr;

  for (let i = 0; i < birds.length; i++) {
    for (let j = 0; j < geese.length; j++) {
      if (birds[i] === geese[j]) {
        birds.splice(i, 1);
      }
    }
  }
  return birds;
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
