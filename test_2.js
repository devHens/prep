const array = [10, 2, 5, 6, 67, 12, 1, 1, 1, 1, 1];

const mostFrequentNumber = (array) => {
  let mostFrequent = null;
  let maxCount = 0;
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
    if (map.get(array[i]) > maxCount) {
      maxCount = map.get(array[i]);
      mostFrequent = array[i];
    }
  }
  console.log(map);

  return mostFrequent;
};
console.log(mostFrequentNumber(array));
