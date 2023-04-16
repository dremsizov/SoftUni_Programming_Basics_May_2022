function changeBureau(input) {
  let bitcoin = Number(input[0]);
  let chineseUana = Number(input[1]);
  let changeCommision = Number(input[2]);

  let bitcoinTolev = bitcoin * 1168;
  let UanaToDollars = chineseUana * 0.15;
  let dollarsToLev = UanaToDollars * 1.76;
  let allLV = bitcoinTolev + dollarsToLev;
  let LevtoEuro = allLV / 1.95;
  let commision = LevtoEuro * (changeCommision / 100);
  let finalSum = LevtoEuro - commision;

  console.log(finalSum.toFixed(2));
}

changeBureau(["1", "5", "5"]);
