function easterBakery(input) {
  let flourPrice = Number(input[0]);
  let KGflour = Number(input[1]);
  let KGsugar = Number(input[2]);
  let eggs = Number(input[3]);
  let maqPacage = Number(input[4]);

  let sugarPrice = flourPrice * 0.75;
  let eggsPrice = flourPrice * 1.1;
  let priceMaq = sugarPrice * 0.2;

  let totalFlour = flourPrice * KGflour;
  let totalSugar = sugarPrice * KGsugar;
  let totalEggs = eggs * eggsPrice;
  let maqPrice = maqPacage * priceMaq;

  let totalSUM = (totalFlour + totalSugar + totalEggs + maqPrice).toFixed(2);

  console.log(totalSUM);
}
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);
