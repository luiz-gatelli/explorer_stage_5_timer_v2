import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCafeteria,
  volumeFireplace
} from './elements.js';

import { toggleDarkMode } from './dark-mode.js';

export function Events({timer,sounds}){

  var sliderChanged = false;

  buttonPlay.addEventListener('click', () => {
    timer.countdown();
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  });

  buttonPause.addEventListener('click', () => {
    timer.pauseTimer();
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
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
    if (sliderChanged) {
      sliderChanged = false;
      return;
    }
    
    buttonForest.classList.toggle("selected");
    sounds.playForestSound();
    volumeForest.value = 0.5;
    sounds.setForestVolume(volumeForest.value);
  });

  buttonRain.addEventListener('click', () => {
    if(sliderChanged) {
      sliderChanged = false;
      return;
    }
    
    buttonRain.classList.toggle("selected");
    sounds.playRainSound();
    volumeRain.value = 0.5;
    sounds.setRainVolume(volumeRain.value);
  });

  buttonCafeteria.addEventListener('click', () => {
    if (sliderChanged) {
      sliderChanged = false;
      return;
    }
    
    buttonCafeteria.classList.toggle("selected");
    sounds.playCafeteriaSound();
    volumeCafeteria.value = 0.5;
    sounds.setCafeteriaVolume(volumeCafeteria.value);
  });

  buttonFireplace.addEventListener('click', () => {
    
    if (sliderChanged) {
      sliderChanged = false;
      return;
    }
    
    buttonFireplace.classList.toggle("selected");
    sounds.playFireplaceSound();
    volumeFireplace.value = 0.5;
    sounds.setFireplaceVolume(volumeFireplace.value);
  });

  buttonLightMode.addEventListener('click', () => { 
    toggleDarkMode();
    buttonLightMode.classList.toggle("hide");
    buttonDarkMode.classList.toggle("hide");
  });

  buttonDarkMode.addEventListener('click', () => {
    toggleDarkMode();
    buttonLightMode.classList.toggle("hide");
    buttonDarkMode.classList.toggle("hide");
  });

  volumeForest.addEventListener('input', () => {
    sounds.setForestVolume(volumeForest.value);
    sliderChanged = true;
  });

  volumeRain.addEventListener('input', () => {
    sounds.setRainVolume(volumeRain.value);
    sliderChanged = true;
  });

  volumeCafeteria.addEventListener('input', () => {
    sounds.setCafeteriaVolume(volumeCafeteria.value);
    sliderChanged = true;
  });

  volumeFireplace.addEventListener('input', () => {
    sounds.setFireplaceVolume(volumeFireplace.value);
    sliderChanged = true;
  });

};