let n = 145;
let reverseNumber = 0;
while (n > 0) {
  console.log(n);
  let lastDigit = n % 10; //5
  reverseNumber = reverseNumber * 10 + lastDigit;
  n = Math.floor(n / 10);
}
console.log(reverseNumber);

let number = 153;
let sum = 0;
while (number > 0) {
  let lastDigit = number % 10;
  sum += Math.pow(lastDigit, 3);
  number = Math.floor(number / 10);
}

console.log(sum);

console.log(145 % 10);
