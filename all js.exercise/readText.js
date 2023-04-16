function readText(input) {
  let index = 0;

  while (true) {
    let name = input[index];
    index++;
    if (name === "Stop") {
      break;
    }
    console.log(name);
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
