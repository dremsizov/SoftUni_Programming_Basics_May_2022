function balls(input) {
  let allballs = Number(input[0]);
  index = 1;
  let CurrentBal = input[index];

  let points = 0;
  let totalPOINTS = 0;

  let RedBallsCaounter = 0;
  let OrangeBallsCaounter = 0;
  let YellowBallsCaounter = 0;
  let WhiteBallsCaouter = 0;
  let OtherBallsCaounter = 0;
  let DividedBallsCounter = 0;

  for (let i = 0; i < allballs; i++) {
    switch (CurrentBal) {
      case "red":
        RedBallsCaounter++;
        points = 5;
        totalPOINTS += points;

        break;

      case "orange":
        OrangeBallsCaounter++;
        points = 10;
        totalPOINTS += points;
        break;

      case "yellow":
        YellowBallsCaounter++;
        points = 15;
        totalPOINTS += points;

        break;
      case "white":
        WhiteBallsCaouter++;
        points = 20;
        totalPOINTS += points;

        break;
      case "black":
        DividedBallsCounter++;
        totalPOINTS = Math.floor(totalPOINTS / 2);
        break;

      default:
        OtherBallsCaounter++;
        break;
    }
    index++;
    CurrentBal = input[index];
  }
  console.log(`Total points: ${totalPOINTS}`);
  console.log(`Red balls: ${RedBallsCaounter}`);
  console.log(`Orange balls: ${OrangeBallsCaounter}`);
  console.log(`Yellow balls: ${YellowBallsCaounter}`);
  console.log(`White balls: ${WhiteBallsCaouter}`);
  console.log(`Other colors picked: ${OtherBallsCaounter}`);
  console.log(`Divides from black balls: ${DividedBallsCounter}`);
}
balls(["3", "white", "black", "pink"]);
