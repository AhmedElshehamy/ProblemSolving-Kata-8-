function pipeFix(numbers) {
  let newArr = [];
  //   let fristIndex = numbers[0];
  //   let endIndex = Number(numbers.slice(-1).join(""));
  //   for (let i = fristIndex - 1; i < endIndex; i++) {
  //     newArr.push(i + 1);
  //   }
  //   return newArr;
  //   for (let i = numbers[0] - 1; i < Number(numbers.slice(-1).join("")); i++) {
  //     newArr.push(i + 1);
  //   }
  //   return newArr;

  // Another Solution
  // Destruction Method

  let [start, end] = [Math.min(...numbers), Math.max(...numbers)];

  while (start <= end) {
    newArr.push(start);
    start++;
  }
  return newArr;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
console.log(pipeFix([6, 9]));
