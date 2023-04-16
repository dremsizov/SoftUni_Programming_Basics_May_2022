function christmasGifts (input) {
    let index = 0 
    let command = input[index];
    let kids =0
    let adults = 0
    let toys=0
    let sweater = 0

    while(command !== "Christmas") {
        let age = Number(input[index]);

        if (age<=16){
            kids++;
            toys+=5
        }
        else {
            adults++;
            sweater+=15
        }
        index++
        command=input[index];
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toys}`);
    console.log(`Money for sweaters: ${sweater}`);

}christmasGifts (["16",
"16",
"16",
"16",
"16",
"Christmas"])
