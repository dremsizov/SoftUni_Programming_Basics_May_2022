function petShop (input){

    let priceDog = Number ("2.50");
    let priceCat = Number ("4");
    let dog = input [0]
    let cat = input [1]
    let moneydog =  dog * priceDog
    let moneycat = cat * priceCat
    let krainaSuma = moneydog + moneycat + " lv."
    console.log (krainaSuma)

}
petShop (["13", "9"])