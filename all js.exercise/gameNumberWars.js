function gameNumberWars(input) {
  let nameFirstPlayer = input[0];
  let nameSecondPlayer = input[1];

  let index = 2;
  let command = input[index];

  let pointsFirstPlayer = 0;
  let pointsSecondPlayer = 0;


  while (command !== "End of game")  {
    let firstPlayerCard = Number(command);
    index++;
    let secondPlayerCard = Number(input[index]);

    if (firstPlayerCard > secondPlayerCard) {
      pointsFirstPlayer+= firstPlayerCard-secondPlayerCard;

    } else if (firstPlayerCard < secondPlayerCard) {
      pointsSecondPlayer +=secondPlayerCard-firstPlayerCard

    } else {
        index++;
        firstPlayerCard = Number(input[index]);
        index++;
        secondPlayerCard = Number(input[index]);
      console.log("Number wars!");
      
      if (firstPlayerCard > secondPlayerCard) {
        console.log(`${nameFirstPlayer} is winner with ${pointsFirstPlayer} points`);
        
      } 
      else  {
        console.log(`${nameSecondPlayer} is winner with ${pointsSecondPlayer} points`);
      }
        break;
    }
    index++;
    command = input[index];
  }
if (command === "End of game") {
    console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
    console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
  }
}
gameNumberWars(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"])


