/*
java script keyword:
*this- kon jaigai eta k execute kortsi.
Execution Context: kon jaigai ki declare kortesi, seta kivabe execute hobe, eta k define kora hoi execute context diea.

1. gobal execution context: sobai access korte parbe.
2. local execution context: sobai access korte parbe na.
*/

// Ex:
let a = 5;
function functionalContext(num1, num2) {
  const result = num1 + num2 + a;
  return result;
}
const sum = functionalContext(4, 5);
console.og(sum);

/*
Overall,
* Global Context: java script jokon ami execute kori , tokon ekta golbal context thake, global context e jei variable thakbe, ota k bole global variable. ekane a holo golbal context. eta k sob jaiga theke access ora jabe.

* Functional Context: ar kono ekta function er vitore jodi kisu ekta likhi, ota k bole functional context, otar access baire nai. eta ne result ta holo functional context.
Ei function ta ke jodi ami call kori, taile 2 ta jinish ghote.
1. First, function ta ke create kore.
2. Secondly, function ta ke se execute kore.

*/
