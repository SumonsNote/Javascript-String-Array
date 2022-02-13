const favDate = new Date(1971-12-16);
// console.log(favDate);
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);
if (favDate.getTime() < anotherDate.getTime()) {
    console.log('favorite is earlier')
}