/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// Nusitaikymai
const outputContainerEl = document.getElementById("output");

// Pagrindine nuoroda
const ENDPOINT = "cars.json";

let carsArray = [];

// GET Cars is lokalinio cars.json failo
async function getCars(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch GET failed", response.status, response.message);
    }
    const dataInJs = await response.json();
    carsArray = dataInJs;
    console.log("GET dataInJs ===", dataInJs);
    return dataInJs;
  } catch (error) {
    console.warn(error.message);
  }
}

// Gaunam Cars sarasa is cars.json ir atvaizduojame HTML uzkrovus puslapi
getCars(ENDPOINT)
  .then(displayCarCards)
  .catch((error) => console.warn(error));

// Sukurti Car korteles HTML elementus
function createCarCard(cObj) {
  const divEl = document.createElement("div");
  divEl.className = "car-card";
  const h2El = document.createElement("h2");
  h2El.className = "car-card__brand";
  h2El.textContent = cObj.brand;
  const ulEl = document.createElement("ul");
  ulEl.className = "car-card__model-list";
  const carModels = cObj.models.map((model) => {
    const liEl = document.createElement("li");
    liEl.textContent = model;
    return liEl;
  });
  ulEl.append(...carModels);
  divEl.append(h2El, ulEl);
  return divEl;
}

// Atvaizduoti Car korteliu Array HTML
function displayCarCards(cArr) {
  outputContainerEl.innerHTML = "";
  cArr.forEach((obj) => {
    const singleCard = createCarCard(obj);
    outputContainerEl.append(singleCard);
  });
}
