function whileDemo(input) {
 
    let needMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let currentInput = input[index];
    let spendDays = 0;
    let days = 0;
 
    while (currentMoney < needMoney) {
 
        days++;
        index++;
 
        if (currentInput === 'spend') {
            spendDays++;
 
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[index]);
            currentMoney -= moneyToSpend;
 
 
            if (currentMoney < 0) {
                currentMoney = 0;
            }
 
        } else if (currentInput === 'save') {
            spendDays = 0;
 
            let moneyToSave = Number(input[index]);
            currentMoney += moneyToSave;
 
        }
        index++;
        currentInput = input[index];
    }
 
    if (currentMoney >= needMoney) {
        console.log(`You saved the money for ${days} days.`);
    }
 
}
whileDemo(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);

////

function vacation(input) {
    let budget = Number(input[0]);
    let money = Number(input[1]);
    let totalSum = 0;
    let countDay = 0;
    let countSpend = 0;
    let index=2;
 
    while(money < budget){
        let option = input[index];
        index++;
        let sum = Number(input[index]);
        countDay++;
 
        if(option === "save"){
            money += sum;
            countSpend = 0;
        }else if(option === "spend"){
            money -= sum;
            if(money < 0){
                money = 0;
            }
            countSpend++;
 
            if(countSpend == 5){
                console.log("You can't save the money.");
                console.log(`${countDay}`);
                return;
            }
        }
        index++;
    }
    console.log(`You saved the money for ${countDay} days.`);
 
}
/////