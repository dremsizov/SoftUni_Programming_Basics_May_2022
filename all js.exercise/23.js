function salon(input) {
    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let command2 = input[index];
    index++;
    let money = 0;
 
    while (command !== "closed") {
        switch (command) {
            case "haircut":
                switch (command2) {
                    case "mens":
                        money += 15;
                        break;
                    case "ladies":
                        money += 20;
                        break;
                    case "kids":
                        money += 10;
                        break;
                }
            case "color":
                switch (command2) {
                    case "touch up":
                        money += 20;
                        break;
                    case "full color":
                        money += 30;
                        break;
                }
        }
        if (money >= target) {
            console.log("You have reached your target for the day!");
            break;
        }
        command = input[index++];
        command2 = input[index++];
    }
 
    if (money < target) {
        console.log(`Target not reached! You need ${target - money}lv. more.`);
    }
 
    console.log(`Earned money: ${money}lv.`);
 
}
salon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"
])