const maxNumber = Math.max(22, 45, 10, 5, 40, 1, 20, 142, 47, 1, 28, 52, 4, 88);
console.log(maxNumber);

// array er modhe max number bar korar jonno amra "..."aita use krle khub sohojei ber hoye asbe
const array = [2, 8, 40, 15, 90, 70, 22, 1000];
const arrayStor = Math.max(...array);
console.log(arrayStor);




// "..." diye kono kisu push kra
const friends= [2,4,6,78,10];
const bondhu = friends;
const dosto =[...friends]; //"..."use korar fole amra friends er vitor ja ase tate add krte pai
console.log(dosto);
friends.push(1000);
console.log(dosto);
console.log(friends);



// ai vabeo push kora jai 
const numberss =[...friends, 199999];
console.log(numberss)