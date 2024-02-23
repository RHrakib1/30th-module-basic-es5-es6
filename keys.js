// kono obj er keys ba proparty janar jonno "object.keys" use kora hoi
const bike = { name: '4V', price: 520000, cc: 220, netWeight: 400 }
const keys = Object.keys(bike);
console.log(keys);

// kono obj er man gula janar jonno "object.value" use kora hoi
const value =Object.values(bike);
console.log(value);


// array of array dekhar jonno aita use kora hoi
const pair = Object.entries(bike);
console.log(pair);


// kono proparty ba keys delete kora
console.log(bike)
delete bike.name;
console.log(bike);
console.log('$$$$$$$$$$$')
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);