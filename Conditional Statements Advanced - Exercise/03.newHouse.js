function newHouse(input) {
  let typeFlowers = input[0];
  let flowers = Number(input[1]);
  let budget = Number(input[2]);
  let priceForFlowers = 0;
  
 

  switch (typeFlowers) {
    case "Roses":
      priceForFlowers = flowers * 5;
      if (flowers > 80) {
        priceForFlowers = flowers * 5 * 0.90;
      }
      break;
    case "Dahlias":
      priceForFlowers = flowers * 3.8;
      if (flowers > 90) {
        priceForFlowers = flowers * 3.8 * 0.85;
      }
      break;

    case "Tulips":
      priceForFlowers = flowers * 2.80;
      if (flowers > 80) {
        priceForFlowers = flowers * 2.80 * 0.85;
      }
      break;

    case "Narcissus":
      priceForFlowers = flowers * 3.0;
      if (flowers < 120) {
        priceForFlowers = flowers * 3 * 1.15;
      }
      break;

    case "Gladiolus":
      priceForFlowers = flowers * 2.5;
      if (flowers < 80) {
        priceForFlowers = flowers * 2.5 * 1.20;
      }
      break;
  }
  if (budget >= priceForFlowers) {
    console.log(
      `Hey, you have a great garden with ${flowers} ${typeFlowers} and ${(
        budget - priceForFlowers
      ).toFixed(2)} leva left.`
    );
  } else
    console.log(
      `Not enough money, you need ${(priceForFlowers - budget).toFixed(
        2
      )} leva more.`
    );
}

newHouse(["Gladiolus", "64", "160"]);
