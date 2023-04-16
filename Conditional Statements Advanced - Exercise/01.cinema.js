function cinema(input) {
  let typeProjection = input[0];
  let rows = Number(input[1]);
  let column = Number(input[2]);

  let totalSum = 0;

  if (typeProjection === "Premiere") {
    totalSum = rows * column * 12;
  } else if (typeProjection === "Normal") {
    totalSum = rows * column * 7.5;
  } else if (typeProjection === "Discount") {
    totalSum = rows * column * 5.0;
  }
  console.log(`${totalSum.toFixed(2)} leva `);
}
cinema(["Normal", "21", "13"]);

** /*

function cinema(input) {
  let typeProjection = input[0];
  let rows = Number(input[1]);
  let column = Number(input[2]);

  switch (typeProjection) {
    case "Premiere":
      console.log(` ${(rows * column * 12).toFixed(2)} leva `);
      break;
    case "Normal":
      console.log(` ${(rows * column * 7.5).toFixed(2)} leva `);
      break;
    case "Discount":
      console.log(`${(rows * column * 5.0).toFixed(2)} leva `);
      break;
  }
}