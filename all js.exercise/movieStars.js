function movieStars(input) {
  let budjet = Number(input[0]);
  let index = 1;
  let command = input[index];

  while (command !== "ACTION") {
    let actorName = input[index];
    actorName = actorName.length;

    if (actorName > 15) {
      actorSalary = budjet * 0.2;
      budjet -= actorSalary;
    } else {
      index++;
      let actorSalary = Number(input[index]);
      budjet -= actorSalary;
    }
    if (budjet < 0) {
      console.log(
        `We need ${(Math.abs(budjet)).toFixed(2)} leva for our actors.`
      );
      break;
    }

    index++;
    command = input[index];
  }

  if (command === "ACTION") {
    console.log(`We are left with ${(budjet).toFixed(2)} leva.`);
  }
}
movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
