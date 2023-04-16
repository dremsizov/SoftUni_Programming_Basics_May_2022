function bestPlayer(input) {
  let index = 0;
  let goal = 0
  let goalCounter = 0;
  let Futbolist = "";
  let bestPlayer = "";
  let MaxGoal = 0;
  let nameCurrentPlayer = "";

let command = input[index];

  while (command !== "END") {
    nameCurrentPlayer = command
    index++
    goal = Number(input[index]);

    if (goal > goalCounter) {
      goalCounter = goal;
      Futbolist = nameCurrentPlayer;
    }
    if (goal >= 10) {
        bestPlayer = nameCurrentPlayer;
        MaxGoal = goalCounter;
        break;
      }

     else if (goal >= 3) {
      bestPlayer = Futbolist;
      MaxGoal = goalCounter;
    }
    index++;
    command = input[index];
  }

  if (MaxGoal >= 3 || MaxGoal >= 10) {
    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${MaxGoal} goals and made a hat-trick !!!`);
  } else {
    console.log(`${Futbolist} is the best player!`);
    console.log(`He has scored ${goalCounter} goals.`);
  }
}

bestPlayer (["Rooney",
    "1",
    "Junior",
    "5",
    "Paolinio"
    ,"2",
    "END"]);
