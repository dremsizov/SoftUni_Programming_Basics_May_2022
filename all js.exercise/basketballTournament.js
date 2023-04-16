function basketballTournament(input) {
  let index = 0;
  let MatchName = input[index];
  let winPoints = 0;
  let losePoints = 0;
  let winCounter = 0;
  let loseCounter = 0;

  let AllMatch = 0;

  while (MatchName !== "End of tournaments") {
    index++;
    let Match = Number(input[index]);
    let GameCounter = 0;
    for (let i = 0; i < Match; i++) {
      GameCounter++;
      index++;
      let DesiPoints = Number(input[index]);
      index++;
      let OponentPoints = Number(input[index]);

      if (DesiPoints > OponentPoints) {
        winPoints = DesiPoints - OponentPoints;
        winCounter++;
        console.log(
          `Game ${GameCounter} of tournament ${MatchName}: win with ${winPoints} points.`
        );
      } else if (DesiPoints < OponentPoints) {
        losePoints = OponentPoints - DesiPoints;
        loseCounter++;
        console.log(
          `Game ${GameCounter} of tournament ${MatchName}: lost with ${losePoints} points.`
        );
      }
      AllMatch++;
    }
    index++;
    MatchName = input[index];
  }
  console.log(`${((winCounter / AllMatch) * 100).toFixed(2)}% matches win`);
  console.log(`${((loseCounter / AllMatch) * 100).toFixed(2)}% matches lost`);
}
basketballTournament([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
