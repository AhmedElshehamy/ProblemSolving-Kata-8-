const stringToNumber = function (str) {
  return Number(str);
  return +str;
  return parseInt(str);
  return parseFloat(str);
};

console.log(stringToNumber("123"));
console.log(stringToNumber("-322"));
