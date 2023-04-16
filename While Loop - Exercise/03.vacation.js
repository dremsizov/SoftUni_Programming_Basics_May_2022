function vacantion(input) {
  let moneyForVacantion = Number(input[0]);
  let budgjet = Number(input[1]);

  let days = 0;
  let spendDays = 0;
  let index = 2;

  while (budgjet < moneyForVacantion) {
    let operation = input[index];
    index++;
    let sum = Number(input[index]);
    days++;
    if (operation === "save") {
      budgjet += sum;
      spendDays = 0;
    } else if (operation === "spend") {
      budgjet -= sum;
      if (budgjet < 0) {
        budgjet = 0;
      }
      spendDays++;

      if (spendDays >=5) {
        console.log("You can't save the money.");
        console.log(days);
        return;
      }
    }
    index++;
  }
  console.log(`You saved the money for ${days} days.`);
} 
vacantion

(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])