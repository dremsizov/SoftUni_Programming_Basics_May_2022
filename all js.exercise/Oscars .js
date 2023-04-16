function oscars(input) {
  let nameActor = input[0];
  let academyPoints = Number(input[1]);
  let candidats = Number(input[2]);
  let index = 3;
  let command = input[index];
  let points = 0;
  let sumPoints = 0;

  for (let i = 0; i < candidats; i++) {
    let namejudge = input[index];
    namejudge = namejudge.length;
    index++;
    points = Number(input[index]);
    points = (namejudge * points) / 2;
    sumPoints += points;

    if (i === 0) {
      sumPoints += academyPoints;
    }
    if (sumPoints > 1250.5) {
      console.log(
        `Congratulations, ${nameActor} got a nominee for leading role with ${sumPoints.toFixed(
          1
        )}!`
      );
      break;
    }

    index++;
    command = input[index];
  }
  if (sumPoints <= 1250.5) {
    console.log(
      `Sorry, ${nameActor} you need ${(1250.5 - sumPoints).toFixed(1)} more!`
    );
  }
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
