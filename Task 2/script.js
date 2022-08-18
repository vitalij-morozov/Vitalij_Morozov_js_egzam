/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// Nusitaikymai
const btnEl = document.getElementById("btn__element");
const outputContainerEl = document.getElementById("btn__state");

// Paspaudimu skaiciavymo kintamasis
let clickCounter = 0;

// Btn Event Listener
btnEl.addEventListener("click", () => {
  clickCounter++;

  // Paspaudimu skaiciaus atvaizdavimas HTML
  outputContainerEl.innerHTML = `<span class="btn__state-counter">${clickCounter}</span>`;
});
