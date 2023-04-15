60/100
function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let FisherMan = Number(input[2]);

  let boatRent = 0;

  switch (season) {
    case "Spring":
      boatRent = 3000;
      if (FisherMan <= 6) {
        boatRent = 3000 * 0.9;
      } else if (FisherMan >= 7 && FisherMan <= 11) {
        boatRent = 3000 * 0.85;
      } else if (FisherMan >= 12) {
        boatRent = 3000 * 0.75;
      } else if (FisherMan % 2 === 0) {
        boatRent = boatRent * 0.95;
      }
      break;

    case "Summer":
      boatRent = 4200;
      if (FisherMan <= 6) {
        boatRent = 4200 * 0.9;
      } else if (FisherMan >= 7 && FisherMan <= 11) {
        boatRent = 4200 * 0.85;
      } else if (FisherMan >= 12) {
        boatRent = 4200 * 0.75;
      } else if (FisherMan % 2 === 0) {
        boatRent = boatRent * 0.95;
      }
      break;

    case "Autumn":
      boatRent = 4200;
      if (FisherMan <= 6) {
        boatRent = 4200 * 0.9;
      } else if (FisherMan >= 7 && FisherMan <= 11) {
        boatRent = 4200 * 0.85;
      } else if (FisherMan >= 12) {
        boatRent = 4200 * 0.75;
      }
      break;
    case "Winter":
      boatRent = 2600;
      if (FisherMan <= 6) {
        boatRent = 2600 * 0.9;
      } else if (FisherMan >= 7 && FisherMan <= 11) {
        boatRent = 2600 * 0.85;
      } else if (FisherMan >= 12) {
        boatRent = 2600 * 0.75;
      } else if (FisherMan % 2 === 0) {
        boatRent = boatRent * 0.95;
      }
      break;
  }
  if (budget >= boatRent) {
    console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
  } else
    console.log(
      `Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`
    );
}
fishingBoat(["2000", "Winter", "13"]);





***////
function demo(input) {
 
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatRent = 0;
 
    switch (season) {
        case 'Spring': boatRent = 3000; break;
        case 'Summer':
        case 'Autumn': boatRent = 4200; break;
        case 'Winter': boatRent = 2600; break;
    }
 
    if (fishermen <= 6) {
        boatRent = boatRent * 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        boatRent = boatRent * 0.85;
    } else if (fishermen >= 12) {
        boatRent = boatRent * 0.75;
    }
 
    if(fishermen % 2 === 0 && season !== 'Autumn'){
        boatRent = boatRent * 0.95;
    }
 
    if(budget >= boatRent){
        console.log(`Yes! You have ${(budget - boatRent).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(boatRent - budget).toFixed(2)} leva.`);
    }
}
demo(["2000",
"Winter",
"13"])