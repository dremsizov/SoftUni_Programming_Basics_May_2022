function workingHour(input) {
  let time = Number(input[0]);
  let dayOfWeek = input[1];

  if (time >= 10 && time <= 18 && dayOfWeek != "Sunday") {
    console.log("open");
  } else {
    console.log("close");
  }
}
workingHour(["19", "Monday"]);
