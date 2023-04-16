function dearSanta(input) {
  let days = Number(input[0]);
  let food = Number(input[1]);
  let foodForfirsDeer = Number(input[2]);
  let foodForsecondDeer = Number(input[3]);
  let foodForthirdDeer = Number(input[4]);

  let needFoodforFirstDeer = days * foodForfirsDeer;
  let needFoodForSecondDeer = days * foodForsecondDeer;
  let needFoodForThirdDeer = days * foodForthirdDeer;

  let allNeededFood =
    needFoodforFirstDeer + needFoodForSecondDeer + needFoodForThirdDeer;

  if (allNeededFood <= food) {
    console.log(`${Math.floor(food - allNeededFood)} kilos of food left.`);
  } else if (allNeededFood > food) {
    console.log(
      `${Math.ceil(allNeededFood - food)} more kilos of food are needed.`
    );
  }
}
dearSanta(["5", "10", "2.1", "0.8", "11"]);
