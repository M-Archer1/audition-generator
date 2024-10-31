import messageData from "./modules/data.js";

// This function runs when the next button is clicked, and updates various text elements on the page
function nextAudition() {
  // Casts the audition number text as a number so it can be incremented, then reassigns it
  let number = Number(auditionNumber.textContent);
  number++;
  auditionNumber.textContent = number;
  // Updates the scale text
  scaleText.textContent = messageData.randomScale();
  // Updates the sightreading text
  sightReadingElement.textContent = messageData.randomEtude();
}

// These lines identify elements from the webpage and saves them as variables
const auditionNumber = document.getElementById("audition-number");
const scaleText = document.getElementById("scale");
const sightReadingElement = document.getElementById("etude");
const nextAuditionButton = document.getElementById("audition-button");

// Sets the initial values of text elements on the page before they are changed
scaleText.textContent = messageData.randomScale();
sightReadingElement.textContent = messageData.randomEtude();

// Updates the text elements on the page when the next button is clicked
nextAuditionButton.addEventListener("click", nextAudition);