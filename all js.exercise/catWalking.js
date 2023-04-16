function catWalking(input) {
  let minWalkPerDay = Number(input[0]);
  let walkingCounterPerDay = Number(input[1]);
  let takenCallories = Number(input[2]);

  let allTimeWalking = walkingCounterPerDay * minWalkPerDay;
  let loseCallories = allTimeWalking * 5;

  let needLoseCallories = takenCallories * 0.5;

  if (loseCallories < needLoseCallories) {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${loseCallories}.`
    );
  } else {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${loseCallories}.`
    );
  }
}
catWalking(["15", "2", "500"]);
