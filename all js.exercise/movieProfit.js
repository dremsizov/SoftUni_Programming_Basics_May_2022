function movieProfit(input) {
  let movieName = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let percentForCinema = Number(input[4]);

  let priceTicketPerDay = tickets * ticketPrice;
  let allMoney = days * priceTicketPerDay;
  let percentFromallMoney = (allMoney * percentForCinema) / 100;
  let money = allMoney - percentFromallMoney;
  console.log(
    `The profit from the movie ${movieName} is ${money.toFixed(2)} lv.`
  );
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
