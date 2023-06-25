window.addEventListener('DOMContentLoaded', (event) => {
    var frogElement = document.getElementById('frog');
    var audio = new Audio('frog-sound.mp3');
  
    function playSound() {
      audio.play();
    }
  
    frogElement.addEventListener('click', playSound);
  });
  