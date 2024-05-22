function billboard(name, price = 30) {
  //   let result = 0;
  //   for (let i = 0; i < name.length; i++) {
  //     result += price;
  //   }
  //   return result;
  let finalCoast = 0;
  let result = name.split("").map((ele) => (finalCoast += price));
  return Number(result.slice(-1).join(""));
}

console.log(billboard("Jeong-Ho Aristotelis"));
