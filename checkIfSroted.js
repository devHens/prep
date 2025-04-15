let array = [1, 2, 3, 4, 5, 2, 4, 5];
let set = new Set();

for (let i = 0; i < array.length; i++) {
  if (set.has(array[i])) {
    array[i] = "_";
  } else {
    set.add(array[i]);
  }
}

console.log(array);
