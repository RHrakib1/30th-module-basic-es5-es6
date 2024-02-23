// for of string,number er opor chalaite pari kintu obj er opor pari na
const numbers = [1, 5, 2, 7, 9, 10];
for (const num of numbers) {
    console.log(num);
}

const nobab = "siraj ud doula";
for (nam of nobab) {
    console.log(nam)
}



// obj ert vitor kono kisu paite gele fo in use krte hbe.... obj er man pete hole obj er name deoyar por obj k j variable a rakkha hoise seta dite hbe 
const bikes = {
    name: "tvs",
    price: 1000000,
    address: "pro"
}
for (const bike in bikes) {
    const value = bikes[bike]
    console.log(bike, value)
}


// propartir nam thakle "." hbe r variable er nam thakle "[]" hbe 