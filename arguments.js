function addNumbers(num1, num2) {
    let result = 0;
    for (const add of arguments) {
        result = result + add;
    }
    // const result = num1 + num2;
    return result;
}
// console.log(addNumbers(4, 5, 5, 67, 100));

function addString(str1, str2) {
    let result = '';
    for (const str of arguments) {
        result = result + str + ' ';
    }
    return result;
}

console.log(addString('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket'));