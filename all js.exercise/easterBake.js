function easterBake(input) {
  let easterBread = Number(input[0]);

  let index = 1;
  let command = Number(input[index]);
  let sugar = 0;
  let currentSugar = 0;
  let flour = 0;
  let currentFlour = 0;
  let needSugarPacage = 0;
  let needFlourPacage = 0;

  let maxFlour = 0;
  let maxSugar = 0;

  for (let i = 0; i < easterBread; i++) {
    currentSugar = Number(input[index]);
    sugar += currentSugar;
    index++;
    currentFlour = Number(input[index]);
    flour += currentFlour;

    if (currentSugar > maxSugar) {
      maxSugar = currentSugar;
    }
    if (currentFlour > maxFlour) {
      maxFlour = currentFlour;
    }

    index++;
  }
  needSugarPacage = Math.ceil(sugar / 950);
  needFlourPacage = Math.ceil(flour / 750);

  console.log(`Sugar: ${needSugarPacage}`);
  console.log(`Flour: ${needFlourPacage}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
