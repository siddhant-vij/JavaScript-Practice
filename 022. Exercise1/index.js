// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
// Generate random number here
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number

const randomNumber = Math.floor(Math.random() * 100) + 1;

const gamePlay = () => {
  let chances = 0;
  let guess;

  do {
    guess = Number(prompt("Enter a number between 1 and 100"));
    chances++;

    if (guess > randomNumber) {
      alert("Your guess is higher. Try again.");
    } else if (guess < randomNumber) {
      alert("Your guess is lower. Try again.");
    }
  } while (guess !== randomNumber);

  alert(`Congratulations! You guessed the number in ${chances} chances.`);
}

gamePlay();
