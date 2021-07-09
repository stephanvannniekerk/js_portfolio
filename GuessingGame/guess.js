function guessNumber() {
  var secret = [Math.floor(Math.random() * 11)];
  console.log(secret);
  var answer = prompt("Please guess the secret number(1-10)");
  var guess = parseInt(answer);
  while (guess != secret) {
    console.log("Your guess is: " + guess);
    if (guess < secret) {
      alert("Your guess is too low");
      guess = prompt("Please guess the secret number(1-10)");
    } else if (guess > secret) {
      alert("Your guess is too high");
      guess = prompt("Please guess the secret number(1-10)");
    } else if (guess == secret) {
    }
    alert("Correct!!!");
  }
}
