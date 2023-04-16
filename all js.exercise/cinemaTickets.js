function cinemaTickets (input) {

let index=0
let command= input[index];
index++

let studendCounter = 0;
let standarCouter=0;
let kidsCounter=0;
let totalCountter =0;


while (command!=="Finish") {
    let name = command;
    index++
    let freePlace = Number(input[index]);
    index++
    let ticketType = input[index];
    let ticketsCounter = 0;

    while (ticketType !== "End") {
    ticketsCounter++;
    switch (ticketType) {
        case "student": 
        studendCounter++
        ; break;
        case "standard": 
        standarCouter++;
        ; break;
        case "kids": 
        kidsCounter++
        ; break;
    }
    if (ticketsCounter>=freePlace) {
        break;
    }
    index++
    ticketType = input[index]
}
ticketsCounter+=totalCountter;
let result =  totalCountter/freePlace*100
console.log(`${name} - ${result.toFixed(2)} full`);
    }
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
