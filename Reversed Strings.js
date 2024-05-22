function solution(str) {
  //  let result = "";
  //   for (let i = str.length - 1; i >= 0; i -= 1) {
  //     result += str[i];
  //   }
  //   return result;
  return str.split("").reverse().join("");
}

console.log(solution("Hello"));
