'use strict';

const sounds = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav',
}

// createDiv
const creatDiv = (text) => {
  const div = document.createElement('div');
  div.classList.add('key');
  div.textContent = text;
  div.id = text;
  document.getElementById('container').appendChild(div);
}

const view = (sounds) => Object.keys(sounds).forEach(creatDiv);

const playSong = (letter) => {
  const audio = new Audio(`../sounds/${sounds[letter]}`);
  audio.play();
}

const addEfect = (letter) => document.getElementById(letter)
  .classList.add('active');

const removeEfect = (letter) => {
  const div = document.getElementById(letter);
  const removeActive = () => div.classList.remove('active');
  div.addEventListener('transitionend', removeActive);
}

const activeDiv = (event) => {
 
  const letter = event.type == 'click' 
    ? event.target.id 
    : event.key.toUpperCase();
    
  const allowedLetter = sounds.hasOwnProperty(letter);
  if (allowedLetter) {
    addEfect(letter);
    playSong(letter);
    removeEfect(letter);
  }
  playSong(letter);
}

view(sounds);

document.getElementById('container').addEventListener('click', activeDiv);

window.addEventListener('keydown', activeDiv);
