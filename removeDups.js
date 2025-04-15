const arr = [1, 2, 5111111.1, 2, 3, 4, 1000000000];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < largest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest);
