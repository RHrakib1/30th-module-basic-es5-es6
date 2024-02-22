// var : no reason to use var
// const : aita use er fole kono man poriborton hbe na//// onno kono jaiyai const variable er man use krte pari kintu sorasorti set krter parbo na 
// ------------ example ------------

// // const number = 20;
// // number = 10;
// // console.log(number);


// const : const diye kono array k paltano jabe na ba poriborton kora jabe na kintu array er vitor er man change krte parbo and push o kora jabe 
const array = [1, 2, 3, 4, 5, 6, 7];
// aita hbe na ----------->>>> array = [44, 55, 66, 22, 88];
array[1] = 0;
array.push(5555, 9999, 777, 100);
console.log(array);


// object : pura obj k paltano jabe na kintu obj er vitor er man k paltano jabe 
const students = {
    name: 'rakib',
    age:22
}
    //aita hbe na ---------->>>>  students={name: hasan}
    students.name=' rakib hasan'

console.log(students);








// let : man poriborton kora jabe
let sum = 10;
sum = 2;
console.log(sum);