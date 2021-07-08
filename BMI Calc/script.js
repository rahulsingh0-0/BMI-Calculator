"use-strict";

const weightSlider = document.querySelector(".weight");
const heightSlider = document.querySelector(".height");
const weight = document.querySelector("#weight-label");
const height = document.querySelector("#height-label");
const bmi = document.querySelector("#bmi");
let category = document.querySelector("#category");

let value3;
let value4;
let total;
let value2;

bmi.textContent = "";
category.textContent = "";
weight.textContent = `0 kg`;
height.textContent = `0 cm`;

const app = function () {
  weightSlider.oninput = function () {
    let value = weightSlider.value;
    weight.innerHTML = `${value} kg`;
    value3 = value2 / 100;
    value4 = Math.pow(value3, 2);
    total = value / value4;

    if (total < 18.5) {
      category.innerHTML = `Underweight`;
      category.style.color = "brown";
    }
    if (total >= 18.5 && total < 25) {
      category.innerHTML = `Optimal`;
      category.style.color = "lightGreen";
    }
    if (total >= 25 && total < 30) {
      category.innerHTML = `OverWeight`;
      category.style.color = "orange";
    }
    if (total > 30) {
      category.innerHTML = `Obese`;
      category.style.color = "red";
    }

    heightSlider.oninput = function () {
      value2 = heightSlider.value;
      height.innerHTML = `${value2} cm`;
      value3 = value2 / 100;
      value4 = Math.pow(value3, 2);
      total = value / value4;
      bmi.innerHTML = `${total.toFixed(1)}`;
      if (total < 18.5) {
        category.innerHTML = `Underweight`;
        category.style.color = "brown";
      }
      if (total >= 18.5 && total < 25) {
        category.innerHTML = `Optimal`;
        category.style.color = "lightGreen";
      }
      if (total >= 25 && total < 30) {
        category.innerHTML = `OverWeight`;
        category.style.color = "orange";
      }
      if (total > 30) {
        category.innerHTML = `Obese`;
        category.style.color = "red";
      }
    };
  };
};
app();
