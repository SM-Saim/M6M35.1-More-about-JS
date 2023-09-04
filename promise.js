// Promise: Future e Kisu ekta hobe emon kisu, hoiteo pare , abar nao hoite pare, hoile resolved, na hoile reject hobe.
//  promise ekta async behaviour .
const values = new Promise((resolve, reject) => {
  const cal = Math.random() * 10;
  if (cal < 5) {
    resolve(33333333);
  } else {
    reject("Not found the estimated answer");
  }
});
values
  .then((data) => console.log(data + 100))
  .catch((err) => console.error("ERR:", err));

// Aro 2 ta async behavior holo , fetch, wait.
// async behavior gula sequence maintain kor na.

/*
 fetch diea data pawar ekta promise kortesi, data pabo je garrenty nai, na pail catch apply hobe.
// Async /await fetch er khalato vai.
fetch korar somy je amra then, then use kori oitar poriborte async , await use kora jai. first er bar , async use korte hoi, then baki somoy await use kora hoi.
// fetch er modde then, catch ei gula use kora jai, ar async /await er modde try ar cach use kora hoi.
*/
