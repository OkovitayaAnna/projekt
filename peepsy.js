const frame = document.querySelector('.frame');
const bird = document.querySelector('.bird');
const captureButton = document.querySelector('.capture-button');
const scoreValue = document.querySelector('.score-value');

let score = 0;

captureButton.addEventListener('click', function() {
  const frameRect = frame.getBoundingClientRect();
  const birdRect = bird.getBoundingClientRect();

  if (
    birdRect.left >= frameRect.left &&
    birdRect.right <= frameRect.right &&
    birdRect.top >= frameRect.top &&
    birdRect.bottom <= frameRect.bottom
  ) {
    score += 1;
    scoreValue.textContent = score;
  }

  if (score > 5) {
    var notification = new Notification("Yayyy you won! If you want - continue, or maybe you want to see other web-pages :)");
    //showNotification(notification);
  }
});