/*
 *setTimeout() mane ekbar cholbe.
 *setInterval()- set interval mane kotokkon por por cholbe.
 *Browser e clearInterval() likhe bracket er modde variable name ta diea setInterval ta bondho kora jai.

 */
// console.log(1);
// console.log(2);
// setInterval(() => {
//   console.log(3);
// }, 2000);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

//Ex:2
console.log(100);
console.log(200);
let num = 0;
const interval = setInterval(() => {
  console.log(num++);
  if (num === 10) {
    clearInterval(interval);
  }
}, 2000);
console.log(400);
console.log(500);
console.log(600);
console.log(700);

// Ekane kintu: 0-9 porjonto dekhase.
// amra jodi num++ er poriborte ++num use kori, tar maane holo age barai nao, tar por use koro, taile se age 1 bara inibe tarpor condidition porjonto cholbe.
let n = 0;
const intervals = setInterval(() => {
  console.log(++n);
  if (n === 10) {
    clearInterval(intervals);
  }
}, 3000);
// ++num = mane, barai tarpor use koro.
// num++ = use koro, porer tar jonno barao.
