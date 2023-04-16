// kod val

function tradeCommissions(input) {
  let town = input[0];
  let seil = Number(input[1]);
  let sum = 0;
  switch (town) {
    case "Sofia":
      if (seil >= 0 && seil <= 500) {
        sum = seil * 0.05;
      } else if (seil > 500 && seil <= 1000) {
        sum = seil * 0.07;
      } else if (seil > 1000 && seil <= 10000) {
        sum = seil * 0.08;
      } else if (seil > 10000) {
        sum = seil * 0.12;
      }
      break;
    case "Varna":
      if (seil >= 0 && seil <= 500) {
        sum = seil * 0.045;
      } else if (seil > 500 && seil <= 1000) {
        sum = seil * 0.075;
      } else if (seil > 1000 && seil <= 10000) {
        sum = seil * 0.1;
      } else if (seil > 10000) {
        sum = seil * 0.13;
      }
 
      break;
    case "Plovdiv":
      if (seil >= 0 && seil <= 500) {
        sum = seil * 0.055;
      } else if (seil > 500 && seil <= 1000) {
        sum = seil * 0.08;
      } else if (seil > 1000 && seil <= 10000) {
        sum = seil * 0.12;
      } else if (seil > 10000) {
        sum = seil * 0.145;
      }
 
      break;
  }
  if(town!="Sofia" && town!="Plovdiv" && town!="Varna" || seil<0){
 
        console.log("error");
 
  }
  else {
    console.log(`${sum.toFixed(2)}`);
  }
}
