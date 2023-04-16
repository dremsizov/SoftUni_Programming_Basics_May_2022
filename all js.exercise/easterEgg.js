function easterEgg(input) {
  let allEggs = Number(input[0]);
  let index = 1;
  let command = input[index];

  let redEggsCaounter = 0;
  let orangeEggsCaounter = 0;
  let blueEggsCaounter = 0;
  let greenEggsCaounter = 0;
  let maxEggs = 0;
  let maxClour = "";

  for (let i = 0; i < allEggs; i++) {
    let eggsCaounter = 0;
    let colour = "";
    switch (command) {
      case "red":
        redEggsCaounter++;
        eggsCaounter = redEggsCaounter;
        colour = input[index];
        break;

      case "orange":
        orangeEggsCaounter++;
        eggsCaounter = orangeEggsCaounter;
        colour = input[index];
        break;

      case "blue":
        blueEggsCaounter++;
        eggsCaounter = blueEggsCaounter;
        colour = input[index];
        break;

      case "green":
        greenEggsCaounter++;
        eggsCaounter = greenEggsCaounter;
        colour = input[index];
        break;
    }
    if (eggsCaounter > maxEggs) {
      maxEggs = eggsCaounter;
      maxClour = colour;
    }

    index++;
    command = input[index];
  }
  console.log(`Red eggs: ${redEggsCaounter}`);
  console.log(`Orange eggs: ${orangeEggsCaounter}`);
  console.log(`Blue eggs: ${blueEggsCaounter}`);
  console.log(`Green eggs: ${greenEggsCaounter}`);
  console.log(`Max eggs: ${maxEggs} -> ${maxClour} `);
}
easterEgg(["4",
"blue",
"red",
"blue",
"orange"]) 

