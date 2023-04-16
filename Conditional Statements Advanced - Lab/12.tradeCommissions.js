function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
  
    switch (town) {
      case "Sofia":
        if (sales <= 500 && sales > 0) {
          console.log((sales * 0.05).toFixed(2));
        } else if (sales <= 1000 && sales > 500) {
          console.log((sales * 0.07).toFixed(2));
        } else if (sales <= 10000 && sales > 1000) {
          console.log((sales * 0.08).toFixed(2));
        } else if (sales > 10000) {
          console.log((sales * 0.12).toFixed(2));
        }
        break;
      case "Varna":
        if (sales <= 500 && sales > 0) {
          console.log((sales * 0.045).toFixed(2));
        } else if (sales <= 1000 && sales > 500) {
          console.log((sales * 0.075).toFixed(2));
        } else if (sales <= 10000 && sales > 1000) {
          console.log((sales * 0.1).toFixed(2));
        } else if (sales > 10000) {
          console.log((sales * 0.13).toFixed(2));
        }
        break;
  
      case "Plovdiv":
        if (sales <= 500 && sales > 0) {
          console.log((sales * 0.055).toFixed(2));
        } else if (sales <= 1000 && sales > 500) {
          console.log((sales * 0.08).toFixed(2));
        } else if (sales <= 10000 && sales > 1000) {
          console.log((sales * 0.12).toFixed(2));
        } else if (sales > 10000) {
          console.log((sales * 0.145).toFixed(2));
        }
        break;
  
    }
    if (sales < 0 || town !="Sofia" && town != "Varna" && town != "Plovdiv") {
      console.log("error");
    }
  }
  tradeCommissions(["Kaspichan","-50"]);