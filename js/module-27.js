const numbers = [51, 18, 13, 24, 7, 85, 19];

const findSmallestNumber = function (arr) {
  let smallestNumber = arr[0];

  for (const number of arr) {
    // console.log(number);
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber(numbers));
console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));
