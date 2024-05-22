function twoDecimalPlaces(n) {
  //   return Number(n.toFixed(2));
  return Math.round(n * 100) / 100;
}

console.log(twoDecimalPlaces(5.5589));
console.log(twoDecimalPlaces(3.3424));
console.log(twoDecimalPlaces(4.659725356));
