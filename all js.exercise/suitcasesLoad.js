function suitcasesLoad(input) {
  let trunk = Number(input[0]);
  let index = 1;
  let command = input[index];
  let leftspace = 0;
  let suitCaseCaounter = 0;
  let NEEDSPACE = true;
  

  while (command !== "End") {
    suitCaseCaounter++;
    let Currentsuitcase = Number(command);

    if (suitCaseCaounter % 3 === 0) {
        Currentsuitcase = Currentsuitcase * 1.1;
      }

    if (trunk < Currentsuitcase) {
      NEEDSPACE = false;
      suitCaseCaounter--
      console.log("No more space!");
      break;
    }
    
    
    leftspace = trunk - Currentsuitcase;
    trunk = leftspace;

    index++;
    command = input[index];
  }

  if (NEEDSPACE !== false) {
    console.log(`Congratulations! All suitcases are loaded!`);
  }
  console.log(`Statistic: ${suitCaseCaounter} suitcases loaded.`);
}
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
