function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please enter string';
    }
    let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}

// console.log(megaFriend(['dost', 'suntusona', 'muntusona', 'kuntusona']));
// console.log(megaFriend(324354));

const animals = ['goat', 'hornbill', 'magpie', 'deer', 'meerkat'];

if (animals.indexOf('meerkat') != -1) {
    // console.log('meerkat');
}
else {
    // console.log('meerkat deos not exist');
}

if (animals.includes('magpie')) {
    // console.log('magpie exists');
}

const first = [1, 2, 3];
const second = [4, 5, 6];

const concatanetion = first.concat(second);
console.log(concatanetion);