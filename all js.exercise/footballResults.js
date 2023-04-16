function footballResults(input) {
  let firstMatchResult = input[0];
  let secondMatchResult = input[1];
  let thirdMatchresult = input[2];
  let win = 0;
  let lost = 0;
  let drawn = 0;

  let welcomeTeam = 0;
  let otherTeam = 0;

  welcomeTeam = firstMatchResult[0];
  otherTeam = firstMatchResult[2];

  if (welcomeTeam > otherTeam) {
    win++;
  } else if (welcomeTeam < otherTeam) {
    lost++;
  } else if (welcomeTeam === otherTeam) {
    drawn++;
  }
  welcomeTeam = secondMatchResult[0];
  otherTeam = secondMatchResult[2];

  if (welcomeTeam > otherTeam) {
    win++;
  } else if (welcomeTeam < otherTeam) {
    lost++;
  } else if (welcomeTeam === otherTeam) {
    drawn++;
  }
  welcomeTeam = thirdMatchresult[0];
  otherTeam = thirdMatchresult[2];

  if (welcomeTeam > otherTeam) {
    win++;
  } else if (welcomeTeam < otherTeam) {
    lost++;
  } else if (welcomeTeam === otherTeam) {
    drawn++;
  }

  console.log(`Team won ${win} games.`);
  console.log(`Team lost ${lost} games.`);
  console.log(`Drawn games: ${drawn}`);
}
footballResults(["4:2", "0:3", "1:0"]);
