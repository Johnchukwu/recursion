function isPalindrome(word) {
    // Base case: empty word or single character word is a palindrome
    if (word.length <= 1) {
        return true;
    }
    
    // Compare the characters at the beginning and end of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word without the first and last characters
        return isPalindrome(word.slice(1, -1));
    } else {
        return false;
    }
}

// Test cases
console.log(isPalindrome("gag"));    
console.log(isPalindrome("kayak"));  
console.log(isPalindrome("php"));    
console.log(isPalindrome("radar"));  
console.log(isPalindrome("hello"));  
