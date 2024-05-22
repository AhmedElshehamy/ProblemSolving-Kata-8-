function sumMix(x) {
  //   let newArr = [];
  //   for (let i = 0; i < x.length; i++) {
  //     if (typeof x[i] === "string") {
  //       newArr.push(Number(x[i]));
  //     } else {
  //       newArr.push(x[i]);
  //     }
  //   }
  //   return newArr.reduce((acc, current) => acc + current);
  //   return x
  //     .map(function (ele) {
  //       if (typeof ele === "string") {
  //         return Number(ele);
  //       } else {
  //         return ele;
  //       }
  //     })
  //     .reduce((acc, current) => acc + current);

  //   return x.map((a) => +a).reduce((acc, current) => acc + current);
  //   return x.reduce((acc, current) => acc + Number(current));
  return x.reduce((acc, current) => parseInt(acc) + parseInt(current));
}

console.log(sumMix([9, 3, "7", "3"]));
