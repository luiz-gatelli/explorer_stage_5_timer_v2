export function Sounds(){

  const forest = new Audio("./music/Floresta.wav");
  const rain = new Audio("./music/Chuva.wav");
  const cafeteria = new Audio("./music/Cafeteria.wav");
  const fireplace = new Audio("./music/Lareira.wav");

  forest.loop = true;
  rain.loop = true;
  cafeteria.loop = true;
  fireplace.loop = true;

  function pauseAllSounds(){
    forest.pause();
    rain.pause();
    cafeteria.pause();
    fireplace.pause();
  }

  function playForestSound(){
    forest.paused ? forest.play() : forest.pause();
  }

  function playRainSound(){
    rain.paused ? rain.play() : rain.pause();
  }

  function playCafeteriaSound(){
    cafeteria.paused ? cafeteria.play() : cafeteria.pause();
  }

  function playFireplaceSound(){
    fireplace.paused ? fireplace.play() : fireplace.pause();
  }

  function setForestVolume(volume){
    forest.volume = volume;
  }

  function setRainVolume(volume){
    rain.volume = volume;
  }

  function setCafeteriaVolume(volume){
    cafeteria.volume = volume;
  }

  function setFireplaceVolume(volume){
    fireplace.volume = volume;
  }

  return {
    pauseAllSounds,
    playForestSound,
    playRainSound,
    playCafeteriaSound,
    playFireplaceSound,
    setForestVolume,
    setRainVolume,
    setCafeteriaVolume,
    setFireplaceVolume
  }

};