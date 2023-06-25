var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var winScreen = document.getElementById("winScreen");

var capybaraImage = new Image();
capybaraImage.src = "capy.png";

var coinImage = new Image();
coinImage.src = "coin.png";

var capybaraX = canvas.width / 2;
var capybaraY = canvas.height / 2;
var coins = [];
var score = 0;
var collisionOccurred = false;

document.addEventListener("keydown", handleKeyDown, false);

function drawGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(capybaraImage, capybaraX, capybaraY, 100, 100);

  for (var i = 0; i < coins.length; i++) {
    var coin = coins[i];
    context.drawImage(coinImage, coin.x, coin.y, 30, 30);
  }

  context.fillStyle = "rgb(83, 134, 68)";
  context.font = "25px 'Brush Script MT', cursive";
  context.fillText("Score: " + score, 10, 30);
}

function handleKeyDown(event) {
  switch (event.keyCode) {
    case 37:
      capybaraX -= 10;
      break;
    case 38:
      capybaraY -= 10;
      break;
    case 39:
      capybaraX += 10;
      break;
    case 40:
      capybaraY += 10;
      break;
  }
}

function createCoin() {
    var coin;
    var minX = 50;
    var maxX = canvas.width - 50;
    var minY = 50;
    var maxY = canvas.height - 50;
  
    coin = {
      x: Math.random() * (maxX - minX) + minX,
      y: Math.random() * (maxY - minY) + minY
    };
  
    coins.push(coin);
}
  
function updateGame() {
  for (var i = 0; i < coins.length; i++) {
    var coin = coins[i];

    if (capybaraX < coin.x + 30 &&
        capybaraX + 100 > coin.x &&
        capybaraY < coin.y + 30 &&
        capybaraY + 100 > coin.y) {

      coins.splice(i, 1);
      score++;
      collisionOccurred = true;
      break;
    }
  }

  if (collisionOccurred && coins.length === 0) {
    createCoin();
    collisionOccurred = false;
  }

  drawGame();

  if (score >= 10) {
    winScreen.style.display = "flex";
    document.getElementsByClassName('game')[0].style.display = "none";
  } else {
    requestAnimationFrame(updateGame);
  }
}

capybaraImage.onload = function() {
  coinImage.onload = function() {
    createCoin();
    updateGame();
  };
};
