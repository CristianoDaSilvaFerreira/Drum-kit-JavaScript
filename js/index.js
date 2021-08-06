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

const activeDiv = (event) => {
  const letter = event.target.id;
  const allowedLetter = sounds.hasOwnProperty(letter);
  if (allowedLetter) {
    playSong(letter);
  }
  playSong(letter);
}

view(sounds);

document.getElementById('container').addEventListener('click', activeDiv);
