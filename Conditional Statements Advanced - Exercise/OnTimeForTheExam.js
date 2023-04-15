unction onTimeForTheExam(input) {
    let hour=Number(input[0]);
    let min=Number(input[1]);
    let hourArrive=Number(input[2]);
    let minArrive=Number(input[3]);
 
    let minEx=hour*60+min;
    let minArr=hourArrive*60+minArrive;
    let difference=minArr-minEx;
 
 
    if(difference>0){
        console.log("Late");
 
        if(difference<60){
        console.log(`${difference} minutes after the start`);
        }else {
           console.log(`${Math.floor(difference/60)}:${(difference%60).toString().padStart(2,"0")} hours after the start`);
        }
    }else if(difference==0){
        console.log("On time");
    }else{
        difference=Math.abs(difference);
        if(difference<=30){
            console.log("On time");
            console.log(`${difference} minutes before the start`);
        }else{
            if(difference<60){
                console.log("Early");
                console.log(`${(difference%60).toString().padStart(2,"0")} minutes before the start`);
            }else{
                console.log("Early");
                console.log(`${Math.floor(difference / 60)}:${(difference % 60).toString().padStart(2,"0")} hours before the start`);
            }
 
 
        }
    }
}
