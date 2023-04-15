function basketballEquipment(input){

    let priceForOneYear = Number(input["0"]);

    let priceforsneakers = priceForOneYear * 0.6
    let priceForOutfit = priceforsneakers * 0.8;
    let priceForBall = 0.25 * priceForOutfit;
    let priceForBacketballaccessories = 1/5 * priceForBall;

    let totalPriceForEquipment = priceForOneYear+priceforsneakers+priceForOutfit+priceForBall+priceForBacketballaccessories;

    console.log (totalPriceForEquipment)

}
basketballEquipment (["550"])