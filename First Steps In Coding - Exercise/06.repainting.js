function repainting (input) {
    
    let nylon = Number (input ["0"]);
    let pain = Number (input["1"]);
    let thinner = Number (input ["2"]);
    let workingHours = Number (input ["3"]);

    let sumFOrNylon = (nylon + 2) * 1.50;
    let sumForPain = (pain * 1.1 ) * 14.50;
    let sumForThinner = thinner*5;
    let sumForBag = 0.40;
    let totalPriceForMatirials = sumFOrNylon+sumForPain+sumForThinner+sumForBag;
    let priceForWOrkers = (totalPriceForMatirials* (30/100)) * workingHours;
    let finalPrice = totalPriceForMatirials+priceForWOrkers;
    console.log (finalPrice)

}
repainting (["10","11","4","8"])    