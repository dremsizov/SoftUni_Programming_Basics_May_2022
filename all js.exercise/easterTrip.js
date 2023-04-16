function easterTrip(input) {
  let destination = input[0];
  let period = input[1];
  let nights = Number(input[2]);
  let totalPrice = 0;

  switch (destination) {
    case "France":
      switch (period) {
        case "21-23":
          totalPrice = nights * 30;
          break;
        case "24-27":
          totalPrice = nights * 35;
          break;
        case "28-31":
          totalPrice = nights * 40;
          break;
      }

      break;
    case "Italy":
      switch (period) {
        case "21-23":
          totalPrice = nights * 28;
          break;
        case "24-27":
          totalPrice = nights * 32;
          break;
        case "28-31":
          totalPrice = nights * 39;
          break;
      }
      break;
    case "Germany":
      switch (period) {
        case "21-23":
          totalPrice = nights * 32;
          break;
        case "24-27":
          totalPrice = nights * 37;
          break;
        case "28-31":
          totalPrice = nights * 43;
          break;
      }
      break;
  }
  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}
easterTrip(["Germany", "24-27", "5"]);
