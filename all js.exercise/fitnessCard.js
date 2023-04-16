function fitnessCard(input) {
  let budget = Number(input[0]);
  let sex = input[1];
  let age = Number(input[2]);
  let sport = input[3];
  let fitnesCard = 0;

  switch (sport) {
    case "Gym":
      switch (sex) {
        case "m":
          fitnesCard = 42;
          break;
        case "f":
          fitnesCard = 35;
          break;
      }
      break;

    case "Boxing":
      switch (sex) {
        case "m":
          fitnesCard = 41;
          break;
        case "f":
          fitnesCard = 37;
          break;
      }
      break;

    case "Yoga":
      switch (sex) {
        case "m":
          fitnesCard = 45;
          break;
        case "f":
          fitnesCard = 42;
          break;
      }
      break;

    case "Zumba":
      switch (sex) {
        case "m":
          fitnesCard = 34;
          break;
        case "f":
          fitnesCard = 31;
          break;
      }
      break;

    case "Dances":
      switch (sex) {
        case "m":
          fitnesCard = 51;
          break;
        case "f":
          fitnesCard = 53;
          break;
      }
      break;

    case "Pilates":
      switch (sex) {
        case "m":
          fitnesCard = 39;
          break;
        case "f":
          fitnesCard = 37;
          break;
      }

      break;
  }

  if (age <= 19) {
    fitnesCard = fitnesCard * 0.8;
  }
  if (budget >= fitnesCard) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(fitnesCard - budget).toFixed(
        2
      )} more.`
    );
  }
}
fitnessCard(["10", "m", "50", "Pilates"]);
