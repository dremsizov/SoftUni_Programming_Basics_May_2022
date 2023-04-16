function lunchBreak(input) {
  let nameOFmovie = input[0];
  let movieTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let timeForLunch = (breakTime * 1) / 8;
  let timeForRelax = (breakTime * 1) / 4;
  let timeLeft = breakTime - timeForLunch - timeForRelax;

  if (timeLeft >= movieTime) {
    console.log(
      `You have enough time to watch ${nameOFmovie} and left with ${Math.ceil(
        timeLeft - movieTime
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${nameOFmovie}, you need ${Math.ceil(
        movieTime - timeLeft
      )} more minutes.`
    );
  }
} 
lunchBreak(["Teen Wolf", "48", "60"]);
