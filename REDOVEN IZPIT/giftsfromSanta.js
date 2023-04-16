function giftsfromSanta(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let s = Number(input[2]);
  let buff = "";

  for (let i = m; i >= n; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i != s) {
        buff += `${i} `;
      } else {
        break;
      }
    }
  }
  console.log(buff);
}
giftsfromSanta(["1", "36", "12"]);
