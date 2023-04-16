function basketballEquipment(input) {
  let yearTax = Number(input[0]);

  let basketballSneakers = yearTax * 0.6;
  let basketbalEquipment = basketballSneakers * 0.8;
  let basketbalBall = basketbalEquipment * 0.25;
  let basketballAccessories = basketbalBall * 0.2;

  let total = (
    yearTax +
    basketballSneakers +
    basketbalEquipment +
    basketbalBall +
    basketballAccessories
  ).toFixed(2);

  console.log(total);
}
basketballEquipment(["550"]);
