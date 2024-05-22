function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(125, 3));
