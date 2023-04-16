function tennisEquipment(input) {
  let oneTennisRacket = Number(input[0]);
  let tenisRackets = Number(input[1]);
  let sneakers = Number(input[2]);

  let allRackets = tenisRackets * oneTennisRacket;
  let onePearSneakers = oneTennisRacket / 6;
  let allSneakers = sneakers * onePearSneakers;

  let leftEquipmet = (allRackets + allSneakers) * 0.2;
  let total = allRackets + allSneakers + leftEquipmet;

  let djokovichPrice = Math.floor(total / 8);
  let sponsorsPrice = Math.ceil((total * 7) / 8);

  console.log(`Price to be paid by Djokovic ${djokovichPrice}`);
  console.log(`Price to be paid by sponsors ${sponsorsPrice}`);
}
tennisEquipment(["850", "4", "2"]);
