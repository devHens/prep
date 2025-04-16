const array = [1, 2, 3, 4, 5];

const prefixSumByIndexRange = (array, start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += array[i];
  }
  return sum;
};
var twoSum = function(numbers, target) {
  let left = 0; // Start from index 0
  let right = numbers.length - 1; // End at last index

  while (left < right) {
      let sum = numbers[left] + numbers[right];

      if (sum === target) {
          return [left + 1, right + 1]; // Return 1-based index
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }

  return []; // Return empty array if no solution found
};


const twoSumHash = (array) => {
  let hash = {};

  let compliment = 0;
  for (const i of array) {
    if (!hash[i]) {
      hash[i] = i;
    }
    if
  }
};
(() => {
  console.log(prefixSumByIndexRange(array, 0, 3));
  console.log(twoSum(array, 9));
})();
