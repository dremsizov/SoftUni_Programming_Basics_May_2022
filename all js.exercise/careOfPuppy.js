function careOfPuppy(input) {
  let dogFoodInKg = Number(input[0]);
  let dogfoodinGRAM = dogFoodInKg * 1000;

  let index = 1;
  let command = input[index];

  let EATfood = 0;
  let allEATfood = 0;

  while (command !== "Adopted") {
    EATfood = Number(command);
    allEATfood += EATfood;

    index++;
    command = input[index];
  }

  if (dogfoodinGRAM >= allEATfood) {
    console.log(
      `Food is enough! Leftovers: ${dogfoodinGRAM - allEATfood} grams.`
    );
  } else {
    console.log(
      `Food is not enough. You need ${allEATfood - dogfoodinGRAM} grams more.`
    );
  }
}
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
