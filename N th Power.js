function index(array, n) {
  if (array.length >= n) {
    return array[n] ** n;
  } else {
    return -1;
  }
}

console.log(index([1, 2, 3, 4], 2));
console.log(index([1, 3, 10, 100], 3), 1000000);
