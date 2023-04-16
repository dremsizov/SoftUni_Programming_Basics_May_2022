function suppliesForSchool (input) {

let pens = Number (input ["0"]);
let markers = Number (input ["1"]);
let detergentLitters = Number (input ["2"]);
let discount = Number (input [3]);

let priceForPens = pens*5.80;
let priceForMarkers = markers*7.20;
let priceForDetergent = detergentLitters*1.20;

let totalsum = priceForPens+priceForMarkers+priceForDetergent;
let sumWithDiscount = totalsum-(totalsum * (discount/100) );
console.log (sumWithDiscount);
}
suppliesForSchool (["4","2","5","13"])