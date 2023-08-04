// The code
function isPalindrome(word) {
  // Base case: an empty word or a word containing a single character is a palindrome
if (word.length <= 1) {
    return true;
}

  // Check if the first and last characters are equal
if (word[0] === word[word.length - 1]) {
    // If they are equal, recursively check the rest of the word
    return isPalindrome(word.slice(1, -1));
} else {
    // If they are not equal, the word is not a palindrome
    return false;
}
}

// Test cases
console.log(isPalindrome("gag"));      // true
console.log(isPalindrome("kayak"));    // true
console.log(isPalindrome("php"));      // true
console.log(isPalindrome("radar"));    // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("world"));    // false