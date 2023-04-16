function examPreparation(input) {
 
    let badGrades = Number(input.shift());
 
    let badGradesCounter = 0;
    let goodGradesCounter = 0;
    let gradesSum = 0;
    let lastProblem = "";
    let nameOfExercise;
    let grade = 0;
 
    while (badGradesCounter < badGrades) {
        nameOfExercise = input.shift();
        grade = Number(input.shift());
 
        if (nameOfExercise === 'Enough') {
            let totalCounter = badGradesCounter + goodGradesCounter;
            let averageScore = gradesSum / totalCounter;
 
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${totalCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
 
        if (grade <= 4) {
            badGradesCounter++;
        } else {
            goodGradesCounter++;
        }
 
        lastProblem = nameOfExercise;
        gradesSum += grade;
    }
 
    if (badGradesCounter == badGrades) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    }
    
}
 
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])