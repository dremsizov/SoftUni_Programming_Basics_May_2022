function barcodeGenerator(input) {
  let n1 = input[0];
  let n2 = input[1];

  let firstStartNumber = Number(n1[0]);
  let secondStartNumber = Number(n1[1]);
  let thirdStartNumber = Number(n1[2]);
  let lastStartNumber = Number(n1[3]);

  let firstENDNumber = Number(n2[0]);
  let secondENDNumber = Number(n2[1]);
  let thirdENDNumber = Number(n2[2]);
  let lastENDNumber = Number(n2[3]);

  let output = "";

  for (let i = firstStartNumber; i <= firstENDNumber; i++) {
    for (let j = secondStartNumber; j <= secondENDNumber; j++) {
      for (let k = thirdStartNumber; k <= thirdENDNumber; k++) {
        for (let l = lastStartNumber; l <= lastENDNumber; l++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
            output += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(output);
}
barcodeGenerator(["2345", "6789"]);
