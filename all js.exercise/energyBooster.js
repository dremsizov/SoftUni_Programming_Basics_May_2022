function energyBooster(input) {
  let fruit = input[0];
  let size = input[1];
  let number = Number(input[2]);
  let sum = 0;

  switch (fruit) {
    case "Watermelon":
      switch (size) {
        case "small":
          sum = number * (2 * 56);
          break;
        case "big":
          sum = number * (5 * 28.7);
          break;
      }

      break;

    case "Mango":
      switch (size) {
        case "small":
          sum = number * (2 * 36.66);
          break;
        case "big":
          sum = number * (5 * 19.6);
          break;
      }

      break;

    case "Pineapple":
      switch (size) {
        case "small":
          sum = number * (2 * 42.1);
          break;
        case "big":
          sum = number * (5 * 24.8);
          break;
      }

      break;

    case "Raspberry":
      switch (size) {
        case "small":
          sum = number * (2 * 20);
          break;
        case "big":
          sum = number * (5 * 15.2);
          break;
      }
      break;
  }
  if (sum >= 400 && sum <= 1000) {
    sum = sum * 0.85;
  } else if (sum > 1000) {
    sum = sum * 0.5;
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
energyBooster(["Mango", "big", "8"]);
