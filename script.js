let gender = document.querySelector(".gender");
let age = document.querySelector("age");
let height = document.querySelector("height");
let weight = document.querySelector("weight");

const PhysAct = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
  };

  const CaloriesFormulaFactor = {
    AGE: 5,
    WEIGHT: 10,
    HEIGHT: 6.25,
  };

  const CaloriesFormulaConstant = {
    MALE: 5,
    FEMALE: -160
  };

  const CaloriesMinMaxRatio = {
    MIN: 0.85,
    MAX: 1.15
  };