function filmPremiere(input) {
  let movieName = input[0];
  let packet = input[1];
  let tickets = Number(input[2]);
  let totalPrice = 0;

  switch (movieName) {
    case "John Wick":
      if (packet === "Drink") {
        totalPrice = tickets * 12;
      } else if (packet === "Popcorn") {
        totalPrice = tickets * 15;
      } else if (packet === "Menu") {
        totalPrice = tickets * 19;
      }
      break;
    case "Star Wars":
      if (packet === "Drink") {
        totalPrice = tickets * 18;
      } else if (packet === "Popcorn") {
        totalPrice = tickets * 25;
      } else if (packet === "Menu") {
        totalPrice = tickets * 30;
      }
      break;
    case "Jumanji":
      if (packet === "Drink") {
        totalPrice = tickets * 9;
      } else if (packet === "Popcorn") {
        totalPrice = tickets * 11;
      } else if (packet === "Menu") {
        totalPrice = tickets * 14;
      }
      break;
  }

  if (movieName === "Star Wars") {
    if (tickets >= 4) {
      totalPrice = totalPrice * 0.7;
    }
  }
  if (movieName === "Jumanji") {
    if ((tickets == 2)) {
      totalPrice = totalPrice * 0.85;
    }
  }

  console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
"Popcorn",
"1"])
