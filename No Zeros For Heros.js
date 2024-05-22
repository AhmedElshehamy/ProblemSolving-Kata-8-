function noBoringZeros(n) {
  let stringParam = String(n);
  //   while (stringParam.endsWith("0")) {
  //     stringParam = stringParam.slice(0, stringParam.length - 1);
  //   }
  //   for (let i = 0; i < stringParam.length; i++) {
  //     if (stringParam.endsWith("0")) {
  //       stringParam = stringParam.slice(0, stringParam.length - 1);
  //     }
  //   }
  //   return Number(stringParam);

  let a = `${n}`.split("");
  for (let i = a.length - 1; i >= 0; i -= 1) {
    if (a[i] == 0) {
      a.pop();
    } else {
      break;
    }
  }
  return Number(a.join(""));
}

console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(960));
