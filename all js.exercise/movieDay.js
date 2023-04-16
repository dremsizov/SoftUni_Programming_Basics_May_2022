function movieDay(input) {
  let timeForShooting = Number(input[0]);
  let scenes = Number(input[1]);
  let timeForOneScene = Number(input[2]);

  let preparation = timeForShooting * 0.15;
  let timeForShootingTheScene = scenes * timeForOneScene;
  let neededTime = preparation + timeForShootingTheScene;
  if (neededTime > timeForShooting) {
    console.log(
      `Time is up! To complete the movie you need ${(neededTime-timeForShooting)} minutes.`
    );
  } else {
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil (timeForShooting-neededTime)
      } minutes left!`
    );
  }
}
movieDay (["120",
"10",
"11"])
