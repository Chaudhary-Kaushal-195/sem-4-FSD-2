function FirstAndLast(arr) {
  const result = {};

  result[arr[0]] = arr[arr.length - 1];
  return result;
}

// Test
console.log(FirstAndLast(["ABC", "DEF", "Employee", "Manager"]));
// Output: { ABC: 'Manager' }
