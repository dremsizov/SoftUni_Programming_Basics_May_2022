function skeleton(input) {
  let min = Number(input[0]);
  let sec = Number(input[1]);
  let route = Number(input[2]);
  let secFor100M = Number(input[3]);

  let totalTimeInSec = min * 60 + sec;
  let minusTime = route / 120;
  let totalMinsTime = minusTime * 2.5;

  let MartinsTime = (route / 100) * secFor100M - totalMinsTime;

  if (MartinsTime <= totalTimeInSec) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${MartinsTime.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${(MartinsTime - totalTimeInSec).toFixed(
        3
      )} second slower.`
    );
  }
}
skeleton(["1", "20", "1546", "12"]);
