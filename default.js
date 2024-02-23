// kono man jodi na dei tahole setar default man hosse "undifiend" example num1 num2 2ta neyar por jodi parameter a 2ti man na diye 1ta dei tahole onno tar jaigai default dekhabe man r setar sathe num sum krte 'NAN' dekhabe ---
function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(5);




console.log('example 2 ')
// default man set krle amra jodi parameter a 2ta man na diye akta dei r default man jeta dibo setar sathe calculation hoye jeta hbe seta result hbe
function add2(num1, num2, num3 = 0) {
    const result2 = num1 + num2 + num3;
    console.log(num1, num2, num3, result2);
    return result2;
}

const sum2 = add(7, 5);



// string default  er somoy sudhu '' dilei hoi//// array use krle tar default man hbe "[]", object use krle er default man hbe "{}"
function name(first, last = '') {
    const full = first + ' ' + last;
    return full;
}
const addName = add('rakib', 'hasan')