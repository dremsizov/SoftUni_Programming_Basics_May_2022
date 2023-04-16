function easterParty(input) {
  let guest = Number(input[0]);
  let PriceForOnePerson = Number(input[1]);
  let budjet = Number(input[2]);
  let total = 0;

  if (guest >= 10 && guest <= 15) {
    PriceForOnePerson = PriceForOnePerson * 0.85;
  } else if (guest > 15 && guest <= 20) {
    PriceForOnePerson = PriceForOnePerson * 0.8;
  } else if (guest>20){
    PriceForOnePerson = PriceForOnePerson * 0.75;
  }
  else {
    PriceForOnePerson=PriceForOnePerson
  }
  let cakePrice = budjet * 0.1;

  total = guest * PriceForOnePerson + cakePrice;
  if (budjet >= total) {
    console.log(`It is party time! ${(budjet - total).toFixed(2)} leva left.`);
  } else {
    console.log(`No party! ${(total - budjet).toFixed(2)} leva needed.`);
  }
}
easterParty(["8", "25", "340"]);
