// console.log(1);
// console.log(2);
// doSomething();
// console.log(4);
// console.log(5);
// console.log(6);

// function doSomething() {
//   console.log(3);
// }

// Normal function k call kora ar fetch k call korar mode kisu na kisu differene ase.
// normal function sequence maintain kore, fetch sequence kore na.
console.log(1);
console.log(2);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}

// Abar set time out naam e ekta function ase, setao sequence maintain kore na.
// set time out er poer value ta holo koto milo ssecond pore, kaj ta hobe otar time.
// Browser e clearTimeout(timeout) likhe bracket er modde variable name ta diea settimeOut ta bondho kora jai.
console.log(1);
console.log(2);
setTimeout(doSomething, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}

// Onno vabeo bola jai.
// Asyncronous:
console.log(1);
console.log(2);
const timeout = setTimeout(() => {
  console.log("Lazy Logged");
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}

/*
 java script by nature, single treated. Mane single ekta line borabor cholbe, sequencely.
// Er modde 2 ta kahini ase, 
1.syncronous 
2.asyncronous

*java script syncronous, single treated, kinu asyncronous cholte pare.
*/
