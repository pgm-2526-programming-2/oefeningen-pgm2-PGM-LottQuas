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

words.unshift("hello");
console.log(words);

const longerThanTwo = words.filter(word => word.length > 2);
console.log(longerThanTwo);

const sortedWords = words.sort();
console.log(sortedWords)

const thirdWord = words[2];
console.log(thirdWord)

const longerThanFor = words.filter(word => word.length > 4)
console.log(longerThanFor)

//_______________________________________________________________

// Oefening 6 :

const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];
console.log(willekeurigeGetallen);

const groterDanTien = willekeurigeGetallen.filter(getal => getal > 10);
console.log(groterDanTien);

willekeurigeGetallen.pop();
console.log(willekeurigeGetallen);

willekeurigeGetallen.shift();
console.log(willekeurigeGetallen);

willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen);

const kleinerDanTwintig = willekeurigeGetallen.filter(getal => getal < 20);
console.log(kleinerDanTwintig);

const string = willekeurigeGetallen.toString();
console.log(string);

const som = willekeurigeGetallen.reduce((totaal, getal) => totaal + getal, 0);
console.log(som);

const verdubbel = willekeurigeGetallen.map(getal => getal * 2);
console.log(verdubbel)

const groterDanDertig = willekeurigeGetallen.some(num => num > 30);
console.log(groterDanDertig);

//___________________________________________________


// Oefening 7 : 

const willekeurigeNamenArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
console.log(willekeurigeNamenArray)

const flatArray = willekeurigeNamenArray.flat();
console.log(flatArray);

const doubleFlattend = willekeurigeNamenArray.flat().map(num => num * 2);
console.log(doubleFlattend);

const removeFirst = willekeurigeNamenArray.map(subarray => subarray.slice(1));
console.log(removeFirst);

const removeLast = willekeurigeNamenArray.pop();
console.log(removeLast);

//____________________________________________

// Oefening 8 : 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = array1.map((num, index) => num + array2[index]);
console.log(array1);
console.log(array2);
console.log(result);

//_________________________________________________

// Oefening 9 : 

let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];

let langsteWoord = woordenArray.reduce((langste, huidige) => {
    return huidige.length > langste.length ? huidige : langste;
}, '');

console.log(langsteWoord);

//____________________________________________________

// Oefening 10:

function filterEvenGetallen(getallen) {
    return getallen.filter(num => num % 2 === 0);
};

let randomGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(randomGetallen);

console.log(evenGetallen);

//_________________________________________________________

// Oefening 11: 

let objectenArray = [
    { naam: 'Anna', leeftijd: 30 },
    { naam: 'Bob', leeftijd: 25 },
    { naam: 'Charlie', leeftijd: 35 },
];

//???

//_____________________________________________

// OBJECTS OEFENINGEN:

// ______________________________________________

// Oefening 1: 

let auto = [
    { merk: "Toyota", model: "Camry", jaar: 2022, kleur: "blauw" }
];

auto[0].kleur = "rood";
console.log(auto);

let merknaam = auto[0].merk;
console.log(merknaam);

auto[0]["brandstof"] = "benzine";
console.log(auto);

delete auto[0].jaar;
console.log(auto);

//______________________________________________

// Oefening 2: 

let persoon = [{
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville"
    }
}];

console.log(persoon);

console.log(persoon[0].adres.nummer);

persoon[0]["telefoon"] = Math.floor(Math.random() * 9000000000) + 1000000000;
console.log(persoon);

persoon[0]["extraInfo"] = {
    hobby: "tennis",
    favorieteKleur: "groen",
    huisdier: "kat",
}
console.log(persoon);

//____________________________________________________

// Oefening 3: 

