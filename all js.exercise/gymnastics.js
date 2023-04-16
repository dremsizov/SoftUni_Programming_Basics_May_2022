function gymnastics(input) {
  let country = input[0];
  let instrument = input[1];
  let points = 0;

  switch (country) {
    case "Russia":
      switch (instrument) {
        case "ribbon":
          points = 9.1 + 9.4;
          break;

        case "hoop":
          points = 9.3 + 9.8;
          break;

        case "rope":
          points = 9.6 + 9.0;
          break;
      }

      break;

    case "Bulgaria":
      switch (instrument) {
        case "ribbon":
          points = 9.6 + 9.4;

          break;

        case "hoop":
          points = 9.55 + 9.75;
          break;

        case "rope":
          points = 9.5 + 9.4;
          break;
      }

      break;

    case "Italy":
      switch (instrument) {
        case "ribbon":
          points = 9.2 + 9.5;
          break;

        case "hoop":
          points = 9.45 + 9.35;
          break;

        case "rope":
          points = 9.7 + 9.15;
          break;
      }
      break;
  }
  console.log(
    `The team of ${country} get ${points.toFixed(3)} on ${instrument}.`
  );

  let leftPoints = ((20 - points) / 20) * 100;
  console.log(`${leftPoints.toFixed(2)}%`);
}
gymnastics(["Russia", "rope"]);
