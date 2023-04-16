function cleverLily(input) {
  let liliAge = Number(input[0]);
  let wattermachinePrice = Number(input[1]);
  let priceForToy = Number(input[2]);

  let toysCounter = 0;
  let savedMoney = 0;
  let MoneyTakesFromBrother = 0;
  let giftMoney = 10;

  for (let currentAge = 1; currentAge <= liliAge; currentAge++) {
    if (currentAge % 2 === 0) {
      savedMoney = savedMoney + giftMoney;
      giftMoney = giftMoney + 10;
      MoneyTakesFromBrother++;
    } else {
      toysCounter++;
    }
  }
  let totalMoneyFromToy = priceForToy * toysCounter;
  let allMoney = totalMoneyFromToy + savedMoney - MoneyTakesFromBrother;

  if (allMoney >= wattermachinePrice) {
    console.log(`Yes! ${(allMoney - wattermachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(wattermachinePrice - allMoney).toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
