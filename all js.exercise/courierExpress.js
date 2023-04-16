function courierExpress(input) {
  let bagWeight = Number(input[0]);
  let type = input[1];
  let kilometers = Number(input[2]);
  let totalSum = 0;
  overForKilo = 0;
  overForKM = 0;
  totalover = 0;

  switch (type) {
    case "standard":
      if (bagWeight < 1) {
        totalSum = kilometers * 0.03;
      } else if (bagWeight >= 1 && bagWeight <= 10) {
        totalSum = kilometers * 0.05;
      } else if (bagWeight > 10 && bagWeight <= 40) {
        totalSum = kilometers * 0.1;
      } else if (bagWeight > 40 && bagWeight <= 90) {
        totalSum = kilometers * 0.15;
      } else if (bagWeight > 90 && bagWeight <= 150) {
        totalSum = kilometers * 0.2;
      }
      break;

    case "express":
      if (bagWeight < 1) {
        totalSum = kilometers * 0.03;
        overForKilo = 0.8 * 0.03;
        overForKM = bagWeight * overForKilo;
        totalover = kilometers * overForKM;
        totalSum = totalSum + totalover;
      } else if (bagWeight >= 1 && bagWeight <= 10) {
        totalSum = kilometers * 0.05;
        overForKilo = 0.4 * 0.05;
        overForKM = bagWeight * overForKilo;
        totalover = kilometers * overForKM;
        totalSum = totalSum + totalover;
      } else if (bagWeight > 10 && bagWeight <= 40) {
        totalSum = kilometers * 0.1;
        overForKilo = 0.05 * 0.1;
        overForKM = bagWeight * overForKilo;
        totalover = kilometers * overForKM;
        totalSum = totalSum + totalover;
      } else if (bagWeight > 40 && bagWeight <= 90) {
        totalSum = kilometers * 0.15;
        overForKilo = 0.02 * 0.15;
        overForKM = bagWeight * overForKilo;
        totalover = kilometers * overForKM;
        totalSum = totalSum + totalover;
      } else if (bagWeight > 90 && bagWeight <= 150) {
        totalSum = kilometers * 0.2;
        overForKilo = 0.01 * 0.2;
        overForKM = bagWeight * overForKilo;
        totalover = kilometers * overForKM;
        totalSum = totalSum + totalover;
      }
      break;
  }

  console.log(
    `The delivery of your shipment with weight of ${bagWeight.toFixed(
      3
    )} kg. would cost ${totalSum.toFixed(2)} lv.`
  );
}
courierExpress(["20", "standard", "349"]);
