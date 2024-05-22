function distinct(a) {
  //   let newArray = [];
  //   for (let i = 0; i < a.length; i++) {
  //     // newArray.includes(a[i]) ? "" : newArray.push(a[i]);
  //     if (newArray.indexOf(a[i]) == -1) {
  //       newArray.push(a[i]);
  //     }
  //   }
  //   return newArray;
  return [...new Set(a)];
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 2, 1, 1, 3, 2]));
