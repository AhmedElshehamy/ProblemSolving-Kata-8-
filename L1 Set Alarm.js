function setAlarm(employed, vacation) {
  //   return employed == true && vacation == false;
  //   return employed == true && vacation == false ? true : false;
  return employed && !vacation == true;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
