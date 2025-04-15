const nums = [1, 2, 3, 4, 5, 10, 5, 6, 9];

var maxProduct = function (nums) {
  let firstLargest = -1;
  let secondLargest = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = nums[i];
    } else if (nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  console.log("First Largest:", firstLargest);
  console.log("Second Largest:", secondLargest);

  // Calculate the product (subtract 1 from each value as per the problem)
};

console.log(maxProduct(nums));
