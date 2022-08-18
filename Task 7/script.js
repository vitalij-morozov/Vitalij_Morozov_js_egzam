/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

// 1-as variantas naudojant Object

// function showObjectKeys(object) {
//   return Object.keys(object);
// }

// 2-as variantas naudojant For-in cikla
function showObjectKeys(object) {
  const keyArr = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}

const objKeys = showObjectKeys(audi);

console.log("objKeys ===", objKeys);
