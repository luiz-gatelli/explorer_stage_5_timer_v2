import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
} from './elements.js';

export function Event({timer,sounds}){

  buttonPlay.addEventListener('click', () => {
    timer.countdown();
  });

  buttonStop.addEventListener('click', () => {
    timer.stopTimer();
  });

  buttonPlus.addEventListener('click', () => {
    timer.modifyTimer(+5);
  });

  buttonMinus.addEventListener('click', () => {
    timer.modifyTimer(-5);
  });

  buttonForest.addEventListener('click', () => {
    buttonForest.classList.toggle("selected");
    sounds.playForestSound();
  });

  buttonRain.addEventListener('click', () => {
    buttonRain.classList.toggle("selected");
    sounds.playRainSound();
  });

  buttonCafeteria.addEventListener('click', () => {
    buttonCafeteria.classList.toggle("selected");
    sounds.playCafeteriaSound();
  });

  buttonFireplace.addEventListener('click', () => {
    buttonFireplace.classList.toggle("selected");
    sounds.playFireplaceSound();
  });

};