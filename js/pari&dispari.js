console.log('JS OK');

// ASK USER TO CHOOSE FROM EVEN OR ODD
const userChoice = prompt("Choose even or odd:").trim().toLowerCase();

// ASK USER TO CHOOSE A NUMBER FROM 1 TO 5
const userInput = parseInt(prompt('Write a number from 1 to 5'));

// CREATE A FUNCTION THAT GENERATE A RANDOM NUMBER FROM 1 TO 5
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// CREATE A FUNCTION THAT SAID IF ITS EVEN OR ODD
function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}

//! ASSIGN THE VALUE OF THE FUNCTION TO THE CONSTANT
const cpuNumber = generateRandomNumber();

//! SUM THE NUMBERS
const sum = userInput + cpuNumber;

//! CONTROLL IF THE RESULT IS EVEN OR ODD
const result = isEvenOrOdd(sum);

// PRINT ALL THE ELEMENTS IN CONSOLE
console.log(`User's number: ${userInput}`);
console.log(`Computer's number: ${cpuNumber}`);
console.log(`Sum of the numbers: ${sum}`);
console.log(`Result: ${result}`);

// DECLARE THE WINNER
if ((userChoice === 'even' && result === 'even') || (userChoice === 'odd' && result === 'odd')) {
    console.log('You won!');
  } else {
    console.log('Cpu won!');
}
  