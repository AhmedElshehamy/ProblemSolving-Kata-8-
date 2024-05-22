function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, current) => acc + current) / classPoints.length
  );
}

console.log(betterThanAverage([2, 3], 5));

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33]));
