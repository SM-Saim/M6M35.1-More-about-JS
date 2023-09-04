// Kono code e jodi kono error hoite pare, othoba erroe ghotaite chai, taile try catch use korbo.
// finally emon ekta jinish jeta sobar last e execute hobei, erroe thak ba na thak.

function val() {
  const getInput = document.getElementById("inputOfSearch");
  const catchValue = getInput.value;
  const error = document.getElementById("error");

  try {
    const age = parseInt(catchValue);
    if (isNaN(age)) {
      throw "Please Enter a number";
    } else if (age < 18) {
      throw "Baccha Kaccha not allowed";
    } else if (age > 30) {
      throw "Murobbira eikane asein na";
    }
    error.innerHTML = "";
  } catch (res) {
    console.log("ERR:", res);
    error.innerHTML = `ERROR: ` + res;
  } finally {
    console.log("All done inside try catch");
  }
  console.log(1111111);
}
