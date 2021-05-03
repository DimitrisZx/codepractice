const checkPalindrome = (str) => {
  let reversedString = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    reversedString += str[str.length-i-1];
  }
  return str === reversedString;
} 
console.log(checkPalindrome('aca'));