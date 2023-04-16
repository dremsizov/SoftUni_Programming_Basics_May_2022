function computerRoom(input) {
  let month = input[0];
  let hours = Number(input[1]);
  let peopleInGroup = Number(input[2]);
  let timePeriod = input[3];
  let price = 0;
  let totalSum = 0;

  switch (timePeriod) {
    case "day":
      switch (month) {
        case "march":
          price = 10.5;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;

        case "april":
          price = 10.5;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;

        case "may":
          price = 10.5;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;

        case "june":
          price = 12.6;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;

        case "july":
          price = 12.6;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
        case "august":
          price = 12.6;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
      }

      break;

    case "night":
      switch (month) {
        case "march":
          price = 8.4;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
        case "april":
          price = 8.4;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
        case "may":
          price = 8.4;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
        case "june":
          price = 10.2;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;

        case "july":
          price = 10.2;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
        case "august":
          price = 10.2;
          if (peopleInGroup >= 4) {
            price = price * 0.9;
          }
          if (hours >= 5) {
            price = price * 0.5;
          }
          totalSum = (price * hours * peopleInGroup).toFixed(2);
          break;
      }

      break;
  }
  console.log(`Price per person for one hour: ${price.toFixed(2)}`);
  console.log(`Total cost of the visit: ${totalSum}`);
}
computerRoom(["july", "5", "5", "night"]);
