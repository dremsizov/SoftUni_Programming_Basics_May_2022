function easterCompetition(input) {
  let eastBread = Number(input[0]);
  let index = 1;
  let command = input[index];
  let BestPoints = 0;
  let BestCheef = "";
  let sumPoints = 0;

  for (let i = 0; i < eastBread; i++) {
    let name = input[index];
    index++;
    command = input[index];
    while (command !== "Stop") {
      let CurrentPoints = 0;
      CurrentPoints = Number(input[index]);
      sumPoints += CurrentPoints;
      index++;
      command = input[index];
    }
    console.log(`${name} has ${sumPoints} points.`);
    if (sumPoints > BestPoints) {
      BestCheef = name;
      BestPoints = sumPoints;
      console.log(`${name} is the new number 1!`);
    }
    sumPoints = 0;
    index++;
    command = input[index];
  }
  console.log(`${BestCheef} won competition with ${BestPoints} points!`);
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
