export function Timer({
  minutesDisplay,
  secondsDisplay
}){

  let minutes = 25;
  let remainingTimeInSeconds = 60 * minutes;
  let timeoutId;

  function updateDisplay(minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');;
  }

  function calculateRemainingTime(remainingTimeInSeconds){
  
    const remainingSeconds = remainingTimeInSeconds % 60;
    const remainingMinutes = (remainingTimeInSeconds - remainingSeconds) / 60;

    return {
      remainingSeconds: remainingSeconds,
      remainingMinutes: remainingMinutes
    }
  }

  function countdown(){
    timeoutId = setTimeout(() => {

      remainingTimeInSeconds--;

      const {remainingMinutes, remainingSeconds}  = calculateRemainingTime(remainingTimeInSeconds);
      updateDisplay(remainingMinutes, remainingSeconds);

      if(remainingTimeInSeconds == 0 || remainingTimeInSeconds < 0){
        remainingTimeInSeconds = 0;
        updateDisplay(0,0);
        return;
      }
  
      countdown();
    
    },1000);

  }

  function pauseTimer() {
    clearTimeout(timeoutId);
  }

  function stopTimer() {
    clearTimeout(timeoutId);
    remainingTimeInSeconds = 60 * minutes;
    updateDisplay(minutes,0);
  }

  function modifyTimer(minutesChange){

    remainingTimeInSeconds += 60 * minutesChange;
    if (remainingTimeInSeconds <= 0) {
      remainingTimeInSeconds = 0;
    }
    const { remainingMinutes, remainingSeconds } = calculateRemainingTime(remainingTimeInSeconds);
    updateDisplay(remainingMinutes, remainingSeconds);
  }

  return {
    timeoutId,
    countdown,
    pauseTimer,
    stopTimer,
    modifyTimer
  }

};