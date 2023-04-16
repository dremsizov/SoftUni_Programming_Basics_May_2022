function easterEggsBattle(input) {
  let pl1Eggs = Number(input[0]);
  let pl2Eggs = Number(input[1]);

  let index = 2;
  let command = input[index];

  while (command !== "End") {
    switch (command) {
      case "one":
        pl2Eggs--;
        break;
      case "two":
        pl1Eggs--;
        break;
    }
    if (pl1Eggs === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${pl2Eggs} eggs left.`
      );
      break;
    }
    if (pl2Eggs === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${pl1Eggs} eggs left.`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (command === "End") {
    console.log(`Player one has ${pl1Eggs} eggs left.`);
    console.log(`Player two has ${pl2Eggs} eggs left.`);
  }
}
easterEggsBattle(["2", "6", "one", "two", "two"]);
