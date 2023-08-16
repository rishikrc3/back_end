function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}

var calculatedSum = calculateSum(100);
console.log(calculatedSum);
