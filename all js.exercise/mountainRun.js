function mountainRun(input) {
  let recordInSec = Number(input[0]);
  let distanceInMetters = Number(input[1]);
  let timeInSecForOneMetter = Number(input[2]);

  let target = distanceInMetters * timeInSecForOneMetter;
  let dellay = Math.floor(distanceInMetters / 50) * 30;
  let totalTime = target + dellay;

  if (totalTime >= recordInSec) {
    console.log(
      `No! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`
    );
  } else {
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
  }
}
mountainRun (["1377",
"389",
"3"])

