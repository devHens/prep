const arr = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
let left = 0;
let zero = 0;
let maxLength = 0;
for (let right = 0; right < arr.length; right++) {
  if (arr[right] === 0) {
    zero++;
  }
  while (zero > k) {
    if (s[left] == 0) {
      zero--;
      left++;
    }
  }
  if (zero <= k) {
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
