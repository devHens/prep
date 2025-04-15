function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }

  return []; // No pair found
}
function twoSum2(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i); // Store the number and its index
  }
}
// Example usage
function twoMinus(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = nums[i] - target;
    console.log(map);
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

// Example usage:
const nums = [5, 3, 9, 1, 6];
const target = 4; // Looking for nums[i] - nums[j] == 4
const result = twoMinus(nums, target);
console.log(result); // Output might be [0, 1] since 5 - 1 == 4
