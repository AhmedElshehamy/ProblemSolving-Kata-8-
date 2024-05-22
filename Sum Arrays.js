function sum(numbers) {
  //   let result = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     if ((numbers[i].length = 0)) {
  //       return 0;
  //     } else {
  //       result += numbers[i];
  //     }
  //   }
  //   return result;
  //   let result = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     numbers[i].length = 0 ? 0 : (result += numbers[i]);
  //   }
  //   return result;
  /*********************************************/
  //   return numbers.reduce((acc, current) => acc + current, 0);
  /****************************************************** */
  if (numbers.length == 0) {
    return 0;
  } else {
    let sumNumber = 0;
    for (i of numbers) {
      sumNumber += i;
    }
    return sumNumber;
  }
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([-2.398]));
console.log(sum([]));
