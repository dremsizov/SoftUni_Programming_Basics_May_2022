function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (x = floors; x > 0; x--) {
    let buff = "";
    for (y = 0; y < rooms; y++) {
      if (x === floors) {
        buff += `L${x}${y} `;
      } else if (x % 2 === 0) {
        buff += `O${x}${y} `;
      } else {
        buff += `A${x}${y} `;
      }
    }
    console.log(buff);
  }
}
building(["6", "4"]);
