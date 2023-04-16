function seriesCalculator(input) {
  let nameSerial = input[0];
  let seasons = Number(input[1]);
  let Episode = Number(input[2]);
  let timeForEpisode = Number(input[3]);

  let advertising = 0.2 * timeForEpisode;
  let totalTimeForEpisode = timeForEpisode + advertising;
  let moreTime = seasons * 10;
  let totalTime = totalTimeForEpisode * Episode * seasons + moreTime;

  console.log(
    `Total time needed to watch the ${nameSerial} series is ${totalTime} minutes.`
  );
}
seriesCalculator(["Riverdale", "3", "21", "45"]);
