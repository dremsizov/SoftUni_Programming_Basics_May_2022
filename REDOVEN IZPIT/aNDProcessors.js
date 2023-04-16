function aNDProcessors(input) {
  let neededProcessors = Number(input[0]);
  let workers = Number(input[1]);
  let workingDays = Number(input[2]);

  let totalWork = workers * workingDays * 8;
  let readyWork = Math.floor(totalWork / 3);

  if (readyWork < neededProcessors) {
    let missingProcessors = neededProcessors - readyWork;
    let losses = missingProcessors * 110.1;
    console.log(`Losses: -> ${losses.toFixed(2)} BGN`);
  } else {
    let moreProcessors = readyWork - neededProcessors;
    let profit = moreProcessors * 110.1;
    console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
  }
}
aNDProcessors(["150", "7", "18"]);
