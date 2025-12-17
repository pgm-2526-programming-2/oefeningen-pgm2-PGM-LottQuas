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

// Oefening 3: Destructing en Swap

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x);
console.log(y);

// Oefening 4: Destructing met Strings

const sentence = "This is a sentence.";

const [firstLetterSentence, ...rest] = sentence;
const restOfSentence = rest.join("");

console.log(firstLetterSentence);
console.log(restOfSentence);

// Oefening 5: Destructing in Functies

function multiply([a, b]) {
    const result = a * b;
    console.log(result);
}

multiply([3, 5]);
multiply([7, 2]);

// Oefening 6: Destructuring en Rest Parameter

const numbers = [1, 2, 3, 4, 5];




