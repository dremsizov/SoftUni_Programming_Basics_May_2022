function traveling(input) {
    index = 0;
    let destination = input[index];
    index++;

    while (destination !== "End") {
        let budget = Number(input[index]);
        index++;
        let totalSum = 0;
        while (totalSum < budget) {
            let currentSum = Number(input[index]);
            index++;
            totalSum += currentSum;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
    }      
}

traveling (["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
