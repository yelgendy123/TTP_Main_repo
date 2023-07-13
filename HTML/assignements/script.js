window.onload = function() {
    var countdown = 5;
    var timerDisplay = document.querySelector('.timer');
  
    function updateTimer() {
      timerDisplay.textContent = countdown;

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        console.log("Time's up");
      } else {
        countdown--;
      }
    }
  
    var countdownInterval = setInterval(updateTimer, 1000);
  };