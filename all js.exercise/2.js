function hairSalon(input) {
  let target = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;
  let operation = input[index];
  index++;
  let money = 0;

  while (command !== "closed") {
    switch (command) {
      case "haircut":
        switch (operation) {
          case "ladies":
            money += 20;
            break;
          case "mens":
            money += 15;
            break;
          case "kids":
            money += 10;
            break;
        }
      case "color":
        switch (operation) {
          case "touch up":
            money += 20;
            break;
          case "full color":
            money += 30;
            break;
        }
    }
    if (money >= target) {
      console.log("You have reached your target for the day!");
      break;
    }
    command = input[index++];
    operation = input[index++];
  }
  if (money < target) {
    console.log(`Target not reached! You need ${target - money}lv. more.`);
  }

  console.log(`Earned money: ${money}lv.`);
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"
])