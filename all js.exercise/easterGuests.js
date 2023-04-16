function easterGuests(input) {
  let guest = Number(input[0]);
  let budjet = Number(input[1]);

  let neededEastBread = Math.ceil(guest / 3);
  let neededEggs = guest * 2;
  let eastBreadPrice = neededEastBread * 4;
  let eggsPrice = neededEggs * 0.45;
  let total = eastBreadPrice + eggsPrice;

  if (total <= budjet) {
    console.log(
      `Lyubo bought ${neededEastBread} Easter bread and ${neededEggs} eggs.`
    );
    console.log(`He has ${(budjet - total).toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${(total - budjet).toFixed(2)} lv. more.`);
  }
}
easterGuests(["9", "12"]);
