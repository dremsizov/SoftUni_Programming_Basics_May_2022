function projectsCreation (input){
    let firstname = input [0];
    let project= input[1]
    let work = Number ("3")
    let hours = work * project
let result = `The architect ${firstname} will need ${hours} hours to complete ${project} project/s. `
console.log (result)
}
projectsCreation (["ViKtor","4"])

 //"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."