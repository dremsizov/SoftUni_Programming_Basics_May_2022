function cinema(input) {
  let placeInHall = Number(input[0]);
  let index = 1;
  let command = input[index];
  let ALLmoney = 0;
  let money = 0;
  let sumPeople = 0;

  while (command !== "Movie time!") {
    let enteringPeople = Number(command);
    sumPeople += enteringPeople;

    if (placeInHall < sumPeople) {
        console.log("The cinema is full.");
        console.log(`Cinema income - ${ALLmoney} lv.`);
        break;
      }
    if (enteringPeople % 3 === 0) {
      money = (enteringPeople * 5) - 5;
    } else {
      money = enteringPeople * 5;
    }

    ALLmoney += money;

    index++;
    command = input[index];
  }

  if (command === "Movie time!") {
    console.log(
      `There are ${placeInHall - sumPeople} seats left in the cinema.`
    );
    console.log(`Cinema income - ${ALLmoney} lv.`);
  }
    
  }
  
cinema( ["100",
"10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])



