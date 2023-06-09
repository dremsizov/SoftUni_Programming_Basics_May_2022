function whileDemo(input) {
 
    let length = Number(input[0]);
    let width = Number(input[1]);
    let sizeCake = length * width;
    let index = 2;
    let command = input[index];
    let numPieces = 0;
 
    while (command !== 'STOP') {
        let cakeParts = Number(command);
        numPieces += cakeParts;
 
        if (numPieces > sizeCake) {
            console.log(`No more cake left! You need ${numPieces - sizeCake} pieces more.`);
            break;
        }
 
        index++;
        command = input[index];
    }
 
    if (command === 'STOP' && numPieces <= sizeCake) {
 
        console.log(`${sizeCake - numPieces} pieces are left.`);
    }
}
whileDemo(["10",
"2",
"2",
"4",
"6",
"STOP"]);
 