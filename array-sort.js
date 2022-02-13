const numbers = [4, 3, 5, 2, 6, 7, 8, 5, 9, 0, 2];
const sortNumber = numbers.sort();
// console.log(sortNumber);

const word = ['kanak chapa', 'sabina yesmin', 'rumana islam', 'alom ara minu', 'ferdous ara'];
const sortWord = word.sort().reverse();
// console.log(sortWord);

const doubleNumbers = [45, 34, 32, 43, 65, 76, 98, 17, 01];
// const sortDoubleNumbers = doubleNumbers.sort();
const sortDoubleNumbers = doubleNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortDoubleNumbers);