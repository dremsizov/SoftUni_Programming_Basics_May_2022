function summerOutfit(input) {
  let degree = Number(input[0]);
  let day = input[1];

  if (degree >= 10 && degree <= 18) {
    switch (day) {
      case "Morning":
        console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`);
        break;
      case "Afternoon":

      case "Evening":
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        break;
    }
  } else if (degree > 18 && degree <= 24) {
    switch (day) {
      case "Morning":
        console.log(` It's ${degree} degrees, get your Shirt and Moccasins.`);
        break;
      case "Afternoon":
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
        break;

      case "Evening":
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        break;
    }
  } else if (degree >= 25) {
    switch (day) {
      case "Morning":
        console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
        break;
      case "Afternoon":
        console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`);
        break;

      case "Evening":
        console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        break;
    }
  }
}
summerOutfit(["16", "Evening"]);





function cinema(input) {
    let degree = Number(input[0]);
    let day = input[1];
  
    let outfit = 0;
    let shoes = 0;
  
    if (degree >= 10 && degree <= 18) {
      if (day == "Morning") 
      {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      }
      else if (day == "Afternoon" || day == "Evening") {
        outfit = Shirt;
        shoes = Moccasins;
      }
    }
  
    if (degree > 18 && degree <= 24) {
      if (day == "Morning" || day == " Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      else if (day == "Afternoon") {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
    }
    if (degree >= 25) {
      if (day == "Morning") {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
  
      else if (day == "Afternoon") {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      else if (day == "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
  }
