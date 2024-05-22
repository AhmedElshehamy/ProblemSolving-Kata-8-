const quarterOf = (month) => {
  //   switch (month) {
  //     case 1:
  //     case 2:
  //     case 3:
  //       return 1;
  //       break;
  //     case 4:
  //     case 5:
  //     case 6:
  //       return 2;
  //       break;
  //     case 7:
  //     case 8:
  //     case 9:
  //       return 3;
  //       break;
  //     case 10:
  //     case 11:
  //     case 12:
  //       return 4;
  //       break;
  //   }
  //   if (month >= 1 && month <= 3) {
  //     return 1;
  //   } else if (month >= 4 && month <= 6) {
  //     return 2;
  //   } else if (month >= 7 && month <= 9) {
  //     return 3;
  //   } else return 4;
  return Math.ceil(month / 3);
};

console.log(quarterOf(3));
console.log(quarterOf(6));
console.log(quarterOf(8));
console.log(quarterOf(11));
