function removeDuplicates(arr) {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  return uniqueArr.length;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);
console.log(k);
console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}
