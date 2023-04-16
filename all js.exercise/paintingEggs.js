function paintingEggs(input) {
  let eggsSize = input[0];
  let colorEggs = input[1];
  let eggsPartide = Number(input[2]);
  let totalSum = 0;

  switch (eggsSize) {
    case "Large":
      switch (colorEggs) {
        case "Red":
          totalSum = eggsPartide * 16;
          break;
        case "Green":
          totalSum = eggsPartide * 12;
          break;
        case "Yellow":
          totalSum = eggsPartide * 9;
          break;
      }

      break;

    case "Medium":
      switch (colorEggs) {
        case "Red":
          totalSum = eggsPartide * 13;
          break;
        case "Green":
          totalSum = eggsPartide * 9;
          break;
        case "Yellow":
          totalSum = eggsPartide * 7;
          break;
      }

      break;

    case "Small":
      switch (colorEggs) {
        case "Red":
          totalSum = eggsPartide * 9;
          break;
        case "Green":
          totalSum = eggsPartide * 8;
          break;
        case "Yellow":
          totalSum = eggsPartide * 5;
          break;
      }
      break;
  }
  totalSum = (totalSum - totalSum * 0.35).toFixed(2);
  console.log(`${totalSum} leva.`);
}
paintingEggs(["Large", "Red", "7"]);
