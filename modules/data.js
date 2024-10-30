import { randomIndex } from "./random.js";

const messageData = {

  scaleLetters: ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'G', 'D', 'A', 'E', 'B'],

  majorMinor: ['Major', 'Minor'],
  
  sightReading: ['Etude 1', 'Etude 2', 'Etude 3', 'Etude 4', 'Etude 5'],
  
  randomScale() {
    return this.scaleLetters[randomIndex(this.scaleLetters)] + " " + this.majorMinor[randomIndex(this.majorMinor)];
  },

  randomEtude() {
    return this.sightReading[randomIndex(this.sightReading)];
  },
}

export default messageData;