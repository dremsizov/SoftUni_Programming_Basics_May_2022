function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let actors = Number(input[1]);
  let outFit = Number(input[2]);

  let decor = budget * 0.1;
  let priceOutFitActors = actors * outFit;

  if (actors > 150) {
    priceOutFitActors = priceOutFitActors * 0.90;
  }
  let totalSUM = decor + priceOutFitActors;

  if (totalSUM > budget) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(totalSUM - budget).toFixed(2)} leva more.`);
  } else if (totalSUM <= budget) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${(budget - totalSUM).toFixed(2)} leva left.`
    );
  }
  
}
godzillaVsKong(["15437.62","186","57.99"]);
