function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzle = Number(input[1]);
  let dolls = Number(input[2]);
  let taddybears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let puzzlePrice = puzzle * 2.6;
  let dollsPrice = dolls * 3;
  let taddybearsPrice = taddybears * 4.1;
  let minionsPrice = minions * 8.2;
  let trucksPrice = trucks * 2;

  let totalSum =
    puzzlePrice + dollsPrice + taddybearsPrice + minionsPrice + trucksPrice;
  let toys = puzzle + dolls + taddybears + minions + trucks;

  if (toys >= 50) {
    totalSum = totalSum * 0.75;
  }
  let rent = totalSum * 0.1;
  let finalMoney = totalSum - rent;

  if (finalMoney >= tripPrice) {
    console.log(`Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - finalMoney).toFixed(2)} lv needed.`
    );
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
