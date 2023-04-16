function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  
  let isExcluded = false;
  let currentClass = 1;
  let badGrade = 0;
  let sumGrade = 0;

  while (currentClass <= 12) {
    let tempGrade = Number(input[index]);
    index++;

    if (tempGrade < 4) {
      badGrade++;
      if (badGrade > 1) {
        isExcluded = true;
        console.log(` ${name} has been excluded at ${currentClass} grade`);
        break;
      }
      continue;
    }

    sumGrade += tempGrade;
    currentClass++;
  }
  if (!isExcluded) {
    console.log(
      `${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`
    );
  }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
