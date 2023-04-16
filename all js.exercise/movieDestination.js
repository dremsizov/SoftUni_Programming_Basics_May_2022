function movieDestination(input) {
  let movieBudget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = Number(input[3]);
  let totalSum = 0;

  switch (destination) {
    case "Dubai":
      if (season === "Winter") {
        totalSum = days * 45000;
        totalSum = totalSum * 0.7;
      } else if (season === "Summer") {
        totalSum = days * 40000;
        totalSum = totalSum * 0.7;
      }
      break;
    case "Sofia":
      if (season === "Winter") {
        totalSum = days * 17000;
        totalSum = totalSum * 1.25;
      } else if (season === "Summer") {
        totalSum = days * 12500;
        totalSum = totalSum * 1.25;
      }
      break;
    case "London":
      if (season === "Winter") {
        totalSum = days * 24000;
      } else if (season === "Summer") {
        totalSum = days * 20250;
      }

      break;
  }
  if (movieBudget >= totalSum) {
    console.log(
      `The budget for the movie is enough! We have ${(
        movieBudget - totalSum
      ).toFixed(2)} leva left!`
    );
  } else if (movieBudget < totalSum) {
    console.log(
      `The director needs ${(totalSum - movieBudget).toFixed(2)} leva more!`
    );
  }
}
movieDestination(["1000000", "Dubai", "Summer", "5"]);
