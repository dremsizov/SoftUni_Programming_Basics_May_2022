function yardGreening (input){
    let price = Number ("7.61")
    let land = input [0]
    let work = land * price
    let discount = Number ("0.18")
    let discountPrice = discount * work
    let finalPrice = work - discountPrice
    let moneyToPay = `The final price is: ${finalPrice} lv.`
    console.log (moneyToPay)
    let notToPay =  `The discount is: ${discountPrice} lv.`
    console.log (notToPay)
}
yardGreening ([150])