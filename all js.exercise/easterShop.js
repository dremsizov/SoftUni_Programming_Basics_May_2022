function easterShop(input) {
  let startingEggsInShop = Number(input[0]);
  let index = 1;
  let command = input[index];
  let currentEggs = 0;
  let buyEggsCaounter = 0;
  let finisheggs=false

  while (command !== "Close") {
    finisheggs=false
    switch (command) {
      case "Buy":
        index++;
        currentEggs = Number(input[index]);

        if (startingEggsInShop < currentEggs) {
          console.log(`Not enough eggs in store!`);
          console.log(`You can buy only ${startingEggsInShop}.`);
          finisheggs=true
          break;
        }
        buyEggsCaounter += currentEggs;
        startingEggsInShop -= currentEggs;
        break;

      case "Fill":
        index++;
        currentEggs = Number(input[index]);
        startingEggsInShop += currentEggs;
        break;
    }
    if(finisheggs===true) {
        break;
    }
    index++;
    command = input[index];
  }
  if (command === "Close") {
    console.log(`Store is closed!`);
    console.log(`${buyEggsCaounter} eggs sold.`);
  }
}
easterShop(["20", "Buy", "18", "Buy", "4", "Buy", "20", "Close"]);
