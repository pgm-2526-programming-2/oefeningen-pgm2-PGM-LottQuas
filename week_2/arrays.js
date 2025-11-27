const games = ["Super Mario Bros", "Zelda", "N game", "Pokemon"];
// const favoriteGames = [{
//    name: "Super Mario Bros",
//    releaseYear: 1980
//}, {
// name: "Zelda",
// releaseYear: 1984,
// }];

const altGames = new Array():
    Array.isArray(games); // true

const secondGame = games[1];
const altSecondGame = games.at(1);
const lastGame = games.at(-1); // games [length -1];

const values = [
    "Adriaan",
    function () {
        console.log("Hello!");
    }
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;

// console.log(games);



const stringArray = "[1, 2 ,3 ,4]";
const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof numbers);

// stringArray.push(5); // kan niet
numbers.push(5);

const numbersString = JSON.stringify(numbers): //gebruiken we om bv numers te veranderen naar string om naar een API te sturen
    console.log(stringArray, numbers, numbersString);

const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher === friend); //true
console.log(students === people); // false

function areArraysEquel(arrOne, arrTwo) {
    return JSON.stringify(arrOne) === JSON.stringify(arrTwo);
}

console.log(areArraysEquel(students, people));

//______________________________________________________________________________________

const matrix = [
    ['0', '0', '0', '0'],
    ['0', 'X', '0', '0'],
    ['0', '0', '0', '0'],
    ['0', '0', '0', '0'],
]

matrix[1][1];

for (const color of colors) {
    console.log(color);
}

colors.foreach((color) => {
    console.log(color);
})                              //callback functie is een functie die we meegeven in een andere functie

colors.forEach(function (color) {
    console.log(color);
})

colors.push("purple"); //eind
colors.pop(); // eind verwijderen
colors.unshift("Begin van array toevoegen");
colors.shift(); // begin verwijderen

console.log('numbers', numbers);
const doubleNumbers = numbers.map((value, index) => {
    if (value == 2) {
        return value * 2;
    }
    return value * index
});
console.log('Double Numbers', doubleNumbers);

console.log('Double numbers as string', doubleNumbers.join('|'));

const numbersWithoutEight = doubleNumbers.filter((value) => {       // ZEER BELANGRIJK!!!!!
    return value !== 8;
})

console.log(numbersWithoutEight);

numbers.some((number) => {
    return number === 8;
})


// _________________________________________________________________________________________

// Reduce --> minder maken
// van een arrey naar 1 getal te gaan (meestak een som / optelling)

const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
});

// loop 1: 0 + 4 --> 4
// loop 2: 4 + 10 --> 14
// loop 3: 14 + 6 --> 20

const products = [
    { name: "shirt", price: 20 },
    { name: "shoes", price: 50 },
    { name: "hat", price: 15 },
];

const totoalProductsPrice = products.reduce((prevReturnedPrice, productObject) => {
    return prevReturnedPrice + productObject.price;
}, 0);

console.log(totoalProductsPrice);
