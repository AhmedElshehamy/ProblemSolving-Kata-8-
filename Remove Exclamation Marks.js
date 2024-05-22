function removeExclamationMarks(s) {
  //   return s.replace(/!/g, "");
  //   return s
  //     .split("")
  //     .filter((ele) => !"!".includes(ele))
  //     .join("");
  return s.split("!").join("");
}

console.log(removeExclamationMarks("Hello Word!"));
