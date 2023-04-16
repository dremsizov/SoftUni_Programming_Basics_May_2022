function excursion(input) {
  let peopleInGroup = Number(input[0]);
  let nights = Number(input[1]);
  let bussPass = Number(input[2]);
  let museumTickets = Number(input[3]);

  let allNights = nights * 20;
  let allbussPass = bussPass * 1.6;
  let allMuseumTickets = museumTickets * 6;
  allForOnePersoen = allNights + allbussPass + allMuseumTickets;

  let sumForAllGroup = allForOnePersoen * peopleInGroup;
  let tax = sumForAllGroup * 1.25;

  console.log(tax.toFixed(2));
}
excursion(["131", "9", "33", "46"]);
