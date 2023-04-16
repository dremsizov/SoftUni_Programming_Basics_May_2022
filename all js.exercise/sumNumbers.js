function sumNumbers(input) {
  let num = Number(input[0]);
  let sum = 0;
  let index = 1;

  while (sum < num) {
    let currentNumber = Number(input[index]);
    sum += currentNumber;
    index++;
  }
  console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
