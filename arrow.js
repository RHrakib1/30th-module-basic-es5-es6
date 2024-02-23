// function add(x, y) {
//     const result = x + y;
//     return result;
// }


// opor er onsho ta k short a korar jonno amra niche j vabe krsi seta kora jai 




console.log('function declaration')
// function declaration
function add(a, b) {
    return a + b;
}
const math = add(10, 2);
console.log(math);



console.log('function expration')
// function expration__________..... variable declear kora hoi akhne 
const add2 = function (a, b) {
    return a + b;
}
const math2 = add(10, 2);
console.log(math2);



console.log('arrow function')
// arrow function
const add3 = (a, b) => a + b;

const math3 = add(10, 2);
console.log(math3);

// example
const add4 = (x, y, z) => x + y + z;
const math4 = add4(10, 5, 10);
console.log(math4);

const multi = (num1, num2) => num1 * num2;
const math5 = multi(2, 2);
console.log(math5);

const divied = (num3, num4) => num3 / num4;
const math6 = divied(12, 4);
console.log(math6);





console.log('example to the more arrow')
// ------------------------MORE Arrow JS --------------------------------
// single parameater

const getObj = (person) => person.name;
const object = { name: 'hasan', age: 22 };
const result = getObj(object);
console.log(result);

// single parameater braket diyeo likha jai braket sarao lekha jai
const getArry = numbers => numbers[3];
const arry = getArry([22, 33, 44, 55, 56, 77, 88, 99]);
// const result = getArry(arry[3]);
console.log(arry);

// no parameater 
const pi = () => Math.PI;
console.log(pi());


// larger arrow : jokhon onek kisu use krbo tokhn return function use krte hbe
const maths = (a, b, c) => {
    const sum = a + b + c;
    const multi = a * b * c;
    const result = sum + multi;
    return result;
}
const math7 = maths(2, 3, 4);
console.log(math7);


