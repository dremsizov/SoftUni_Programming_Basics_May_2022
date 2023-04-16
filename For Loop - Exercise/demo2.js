function workingHour(input) {
    let time = Number(input[0]);
    let dayOfWeek = input[1];
  
    if (time >= 10 && time <= 18) {
        if (dayOfWeek = "Monday") {
            console.log("open");
        }
        else if (dayOfWeek = "Tuesday") {
            console.log("open");
        }
        else if (dayOfWeek = "Wednesday") {
            console.log("open");
        }
        else if (dayOfWeek = "Thursday") {
            console.log("open");
        }
        else if (dayOfWeek = "Friday") {
            console.log("open");
        }
        else if (dayOfWeek = "Saturday") {
            console.log("open");
        }
        else if (dayOfWeek = "Sunday") {
            console.log("closed");
        }
        
    } else if ( time<10 && time>18) {
        console.log("close");
    }
  }
  workingHour(["11","Sunday"]);


  switch (key) {
      case value:
          
          break;
  
      default:
          break;
  }


  if (town !== "Sofia" || town !== "Varna" || town !== "Plovdiv" || sales < 0) {
    console.log("error");
  }