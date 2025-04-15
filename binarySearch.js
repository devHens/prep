function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (array[middle] === target) {
      return true; // Target found
    } else if (array[middle] > target) {
      high = middle - 1; // Search in the lower half
    } else {
      low = middle + 1; // Search in the upper half
    }
  }

  return false; // Target not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
const target = 5;
const result = binarySearch(array, target);

console.log(result); // Output: true
