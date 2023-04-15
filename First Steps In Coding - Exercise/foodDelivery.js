function foodDelivery (input){

let chickenMenu = Number (input["0"]); 
let fishMenu = Number (input["1"]);
let vegetarianMenu = Number (input["2"]);

let priceForChickenMenu = chickenMenu * 10.35;
let priceForFishMenu = fishMenu * 12.40;
let priceForVegetarianMenu = vegetarianMenu * 8.15;

let totalPriceMenu = priceForChickenMenu+priceForFishMenu+priceForVegetarianMenu;
let priceForDesert = 0.2*totalPriceMenu;
let priceFordelivery = 2.50;

let totalPriceOrder = totalPriceMenu+priceForDesert+priceFordelivery;
console.log (totalPriceOrder)

}
foodDelivery (["9","2","6"])