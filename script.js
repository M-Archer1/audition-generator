import messageData from "./modules/data.js";
import { randomIndex } from "./modules/random.js";

const {scaleLetters, majorMinor, sightReading, randomScale, randomEtude} = messageData;

function nextAudition() {
  let number = Number(auditionNumber.textContent);
  number++;
  auditionNumber.textContent = number;

  scaleText.textContent = messageData.randomScale();

  sightReadingElement.textContent = messageData.randomEtude();
}

const auditionNumber = document.getElementById("audition-number");

const scaleText = document.getElementById("scale");

const sightReadingElement = document.getElementById("etude");

scaleText.textContent = messageData.randomScale();

sightReadingElement.textContent = messageData.randomEtude();

const nextAuditionButton = document.getElementById("audition-button");

nextAuditionButton.addEventListener("click", nextAudition);