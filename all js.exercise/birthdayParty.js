function birthdayParty(input) {
  let rentAhall = Number(input[0]);
  let cake = rentAhall * 0.2;
  let drinks = cake * 0.55;
  let animation = rentAhall / 3;

  let totalSum = rentAhall + cake + drinks + animation;
  console.log(totalSum);
}
birthdayParty(["2250"]);
