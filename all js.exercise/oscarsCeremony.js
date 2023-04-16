function oscarsCeremony(input) {
  let rentAhall = Number(input[0]);
  let oscarPrice = rentAhall * 0.7;
  let cetaring = oscarPrice * 0.85;
  let sound = 0.5 * cetaring;

  let allMoney = rentAhall + oscarPrice + cetaring + sound;
  console.log(allMoney.toFixed(2));
}
oscarsCeremony(["5555"]);
