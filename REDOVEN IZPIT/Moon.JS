function moon(input) {
  let speed = Number(input[0]);
  let diselFor100 = Number(input[1]);

  let totalRoud = 384400 * 2;
  let timeForGoAndBack = Math.ceil(totalRoud / speed);
  let totaTime = timeForGoAndBack + 3;
  let totalDisel = (diselFor100 * totalRoud) / 100;

  console.log(totaTime);
  console.log(totalDisel);
}
moon(["5000", "7"]);
