const array = [1, 2, 3, 5, 6, 6, 7, 7, 2, 3, 3];

let map = {};
let maxFreq = 0;

// Build frequency map and get max frequency
for (let num of array) {
  map[num] = (map[num] || 0) + 1;
  if (map[num] > maxFreq) {
    maxFreq = map[num];
  }
}

// Find highest number with max frequency
let highestVal = -Infinity;
for (let num in map) {
  if (map[num] === maxFreq) {
    highestVal = Math.max(highestVal, Number(num));
  }
}

console.log("Frequency map:", map);
console.log("Max frequency:", maxFreq);
console.log("Highest number with max frequency:", highestVal);
