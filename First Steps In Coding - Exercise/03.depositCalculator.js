function depositCalculator (input){
let depositSUM = Number (input["0"]);
let period = Number (input ["1"]);
let yearPercent = Number (input["2"]);

let sum = depositSUM + period * ((depositSUM * yearPercent / 100) / 12 );
console.log (sum)

}
depositCalculator (["2350","6","7"])

//let interest = depositSUM * yearPercent/100;
//let interestForMonth = interest/12;
//let totalsum = depositSUM + period * interestForMonth;
//console.log (totalsum);