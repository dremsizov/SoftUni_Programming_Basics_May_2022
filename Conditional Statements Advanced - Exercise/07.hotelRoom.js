


function demo(input) {
    let month = input[0];
    let nights = Number(input[1]);
   
    let studioPrice = 0;
    let apartmentPrice = 0;
   
    if (month === "May" || month === "October") {
      studioPrice = 50;
      apartmentPrice = 65;
   
      if (nights > 14) {
        studioPrice = studioPrice * 0.7;
        apartmentPrice = apartmentPrice * 0.9;
      } else if (nights > 7) {
        studioPrice = studioPrice * 0.95;
      }
    } else if (month === "June" || month === "September") {
      studioPrice = 75.2;
      apartmentPrice = 68.7;
   
      if (nights > 14) {
        studioPrice = studioPrice * 0.8;
        apartmentPrice = apartmentPrice * 0.9;
      }
    } else if (month === "July" || month === "August") {
      studioPrice = 76;
      apartmentPrice = 77;
   
      if (nights > 14) {
        apartmentPrice = apartmentPrice * 0.9;
      }
    }
   
    console.log(`Apartment: ${(apartmentPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
  }
  demo(["May", "15"]);
 
  















