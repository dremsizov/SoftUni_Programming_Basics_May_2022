function foodForPets(input) {
  let days = Number(input[0]);
  let allFood = Number(input[1]);
  let dogfood = 0;
  let eatFoodByDog = 0;
  let catfood = 0;
  let eatCatFood = 0;
  let index = 2;
  let currentIndex = Number(input[index]);
  let allEatFood = 0;
  let percenteatfood = 0;
  let percentdog = 0;
  let percentCat = 0;

  let biscuits=0
  let allbiscuits=0

  for (let i = 1; i <= days; i++) {
    dogfood = Number(input[index]);
    eatFoodByDog += dogfood;
    index++;
    catfood = Number(input[index]);
    eatCatFood += catfood;
    index++;
    if (i%3==0){
        biscuits =(catfood+dogfood)*0.1;
        allbiscuits +=biscuits
    }
  }
  allEatFood = eatCatFood + eatFoodByDog;
  percenteatfood = ((allEatFood / allFood) * 100).toFixed(2);
  percentdog = ((eatFoodByDog / allEatFood) * 100).toFixed(2);
  percentCat = ((eatCatFood / allEatFood) * 100).toFixed(2);

  console.log(`Total eaten biscuits: ${Math.round(allbiscuits)}gr.`);
  console.log(`${percenteatfood}% of the food has been eaten.`);
  console.log(`${percentdog}% eaten from the dog.`);
  console.log(`${percentCat}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
