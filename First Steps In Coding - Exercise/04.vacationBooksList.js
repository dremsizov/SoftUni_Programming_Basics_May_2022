function vacationBooksList (input){

let pages = Number (input["0"]);
let pagesForHour = Number (input[1]);
let days = Number (input [2]);

let readAbook = pages/pagesForHour;
let HourForReading = readAbook / days;
console.log (HourForReading)
}
vacationBooksList (["432","15","4"])