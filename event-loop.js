// Ekta function k call orar pore, oi function er modde line by line execute korbe, er modde onno function k call korle oi function er kaj ses kore abar ferot asbe.
// Stack: ektar por eka asbe, biye barite plate distribution er moto.

// Ex:
function a() {
  console.log("a");
  b();
  console.log("aa");
}

function b() {
  console.log("b");
  c();
  console.log("bb");
}

function c() {
  console.log("c");
  console.log("cc");
}

a();

// Ex2:
function a() {
  console.log("a");
  b();
  console.log("aa");
}

function b() {
  console.log("b");
  c();
  console.log("bb");
}

function c() {
  console.log("c");
  console.log("cc");
}
function x() {
  console.log("x");
  y();
  console.log("xx");
}
function y() {
  console.log("y");
  z();
  console.log("yy");
}
function z() {
  console.log("z");
  console.log("zz");
}

// asyncronous- setTimeout, fetch. tai era waiting queue te chole jabe, serial wise jar jar somy moto asbe
setTimeout(() => {
  console.log("Inside timeout");
}, 2000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
a();
x();

// event-loop howar karonei js single treaded kareo se kintu asyncronous kaj korte pare, karon tar ekta event queue ase.
