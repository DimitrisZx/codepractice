/**
 * Reverses a given string (without the .reverse() method)
 * @param {string} str 
 * @returns {string} the reversed string or emtpy string if param is emtpy string
 */
const reverseString = str => {
	if (str.length === 0) return str;
	const splitString = str.split('');
  const reverseStringArray = [];
  
  for (let i = splitString.length; i > 0 ; i--) {
  	reverseStringArray.push(splitString[i-1]);
  }
  
  return reverseStringArray.join('');
}

module.exports = reverseString;