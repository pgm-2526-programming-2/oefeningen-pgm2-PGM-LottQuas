function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));
console.log(20)

const name = 'Adriaan';
const division = (a, b) => {
    return a / b;
};
const multiply = function (a, b) {
    return a * b;
};

function selectRandomStudent(arr) {
    return arr[arr.length * Math.random() | 0];
}

const age = 21
const students = ['Yme', 'Arne', 'Mert']

console.log(selectRandomStudent(students));

function showMessage() {
    console.log('Answer checker message');
}
function checkAnwser(answer, solution, callback) {
    if (answer === solution) {
        callback();
        return true;
    }
    callback();
    return false;
}

checkAnwser('Ja', 'Ja', showMessage);

//Oefening multiply, division.

// Oefening: maak een functie showCalculation die 3 parameters heeft. 2 getallen, en een van onze functies.

function showCalculation(num1, num2, func) {
    console.log(func(num1, num2))
}
showCalculation(1, 1, sum) // 2
showCalculation(1, 1, multiply) // 1
showCalculation(10, 2, division) // 5


console.log(showCalculation)
