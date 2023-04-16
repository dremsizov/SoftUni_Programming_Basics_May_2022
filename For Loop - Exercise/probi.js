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

cinema(["28",
"Evening"])
