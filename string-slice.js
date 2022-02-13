const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

const smallSlice = anthem.slice(12, 13);
// console.log(smallSlice);

const subStr = anthem.substr(11, 2);
// console.log(subStr);

const subString = anthem.substring(11, 5);
// console.log(subString);

const district = 'khoksa';
const thana = 'kushtia';

// const address = district + ' ' + thana;
const address = district.concat(' ').concat(thana);
// console.log(address);

const word = ['desk', 'laptop', 'ergonomic', 'antibluelight'];
const allJoin = word.join('www');
console.log(allJoin);