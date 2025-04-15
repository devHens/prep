let x = 1234;
let reverse = 0;
while (x > 0) {
  let lastDigit = x % 10;
  reverse = reverse * 10 + lastDigit;
  x = Math.floor(x / 10);
}
console.log(reverse);
