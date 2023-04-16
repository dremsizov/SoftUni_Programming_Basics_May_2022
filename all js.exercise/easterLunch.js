function easterLunch(input) {
  let easterBread = Number(input[0]);
  let eggs = Number(input[1]);
  let KGcockies = Number(input[2]);

  let priceEasterBread = easterBread * 3.2;
  let eggsPrice = eggs * 4.35;
  let coockiePrice = KGcockies * 5.4;

  let coloreggsPrice = eggs * 12 * 0.15;

  let totalSum = (
    priceEasterBread +
    eggsPrice +
    coockiePrice +
    coloreggsPrice
  ).toFixed(2);
  console.log(totalSum);
}
easterLunch(["3", "2", "3"]);
