function worldSnookerChampionship(input) {
  let typeChampionship = input[0];
  let typeTicket = input[1];
  let ticketCaounter = Number(input[2]);
  let picture = input[3];
  let money = 0;

  switch (typeTicket) {
    case "Standard":
      switch (typeChampionship) {
        case "Quarter final":
          money = ticketCaounter * 55.5;
          break;

        case "Semi final":
          money = ticketCaounter * 75.88;
          break;

        case "Final":
          money = ticketCaounter * 110.1;
          break;
      }
      break;

    case "Premium":
      switch (typeChampionship) {
        case "Quarter final":
          money = ticketCaounter * 105.2;
          break;

        case "Semi final":
          money = ticketCaounter * 125.22;
          break;

        case "Final":
          money = ticketCaounter * 160.66;
          break;
      }

      break;

    case "VIP":
      switch (typeChampionship) {
        case "Quarter final":
          money = ticketCaounter * 118.9;
          break;

        case "Semi final":
          money = ticketCaounter * 300.4;
          break;

        case "Final":
          money = ticketCaounter * 400;
          break;
      }

      break;
  }

  if (money > 4000) {
    money = money * 0.75;   
  } else if (money > 2500 && money <=4000) {
    money = money * 0.9;
    if (picture == "Y") {
      money += ticketCaounter * 40;
    }
  }
  else {
      money=money
      if (picture == "Y") {
        money += ticketCaounter * 40;
      }
  }
  console.log(money.toFixed(2));
}
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
