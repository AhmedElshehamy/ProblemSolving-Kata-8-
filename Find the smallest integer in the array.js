function findSmallestInt(args) {
  //   return Math.min.apply(null, args);
  //   return Math.min(...args);
  return args.sort((a, b) => a - b)[0];
}

console.log(findSmallestInt[(34, 15, 88, 2)]);
