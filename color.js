"use strict";

//make option in HTML
//no reason to send more than HSL to the 4 other colors, and then put RGB + HEX

window.addEventListener("DOMContentLoaded", init);

const colorPick = document.querySelector("#colorpick");
const colorField = document.querySelector("#userinput");
const colorCodes = document.querySelector("#colorcodes");

//Rykkes ned
const hsl = document.querySelector("#hsl");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");

let r;
let g;
let b;

function init() {
  hsl.textContent = "";
  rgb.textContent = "";
  hex.textContent = "";

  colorField.addEventListener("input", displayColor);
}

function displayColor() {
  colorPick.style.backgroundColor = colorField.value;
}

function hexToRGB(hex) {
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);

  //rgb.textContent =
}

function rgbToHex(hex) {
  r = hex.substring(1, 3).toString();
  g = hex.substring(3, 5).toString();
  b = hex.substring(5, 7).toString();

  //hex.textContent =
}

function rgbToHSL() {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  //hsl.textContent =
  return [h, s, l];
}
//function displayRGB
//function displayHSL
//function displayHEX

rgbToHSL();
