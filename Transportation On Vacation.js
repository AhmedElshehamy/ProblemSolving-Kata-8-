function rentalCarCost(d) {
  let price = d * 40;
  if (d < 3) return price;
  if (d >= 7) {
    return price - 50;
  } else {
    return price - 20;
  }
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
