function trekkingMania(input) {
  let group = Number(input[0]);
  let allpeople = 0;
  let index = 1;
  let peopleInGroup = Number(input[index]);
  let Musala = 0;
  let MusalaCounter = 0;
  let Monblan = 0;
  let MonblanCounter = 0;
  let Kilimandjaro = 0;
  let KilimandjaroCounter = 0;
  let K2 = 0;
  let K2Counter = 0;
  let Everest = 0;
  let EverestCounter = 0;

  for (let i = 1; i <= group; i++) {
    if (peopleInGroup <= 5) {
      Musala = peopleInGroup;
      MusalaCounter += Musala;
    } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
      Monblan = peopleInGroup;
      MonblanCounter += Monblan;
    } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
      Kilimandjaro = peopleInGroup;
      KilimandjaroCounter += Kilimandjaro;
    } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
      K2 = peopleInGroup;
      K2Counter += K2;
    } else if (peopleInGroup >= 41) {
      Everest = peopleInGroup;
      EverestCounter += Everest;
    }
    index++;
    peopleInGroup = Number(input[index]);
  }
  allpeople =
    MusalaCounter +
    MonblanCounter +
    KilimandjaroCounter +
    K2Counter +
    EverestCounter;

  console.log(`${((MusalaCounter / allpeople) * 100).toFixed(2)}%`);
  console.log(`${((MonblanCounter / allpeople) * 100).toFixed(2)}%`);
  console.log(`${((KilimandjaroCounter / allpeople) * 100).toFixed(2)}%`);
  console.log(`${((K2Counter / allpeople) * 100).toFixed(2)}%`);
  console.log(`${((EverestCounter / allpeople) * 100).toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
