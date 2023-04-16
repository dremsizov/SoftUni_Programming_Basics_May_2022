function worldSwimmingRecord(input) {
  let worldRecordInSecs = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeForMeter = Number(input[2]);

  let timeToswimm = distanceInMeters * timeForMeter;
  let delay = Math.floor(distanceInMeters / 15) * 12.5;
  let finalTime = timeToswimm + delay;

  if (finalTime >= worldRecordInSecs) {
    console.log(
      `No, he failed! He was ${(finalTime - worldRecordInSecs).toFixed(
        2
      )} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${finalTime.toFixed(
        2
      )} seconds.`
    );
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
