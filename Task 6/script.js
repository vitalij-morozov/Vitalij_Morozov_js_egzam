/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

// #1 UZD
function getUserAverageAge(uArr) {
  return uArr.reduce((tot, uObj) => tot + uObj.age / uArr.length, 0).toFixed(1);
}

const usersAgeAvg = getUserAverageAge(users);
console.log("UZD #1 useriu amziu vidurkis ===", usersAgeAvg);

// #2 UZD
function getUsersNames(uArr) {
  return uArr.map((uObj) => uObj.name);
}

const onlyUsersNames = getUsersNames(users);
console.log("UZD #2 tik useriu vardai ===", onlyUsersNames);
