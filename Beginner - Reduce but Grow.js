function grow(x) {
  //   let Mult = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     Mult *= x[i];
  //   }
  //   return Mult;
  //   return x.reduce((acc, current) => acc * current, 1);
  //   const grow = eval(x.join("*"));
  //   return grow;

  let z = 1;
  for (i in x) {
    z = x[i] * z;
  }
  return z;
}

console.log(grow([1, 2, 3]));
