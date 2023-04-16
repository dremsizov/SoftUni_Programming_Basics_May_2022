function shopping(input) {
  let budget = Number(input[0]);
  let videoCARD = Number(input[1]);
  let CPU = Number(input[2]);
  let RAM = Number(input[3]);

  let moneyForVideoCARD = videoCARD * 250;
  let moneyForCPU = CPU * (moneyForVideoCARD * 0.35);
  let moneyForRAM = RAM * (moneyForVideoCARD * 0.1);
  let totalSum = moneyForVideoCARD + moneyForCPU + moneyForRAM;

  if (videoCARD > CPU) {
    totalSum = totalSum * 0.85;
  }

  if (budget >= totalSum) {
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
