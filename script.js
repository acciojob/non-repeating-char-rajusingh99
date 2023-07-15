//your JS code here. If required.

function findFirstNonRepeatingChar(str) {
  // Create an empty object to store character frequencies
  const charMap = {};

  // Iterate through the string and count the frequency of each character
  for (let char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  // Iterate through the string again and return the first character with frequency 1
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null or any other desired value
  return null;
}

// Example usage
// const str = "abaccdeff";
  let data = prompt("")
const firstNonRepeatingChar = findFirstNonRepeatingChar(data);
    alert(firstNonRepeatingChar);


console.log(firstNonRepeatingChar); // Output: "b"
