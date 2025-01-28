 add = function(x,y) {return x + y;}
const add0 = (x, y) => {return x + y;}
const add1 = (a, b) => a + b;
const square = num => {return num * num;}
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDie);
console.log(rollDie());
const rollDie0 = () => (
    Math.floor(Math.random() * 6) + 1
);
console.log(rollDie0);
console.log(rollDie0());
let square2=x=>x*x;
console.log(square2(2));
const movies = [
    {title: 'Amadeus',score: 99
    },
    {
title: 'Stand By Me',score: 85
    },
    {
title: 'Parasite',score: 95
    },
    {
title: 'Alien',score: 90
    }
]
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})
console.log(newMovies);
// IMPLICIT RETURN
const newMovies0 = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
));
console.log(newMovies0);