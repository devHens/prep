// class Solution {
//   // Function to find the sum of minimum elements of all possible subarrays of fruits.
//   totalElements(arr) {
//     let l = 0;
//     let r = 0;
//     let set = new Set();
//     let maxLength = 0;

//     while (r < arr.length) {
//       set.add(arr[r]);
//       if (set.size <= 2) {
//         maxLength = Math.max(maxLength, r - l + 1);
//       } else {
//         set.delete(arr[left]);
//         left++;
//       }
//     }
//     return maxLength;
//   }
// }

const array = [1, 2, 3];
let a = new Map();
let left = 0;
let right = 0;
while (right < array.length) {
  a.set(arr[right], a.get(arr[right] || 0) + 1);
}
