function hairSalon(input) {
  let target = Number(input[0]);
  let index = 1;
  let command = input[index];
  let money = 0;
  

  while (command !== "closed") {
    
    if (command === "haircut") {
      index++;
      command = input[index];
      if (command === "ladies") {
        money += 20;
      } else if (command === "mens") {
        money += 15;
      } else if (command === "kids") {
        money += 10;
      }
      if (money >= target) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${money} lv.`);
        break;
      }
    } else if (command === "color") {
      index++;
      command = input[index];
      if (command === "touch up") {
        money += 20;
      } else if (command === "full color") {
        money += 30;
      }
      index++;
      command = input[index];
    }
  }
  if (money < target) {
    console.log(`Target not reached! You need ${target - money}lv. more.`);
    console.log(`Earned money: ${money} lv.`);
  }
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])
