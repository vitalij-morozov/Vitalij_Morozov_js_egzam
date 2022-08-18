/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Nusitaikimai
const formEl = document.querySelector("form");
const outputContainerEl = document.getElementById("output");

// Formos Event Listener
formEl.addEventListener("submit", formHandler);

// Pagrindine formos funkcija
function formHandler(event) {
  event.preventDefault();

  // Ivesta reiksme (kg)
  const eneteredValue = +formEl.elements.search.value;

  // Formos validacija
  if (isNaN(eneteredValue)) {
    formEl.reset();
    return alert("You must enter a number");
  } else if (eneteredValue < 0) {
    formEl.reset();
    return alert("You must enter a number that is positive");
  }

  // Reiksmes konvertacija (svarai, gramai, uncijos)
  const valueInLb = (eneteredValue * 2.2046).toFixed(2);
  const valueInG = eneteredValue / 0.001;
  const valueInOz = (eneteredValue * 35.274).toFixed(2);

  // Konvertuotu reiksmiu atvaizdavimas HTML
  outputContainerEl.innerHTML = `
  <h2 class="output-heading">You Have Entered: <span class="inutial-value">${eneteredValue}kg</span></h2>
   <h3 class="subtitle">Weight In Lb: <span class="value">${valueInLb}lb</span></h3>
   <h3 class="subtitle">Weight In G: <span class="value">${valueInG}g</span></h3>
   <h3 class="subtitle">Weight In Oz: <span class="value">${valueInOz}oz</span></h3>
  `;

  formEl.reset();
  console.log("eneteredValue ===", isNaN(eneteredValue));
}
