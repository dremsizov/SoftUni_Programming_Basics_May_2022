function fitnessCenter(input) {
  let peopleInFitnes = Number(input[0]);
  index = 1;
  let operation = input[index];

  let BackCaounter = 0;
  let ChestCaounter = 0;
  let LegsCaounter = 0;
  let AbsCaounter = 0;
  let ProteinShakeCaounter = 0;
  let ProteinBarCaounter = 0;
  let workoutCaounter = 0;
  let proteinCaunter = 0;

  for (let i = 0; i < peopleInFitnes; i++) {
    switch (operation) {
      case "Back":
        BackCaounter++;
        workoutCaounter++;
        break;
      case "Chest":
        ChestCaounter++;
        workoutCaounter++;
        break;
      case "Legs":
        LegsCaounter++;
        workoutCaounter++;
        break;
      case "Abs":
        AbsCaounter++;
        workoutCaounter++;
        break;

      case "Protein shake":
        ProteinShakeCaounter++;
        proteinCaunter++;
        break;
      case "Protein bar":
        ProteinBarCaounter++;
        proteinCaunter++;
        break;
    }
    index++;
    operation = input[index];
  }

  console.log(`${BackCaounter} - back`);
  console.log(`${ChestCaounter} - chest`);
  console.log(`${LegsCaounter} - legs`);
  console.log(`${AbsCaounter} - abs`);
  console.log(`${ProteinShakeCaounter} - protein shake`);
  console.log(`${ProteinBarCaounter} - protein bar`);
  console.log(
    `${((workoutCaounter / peopleInFitnes) * 100).toFixed(2)}% - work out`
  );
  console.log(
    `${((proteinCaunter / peopleInFitnes) * 100).toFixed(2)}% - protein`
  );
}
fitnessCenter([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
