const first = 'jann';
const last = 'tusss';
const dak = 'moina'
const name = first + " " + last + " " + dak;
console.log(name);

// example 2:
const num1 = 10;
const num2 = 20;
const sum = "The sum is : " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + (num1 + num2);
console.log(sum);

// ai vabe sohojei kora jai template string diye " `` "
const math = `the sum is : ${num1} and ${num2} is ${num1 + num2}`;
console.log(math);


//example 3 : 
const email = 'rakib onek vlo sele \n' + 
'kintu theke theke kharap hoi'
console.log(email);

// opor er onsho k template diye krle 
const emamil2 =`rakib onek vlo sele 
kintu theke theke kharap hoi`;
console.log(emamil2)