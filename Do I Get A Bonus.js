function bonusTime(salary, bonus) {
  //   return bonus === true ? `£${salary * 10}` : `£${salary}`;
  //   if (bonus == true) {
  //     return `£${salary * 10}`;
  //   } else {
  //     return `£${salary}`;
  //   }
  //   switch (bonus) {
  //     case true:
  //       return `£${salary * 10}`;
  //       break;
  //     default:
  //       return `£${salary}`;
  //   }
  return `£` + salary * (bonus ? 10 : 1);
}
console.log(bonusTime(10000, true));
console.log(bonusTime(10000, false));
