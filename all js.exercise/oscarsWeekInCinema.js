function oscarsWeekInCinema(input) {
  let nameMovie = input[0];
  let typeHall = input[1];
  let tickets = Number(input[2]);
  let totalPrice = 0;

  switch (nameMovie) {
    case "A Star Is Born":
      if (typeHall === "normal") {
        totalPrice = tickets * 7.5;
      } else if (typeHall === "luxury") {
        totalPrice = tickets * 10.5;
      } else if (typeHall === "ultra luxury") {
        totalPrice = tickets * 13.5;
      }
      break;
    case "Bohemian Rhapsody":
      if (typeHall === "normal") {
        totalPrice = tickets * 7.35;
      } else if (typeHall === "luxury") {
        totalPrice = tickets * 9.45;
      } else if (typeHall === "ultra luxury") {
        totalPrice = tickets * 12.75;
      }
      break;
    case "Green Book":
      if (typeHall === "normal") {
        totalPrice = tickets * 8.15;
      } else if (typeHall === "luxury") {
        totalPrice = tickets * 10.25;
      } else if (typeHall === "ultra luxury") {
        totalPrice = tickets * 13.25;
      }

      break;
    case "The Favourite":
      if (typeHall === "normal") {
        totalPrice = tickets * 8.75;
      } else if (typeHall === "luxury") {
        totalPrice = tickets * 11.55;
      } else if (typeHall === "ultra luxury") {
        totalPrice = tickets * 13.95;
      }
      break;
  }
  console.log(`${nameMovie} -> ${totalPrice.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["Green Book", "normal", "63"]);
