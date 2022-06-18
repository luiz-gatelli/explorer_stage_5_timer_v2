const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');

const minutesDisplay = document.querySelector('.timer-minutes');
const secondsDisplay = document.querySelector('.timer-seconds');

const buttonLightMode = document.querySelector('.switch-light');
const buttonDarkMode = document.querySelector('.switch-dark');

const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCafeteria = document.querySelector('.cafeteria');
const buttonFireplace = document.querySelector('.fireplace');

const volumeForest = document.querySelector('#forestSound');
const volumeRain = document.querySelector('#rainSound');
const volumeCafeteria = document.querySelector('#cafeteriaSound');
const volumeFireplace = document.querySelector('#fireplaceSound');

export {
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
  minutesDisplay,
  secondsDisplay,
  volumeForest,
  volumeRain,
  volumeCafeteria,
  volumeFireplace
};