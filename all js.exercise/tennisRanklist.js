function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let startingPoints = Number(input[1]);
  let index = 2;
  let ResultTournament = input[index];
  let AVRpoints = 0;
  winTournamentsCaounter = 0;
  let percentWinTournaments = 0;

  for (let i = 0; i < tournaments; i++) {
    switch (ResultTournament) {
      case "W":
        startingPoints += 2000;
        AVRpoints += 2000;
        winTournamentsCaounter++;
        break;
      case "F":
        startingPoints += 1200;
        AVRpoints += 1200;
        break;
      case "SF":
        startingPoints += 720;
        AVRpoints += 720;
        break;
    }
    index++;
    ResultTournament = input[index];
  }
  AVRpoints = Math.floor(AVRpoints / tournaments);
  percentWinTournaments = (
    (winTournamentsCaounter / tournaments) *
    100
  ).toFixed(2);

  console.log(`Final points: ${startingPoints}`);
  console.log(`Average points: ${AVRpoints}`);
  console.log(`${percentWinTournaments}%`);
}
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
