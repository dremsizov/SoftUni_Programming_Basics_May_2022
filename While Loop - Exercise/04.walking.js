function walking(input) {
    let target = 10000;

    let index = 0
    let currentInput = Number (input[index]);
    let allsteps = 0;

    while (currentInput !== "Going home") {
        let steps = Number(currentInput)
        allsteps += steps

        if (allsteps >= target) {
            console.log('Goal reached! Good job!');
            console.log(`${allsteps - target} steps over the goal!`);
            break;
        }
        index++
        currentInput = input[index];
   
    }
    if (currentInput === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        allsteps += stepsToHome;

        if (allsteps >= target) {
            console.log('Goal reached! Good job!');
            console.log(`${allsteps - target} steps over the goal!`);
        } else {
            console.log(`${target - allsteps} more steps to reach goal.`);
        }
    }
    
}

walking
(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
