// Oefening 1:

let weekdays = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

console.log(weekdays);


// Oefening 2: 

// let fruits = ['apples', 'pear', 'orange'];

// let shoppingCart = fruits;
// shoppingCart.push('banana');

// alert(fruits.lenght); // 4


// Oefening 3: 

let matrix = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
];

matrix[2][3];
console.log(matrix[2][3])


// Oefening 4:

const numbers = [1, 2, 3, 4, 5];

const colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach((numbers, index) => {
    console.log(index, "Hello");
});
colors.forEach((numbers, index) => {
    console.log(index, colors);
});


//_________________________________________________

// Oefening 5: 

const words = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

let str = words.join(';');
console.log(str);

const wordsWithB = words.find(words => words.toLowerCase().startsWith('b'));
console.log(wordsWithB);

words.unshift("Hello");
console.log(words);
