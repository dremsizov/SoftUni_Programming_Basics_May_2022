function combinations(input) {
  let n = Number(input[0]);
  let combination = 0;

  let x = 0;
  let y = 0;
  let z = 0;

  for (x = 0; x <= n; x++) {
    for (y = 0; y <= n; y++) {
      for (z = 0; z <= n; z++) {
        let sum = x + y + z;
        if (sum == n) {
          combination++;
        }
      }
    }
  }
  console.log(combination);
}
combinations(["5"]);
