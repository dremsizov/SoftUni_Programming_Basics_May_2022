function sumOfTwoNumbers(input) {
  let first = Number(input[0]);
  let last = Number(input[1]);
  let magicN = Number(input[2]);

  let isFound = false;
  let combinationCounter = 0;

  for (let x = first; x <= last; x++) {
    for (let y = first; y <= last; y++) {
      combinationCounter++;
      let sum = x + y;
      if (sum === magicN) {
        console.log(
          `Combination N:${combinationCounter} (${x} + ${y} = ${magicN})`
        );
        isFound = true;
        break;
      }
    }
    if (isFound) break;
  }
  if (!isFound)
    console.log(
      `${combinationCounter} combinations - neither equals ${magicN}`
    );
}
sumOfTwoNumbers (["23",
"24",
"20"])

