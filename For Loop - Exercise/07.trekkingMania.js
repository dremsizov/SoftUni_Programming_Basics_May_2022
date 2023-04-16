function trekkingMania(input) {

    let allgroups = Number(input[0]);
    let allTourist= 0
 
    let Musala= 0; 
    let Monblan = 0;
    let Kilimandjaro= 0;
    let K2= 0;
    let Everest= 0;
 
    for (let index = 1; index <= allgroups; index++) {
        let peopleInGroup =Number (input[index])
        allTourist+=peopleInGroup
        
        if (peopleInGroup <=5) {
            Musala+=peopleInGroup   
        }
        else if (peopleInGroup >= 6 && peopleInGroup <= 12){
            Monblan+=peopleInGroup
        }
        else if (peopleInGroup >= 13 && peopleInGroup <= 25){
            Kilimandjaro+=peopleInGroup
        }
        else if (peopleInGroup >= 26 && peopleInGroup <= 40){
            K2+=peopleInGroup
        }
        else{ 
            Everest+=peopleInGroup
        }
    
    }

console.log(`${(Musala/allTourist*100).toFixed(2)}%`); 
console.log(`${(Monblan/allTourist*100).toFixed(2)}%`);
console.log(`${(Kilimandjaro/allTourist*100).toFixed(2)}%`);
console.log(`${(K2/allTourist*100).toFixed(2)}%`);
console.log(`${(Everest/allTourist*100).toFixed(2)}%`);


} 

trekkingMania (["10","10","5","1","100","12","26","17","37","40","78"])
