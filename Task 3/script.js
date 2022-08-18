/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// Nusitaikymai
const outputContainerEl = document.getElementById("output");
const btnEl = document.getElementById("btn");

// Pagrindine nuoroda
const ENDPOINT = "https://api.github.com/users";

// GET metodas, gaunamas useriu masyvas is API
async function getUsers(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch GET failed", response.status, response.message);
    }
    const dataInJs = await response.json();
    console.log("GET dataInJs ===", dataInJs);
    return dataInJs;
  } catch (error) {
    console.warn(error.message);
  }
}

// Mygtugo Show Users Event Listenter, paspaudus Useriai gaunami is API ir atvaizduojami HTML
btnEl.addEventListener("click", () => {
  getUsers(ENDPOINT)
    .then(displayUsersInHTML)
    .catch((error) => console.warn(error));
});

// Sukuriami User korteles HTML elementai
function createUserCard(uObj) {
  const divEl = document.createElement("div");
  divEl.className = "user-card";
  const imgEl = document.createElement("img");
  imgEl.src = uObj.avatar_url;
  imgEl.className = "user-card__avatar";
  const h2El = document.createElement("h2");
  h2El.className = "user-card__username";
  h2El.textContent = uObj.login;

  divEl.append(imgEl, h2El);
  return divEl;
}

// Gauti Useriai atvaizduojami HTML
function displayUsersInHTML(uArr) {
  outputContainerEl.innerHTML = "";
  const users = uArr.map((uObj) => {
    return createUserCard(uObj);
  });
  outputContainerEl.append(...users);
}
