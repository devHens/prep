const array = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0];
const k = 2;

const test = (array, k) => {
  let left = 0;
  let zero = 0;
  let maxLength = 0;
  let right = 0;
  while (right < array.length) {
    if (array[right] === 0) {
      zero++;
    }
    if (zero > k) {
      if (array[left] === 0) {
        zero--;
      }
      left++;
    }
    maxLength = Math.max(maxLength, right  - left + 1);
    right++;
  }
  return maxLength;
};

console.log(test(array, k));
