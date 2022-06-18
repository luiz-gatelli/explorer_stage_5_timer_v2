const body = document.querySelector('body');
const buttonsContainer = document.querySelector('.buttons-container');
const cardsContainer = document.querySelector('.sound-cards');

export function toggleDarkMode(){

  body.classList.toggle("dark-mode");
  buttonsContainer.classList.toggle("dark-mode");
  cardsContainer.classList.toggle("dark-mode");

};