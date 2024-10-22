let isPerfect = function (number) {
  let result = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      result += i;
    }
  }
  console.log(result);
  return result === number;
};

console.log(isPerfect(6));
