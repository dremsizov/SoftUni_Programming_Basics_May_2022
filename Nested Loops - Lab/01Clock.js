function clock() {
  for (hours = 0; hours <= 23; hours++) {
    for (min = 0; min <= 59; min++) {
      console.log(`${hours}:${min}`);
    }
  }
}
clock();
