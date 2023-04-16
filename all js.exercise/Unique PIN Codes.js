function UniquePINcodes (input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number (input[1]);
    let thirdNumber = Number (input[2]);

    for ( let i = 2; i<=firstNumber; i+=2){
        for (let x = 2; x< secondNumber; x++) {
            for (let z =2; z <= thirdNumber; z+2){


                if (x === 2 || x === 3 || x === 5 || x === 7) {
            console.log(`${i} ${x} ${z}`);
                }
                    
                }

            }
        }
    }
UniquePINcodes (["8",
"2",
"8"])




