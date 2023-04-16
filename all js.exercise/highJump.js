function highJump(input) {
  let targetJUMP = Number(input[0]);

  let index = 1;
  let CurrentJump = Number(input[index]);

  let isFailed = false;
  let jumpcaounter = 0;
  let HightLetva = targetJUMP - 30;

  while (HightLetva <= targetJUMP) {
    for (let i = 0; i < 3; i++) {
      jumpcaounter++;
      isFailed = true;
      CurrentJump = Number(input[index]);
      index++;

      if (HightLetva < CurrentJump) {
        isFailed = false;
        HightLetva += 5;
        break;
      }
    }
    if (isFailed) {
      break;
    }
  }
  if (isFailed) {
    console.log(
      `Tihomir failed at ${HightLetva}cm after ${jumpcaounter} jumps.`
    );
  } else {
    console.log(
      `Tihomir succeeded, he jumped over ${targetJUMP}cm after ${jumpcaounter} jumps.`
    );
  }
}
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
