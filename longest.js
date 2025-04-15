var longestPalindrome = function (s) {
  if (s === null || s.length < 1) return "";

  function expandAtCenter(left, right) {
    console.log(`\nExpanding around center: left=${left}, right=${right}`);
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      console.log(
        `Matching: s[${left}] = '${s.charAt(
          left
        )}' and s[${right}] = '${s.charAt(right)}'`
      );
      left--;
      right++;
    }
    const palindrome = s.substring(left + 1, right);
    console.log(`Found palindrome: "${palindrome}"`);
    return palindrome;
  }

  let maxStr = s[0];

  for (let i = 0; i < s.length; i++) {
    console.log(`\nChecking at index ${i} ('${s[i]}'):`);

    let odd = expandAtCenter(i, i); // Odd length palindrome
    let even = expandAtCenter(i, i + 1); // Even length palindrome

    if (odd.length > maxStr.length) {
      console.log(`Updating maxStr with odd palindrome: "${odd}"`);
      maxStr = odd;
    }
    if (even.length > maxStr.length) {
      console.log(`Updating maxStr with even palindrome: "${even}"`);
      maxStr = even;
    }
  }

  console.log(`\nLongest Palindromic Substring: "${maxStr}"`);
  return maxStr;
};

// Test the function
longestPalindrome("babad");
