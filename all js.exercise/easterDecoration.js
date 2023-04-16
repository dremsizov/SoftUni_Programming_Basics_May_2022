function easterDecoration(input) {
  let clients = Number(input[0]);
  let index = 1;
  let command = input[index];
  let totalMoney = 0;

  for (let i = 0; i < clients; i++) {
    let money = 0;
    let buyThins = 0;
    while (command !== "Finish") {
      switch (command) {
        case "basket":
          money += 1.5;
          break;
        case "wreath":
          money += 3.8;
          break;
        case "chocolate bunny":
          money += 7;
          break;
      }
      buyThins++;
      index++;
      command = input[index];
    }
    if (buyThins % 2 == 0) {
      money = money * 0.8;
    }
    totalMoney += money;
    console.log(
      `You purchased ${buyThins} items for ${money.toFixed(2)} leva.`
    );
    index++;
    command = input[index];
  }
  console.log(
    `Average bill per client is: ${(totalMoney / clients).toFixed(2)} leva.`
  );
}
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
