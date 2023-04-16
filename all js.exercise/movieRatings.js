function movieRatings (input) {

    let allMovies= Number[input[0]];

    let index=1
    let command = input[index];

    let bestRaiting = 0
    let lorseRaiting= 0

    for (let i=0; i<allMovies; i++){ 
        let nameMovie = input[index];
        index++
        let movieRaiting = Number(input[index]);

        if (movieRaiting>bestRaiting) {
            bestRaiting=movieRaiting
        }
        else if (movieRaiting<bestRaiting) {
            lorseRaiting=movieRaiting
        }
        index++
        command = input[index];
    }




} movieRatings (["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
