function oldBooks(input) {
  let findingBook = input[0];

  let index = 1;
  let bookisFound = false;
  let allbooks = input[index];

  while (allbooks !== "No More Books") {
    if (allbooks === findingBook) {
      bookisFound = true;
      break;
    }
    index++;
    allbooks = input[index];
  }
  if ((bookisFound === false)) {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`   );
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}

oldBooks([
  "The Spot",

  "Hunger Games",

  "Harry Potter",

  "Torronto",

  "Spotify",

  "No More Books",
]);
