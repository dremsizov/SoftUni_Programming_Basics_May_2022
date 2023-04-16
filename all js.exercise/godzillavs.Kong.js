function godzillavsKong(input) {
  let movieBudget = Number(input[0]);
  let actors = Number(input[1]);
  let dressForOneActor = Number(input[2]);
  let dressall = actors * dressForOneActor;

  if (actors > 150) {
    dressall = dressall * 0.9;
  }
  let decor = movieBudget * 0.1;
  let moneyForMovie = decor + dressall;

  if (moneyForMovie > movieBudget) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${(moneyForMovie - movieBudget).toFixed(2)} leva more.`
    );
  } else if (moneyForMovie <= movieBudget) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(movieBudget - moneyForMovie).toFixed(
        2
      )} leva left.`
    );
  }
}
godzillavsKong(["9587.88", "222", "55.68"]);
