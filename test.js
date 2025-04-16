(() => {
  const array = [1, 7, 3, 4];

  console.log(getProductsOfAllIntsExceptAtIndex(array));
})();

function getProductsOfAllIntsExceptAtIndex(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        product *= array[j];
      }

    }
    result.push(product);

  }
  return result;
}
