let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 5, 6, 7];

let mergedArray = (arr1, arr2) => {
  let l = 0;
  let r = 0;
  let set = new Set();
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      set.add(arr1[l]);
      l++;
    } else if (arr1[l] > arr2[r]) {
      set.add(arr2[r]);
      r++;
    } else {
      set.add(arr1[l]);
      r++;
      l++;
    }
  }
  while (l < arr1.length) {
    set.add(arr1[l]);
    l++;
  }
  while (r < arr2.length) {
    set.add(arr2[r]);
    r++;
  }
  return set;
};

console.log(mergedArray(array1, array2));
