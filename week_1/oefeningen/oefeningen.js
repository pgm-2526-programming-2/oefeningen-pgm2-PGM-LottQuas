// Oefening 1: destructuring met Arrays

const letters = ["A", "B", "C"];
const [firstLetter, secondLetter, ThirdLetter] = letters;

console.log(firstLetter);
console.log(secondLetter);
console.log(ThirdLetter);

// Oefening 2: Destructuring met Geneste Arrays

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const [[a], [, b], [, , c]] = matrix;

console.log(a);
console.log(b);
console.log(c);