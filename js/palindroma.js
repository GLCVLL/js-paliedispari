console.log('JS OK');

// ASK USER TO WRITE A WORD
const userInput = prompt("Enter a word:");

// CREATE A FUNCTION THAT ANALYZES THE WORD SUPPLIED BY THE USER

function isPalindrome(word) {
    // ! check that the word has no special characters or spaces and that it is written in lower case
    const controlWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // ! divide the word into letters, reverse the order and then join the letters again
    const reversedWord = controlWord.split('').reverse().join('');
    // ! check if with the inversion of the letters it has the same meaning as the original
    return controlWord === reversedWord;
}

// PRINT ANSWER IN CONSOLE
if (isPalindrome(userInput)) {
  console.log(`${userInput} is a palindrome.`);
} else {
  console.log(`${userInput} is not a palindrome.`);
}