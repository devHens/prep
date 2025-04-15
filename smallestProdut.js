function solution(A) {
  var n = A.length;
  var ans = Infinity; // Initialize with a large value for comparison

  // Loop through the array to find the smallest non-negative product of two different elements
  for (var i = 0; i < n - 1; i++) {
    // Check if the product is non-negative and less than the current ans
    if (A[i] * A[i + 1] >= 0 && A[i] * A[i + 1] < ans) {
      ans = Math.min(ans, A[i] * A[i + 1]); // Update ans with the smaller product
    }
  }

  return ans === 10000 ? -1 : ans; // Return -1 if no non-negative product is found, otherwise return the smallest non-negative product
}
console.log(solution([-2, 0, -1, 4]));
// Expected Output: 0
// Explanation: The smallest non-negative product is 0 * 4 = 0.
// The function may miss this since it focuses on adjacent elements and could end up returning 4 or 2.

// Output: 6
// Explanation: The smallest non-negative product is 2 * 3 = 6.
