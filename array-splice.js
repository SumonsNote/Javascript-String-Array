const numbers = [1, 2, 4, 5, 6, 9, 10, 20, 100, 200];
// const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// const numberSpliced = numbers.splice(4, 6);
// console.log(numberSpliced);
// console.log(numbers);

const numberSplice = numbers.splice(4, 3, 777, 888, 99);
console.log(numberSplice);
console.log(numbers);