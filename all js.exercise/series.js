function series(input) {
  let budget = Number(input[0]);
  let serials = Number(input[1]);
  let index = 2;
  let command = input[index];
  let price = 0;

  for (let i = 0; i < serials; i++) {
    let nameSerial = input[index];

    switch (nameSerial) {
      case "Thrones":
        index++;
        price = Number(input[index]);
        price = price * 0.5;
        budget -= price;
        break;

      case "Lucifer":
        index++;
        price = Number(input[index]);
        price = price * 0.6;
        budget -= price;

        break;
      case "Protector":
        index++;
        price = Number(input[index]);
        price = price * 0.7;
        budget -= price;
        break;
      case "TotalDrama":
        index++;
        price = Number(input[index]);
        price = price * 0.8;
        budget -= price;

        break;
      case "Area":
        index++;
        price = Number(input[index]);
        price = price * 0.9;
        budget -= price;
        break;
    }

    if (
      nameSerial !== "Thrones" &&
      nameSerial !== "Lucifer" &&
      nameSerial !== "Protector" &&
      nameSerial !== "TotalDrama" &&
      nameSerial !== "Area"
    ) {
      index++;
      price = Number(input[index]);
      budget -= price;
    }

    index++;
  }
  if (budget >= 0) {
    console.log(
      `You bought all the series and left with ${budget.toFixed(2)} lv.`
    );
  } else {
    console.log(
      `You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`
    );
  }
}
series([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
