const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let result="";
function print(n){
    result+=n+" ";
};
numbers.forEach(print);
console.log(result);
let result0="";
for (let el of numbers) {
    result0+=el+" ";
}
console.log(result0);
let result1="";
numbers.forEach(function (el) {
    if (el % 2 === 0) {
        result1+=el+" ";
    }
});
console.log(result1);
const movies = [
    {title: 'Amadeus',
        score: 99},
    {title: 'Stand By Me',
        score: 85},
    {title: 'Parasite',
        score: 95},
    {title: 'Alien',
        score: 90}
]
movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})