function goldMine(input) {
  let locations = Number(input[0]);

  let index = 1;
  let command = input[index];

  for (let i = 0; i < locations; i++) {
    let WantetAvrgoutput = Number(input[index]);
    index++;
    let days = Number(input[index]);
    let total = 0;
    for (let j = 0; j < days; j++) {
      index++;
      let output = Number(input[index]);
      total += output;
    }
    let avrgOutput = total / days;
    if (avrgOutput >= WantetAvrgoutput) {
      console.log(`Good job! Average gold per day: ${avrgOutput.toFixed(2)}.`);
    } else {
      console.log(
        `You need ${(WantetAvrgoutput - avrgOutput).toFixed(2)} gold.`
      );
    }
    index++;
  }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])

