function darts(input) {
  let PlayerName = input[0];
  let startinPoints = 301;
  let index = 1;
  let command = input[index];
  let CurrentPoints = 0;
  let goodShoot = 0;
  let badShoots = 0;
  let FinishGame = false

  while (command !== "Retire") {
    FinishGame = false
    switch (command) {
      case "Single":
        index++;
        CurrentPoints = Number(input[index]);
        if (CurrentPoints <= startinPoints) {
          goodShoot++;
        } else {
          badShoots++;
          break;
        }
        startinPoints -= CurrentPoints;

        break;
      case "Double":
        index++;
        CurrentPoints = 2 * Number(input[index]);
        if (CurrentPoints <= startinPoints) {
          goodShoot++;
        } else {
          badShoots++;
          break;
        }
        startinPoints -= CurrentPoints;
        break;

      case "Triple":
        index++;
        CurrentPoints = 3 * Number(input[index]);
        if (CurrentPoints <= startinPoints) {
          goodShoot++;
        } else {
          badShoots++;
          break;
        }
        startinPoints -= CurrentPoints;

        break;
    }
    if (startinPoints === 0) {
        FinishGame=true
      console.log(`${PlayerName} won the leg with ${goodShoot} shots.`);
      break;
    }

    index++;
    command = input[index];
  }
  if(FinishGame===false) {
    console.log(`${PlayerName} retired after ${badShoots} unsuccessful shots.`);
  }
 
}
darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])
