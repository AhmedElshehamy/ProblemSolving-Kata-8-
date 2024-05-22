function litres(time) {
  //   return Math.floor(time * 0.5);
  //   return parseInt(time * 0.5);
  //   litres = (time) => ~~(time / 2);
  return Math.round(time * 0.5 - 0.5);
}

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));
