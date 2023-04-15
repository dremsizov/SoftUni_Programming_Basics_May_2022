function fishTank(input) {

    let lenght = Number (input ["0"]);
    let width = Number (input["1"]);
    let height = Number (input ["2"]);
    let percent = Number (input ["3"]);

    let fullFishTank = lenght*width*height;
    let fullFIshTankInLitters = fullFishTank/1000;
    let occupiedSpace = percent/100;
  
    let needetLitters = fullFIshTankInLitters*(1-occupiedSpace);
    console.log(needetLitters)
    

}
fishTank (["105","77","89","18.5"])