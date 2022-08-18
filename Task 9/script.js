/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  /**
   * constructor funkcija sukuria objekta su zemiau pateiktais parametrais
   * @param {string} title
   * @param {string} director
   * @param {number} budget
   */
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  get wasExpensive() {
    const bigBudget = 100000000;
    return this.budget > bigBudget ? true : false;
  }
}

const filmas = new Movie("Titanic", "James Bond", 200000000);
console.log("filmas.wasExpensive ===", filmas.wasExpensive);
