const frame = document.querySelector('.frame');
const bird = document.querySelector('.bird');
const captureButton = document.querySelector('.capture-button');
const scoreValue = document.querySelector('.score-value');
const mistakesValue = document.querySelector('.mistakes-value');

var mistakes = 0;

let score = 0;

captureButton.addEventListener('click', function() {
  const frameRect = frame.getBoundingClientRect();
  const birdRect = bird.getBoundingClientRect();

  document.getElementsByClassName('mistake')[0].style.display = "none";
  document.getElementsByClassName('won')[0].style.display = "none";

  if (
    birdRect.left >= frameRect.left &&
    birdRect.right <= frameRect.right &&
    birdRect.top >= frameRect.top &&
    birdRect.bottom <= frameRect.bottom
  ) {
    score += 1;
    scoreValue.textContent = score;
  } else {
    mistakes += 1;
    mistakesValue.textContent = mistakes;
  }

  if (mistakes == 3) {
    document.getElementsByClassName('mistake')[0].style.display = "flex";
    score = 0;
    scoreValue.textContent = score;
    mistakes = 0;
    mistakesValue.textContent = mistakes;
  }

  if (score == 5) {
    document.getElementsByClassName('won')[0].style.display = "flex";
  }
});