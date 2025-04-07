function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  let number = Math.floor(Math.random() * options.length);
  return options[number];
}
console.log(getRandomComputerResult());
