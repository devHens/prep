let str = "abcded";
const substrings = [];
for (let i = 0; i < str.length; i++) {
  let temp = "";
  for (let j = i; j < str.length; j++) {
    temp += str[j]; // Build the substring character by character
    substrings.push(temp); // Push the constructed substring to the array
  }
}

console.log(substrings);
