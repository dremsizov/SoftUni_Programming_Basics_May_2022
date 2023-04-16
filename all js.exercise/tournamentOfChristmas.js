function tournamentOfChristmas(input) {
  let tournamentsDays = Number(input[0]);

  let index = 1;
  let command = input[index];



  let totalSum = 0;
  let winThetournament = 0;
  let losethetournament = 0;

  for (let i = 0; i < tournamentsDays; i++) {
    winCounter = 0;
    loseCounter = 0;
    let moneyForcharity = 0;
    while (command !== "Finish") {
      index++;
      let sport = input[index];
      switch (sport) {
        case "win":
          moneyForcharity += 20;
          winCounter++;
          break;
        case "lose":
          loseCounter++;
          break;
      }
      index++;
      command = input[index];
    }
    if (winCounter > loseCounter) {
      moneyForcharity = moneyForcharity * 1.1;
      winThetournament++;
    } else if (winCounter < loseCounter) {
      losethetournament++;
    }
    totalSum += moneyForcharity;
    index++;
    command = input[index];
  }
  if (winThetournament > losethetournament) {
    totalSum = totalSum * 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalSum.toFixed(2)}`
    );
  } else if (winThetournament < losethetournament)  {
    console.log(
      `You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`
    );
  }
}
tournamentOfChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
