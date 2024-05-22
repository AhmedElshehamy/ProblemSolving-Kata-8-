function divisibleBy(numbers, divisor) {
  //   return numbers.filter((ele) => ele % divisor == 0);
  let newArr = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     if (numbers[i] % divisor == 0) {
  //       newArr.push(numbers[i]);
  //     }
  //   }
  //   return newArr;
  for (i in numbers) {
    if (numbers[i] % divisor == 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}

console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
