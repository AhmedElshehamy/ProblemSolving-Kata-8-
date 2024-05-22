function fakeBin(x) {
  //   let arr = x.split("");
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 5) {
  //       arr[i] = 0;
  //     } else {
  //       arr[i] = 1;
  //     }
  //   }
  //   return arr.join("");
  //////////////////////////////////////////////////
  //   return x
  //     .split("")
  //     .map((ele) => (ele < "5" ? "0" : "1"))
  //     .join("");
  //////////////////////////////////////////////

  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("45385593107843568"));
