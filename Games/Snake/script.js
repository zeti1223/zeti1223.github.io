// Made by ChatGPT - GPT-4

const canvas = document.getElementById("game-board");
const context = canvas.getContext("2d");
const tileSize = 20;

let snake = [
  { x: tileSize * 5, y: tileSize * 5 },
  { x: tileSize * 6, y: tileSize * 5 },
  { x: tileSize * 7, y: tileSize * 5 },
];

let dx = tileSize;
let dy = 0;

let food = {
  x: Math.floor(Math.random() * (canvas.width / tileSize)) * tileSize,
  y: Math.floor(Math.random() * (canvas.height / tileSize)) * tileSize,
};

let score = 0;
const scoreDisplay = document.getElementById("score");

let highScore = localStorage.getItem("highScore") || 0;
const highScoreDisplay = document.getElementById("high-score");

const foodImage = new Image();
foodImage.src = 'logo.png';

function gameLoop() {
  update();
  draw();
  setTimeout(gameLoop, 200);
}

let touchStartX = null;
let touchStartY = null;

canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (!touchStartX || !touchStartY) {
    return;
  }

  const touchEndX = e.touches[0].clientX;
  const touchEndY = e.touches[0].clientY;

  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0 && dx === 0) {
      dx = -tileSize;
      dy = 0;
    } else if (diffX < 0 && dx === 0) {
      dx = tileSize;
      dy = 0;
    }
  } else {
    if (diffY > 0 && dy === 0) {
      dx = 0;
      dy = -tileSize;
    } else if (diffY < 0 && dy === 0) {
      dx = 0;
      dy = tileSize;
    }
  }

  touchStartX = null;
  touchStartY = null;
});


gameLoop();

function update() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  if (head.x === food.x && head.y === food.y) {
    food.x = Math.floor(Math.random() * (canvas.width / tileSize)) * tileSize;
    food.y = Math.floor(Math.random() * (canvas.height / tileSize)) * tileSize;
    score++;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
    }
  } else {
    snake.pop();
  }

  snake.unshift(head);

  if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    collision(head)
  ) {
    snake = [
      { x: tileSize * 5, y: tileSize * 5 },
      { x: tileSize * 6, y: tileSize * 5 },
      { x: tileSize * 7, y: tileSize * 5 },
    ];
    dx = tileSize;
    dy = 0;
    score = 0;
  }

  scoreDisplay.innerText = `Pontszám: ${score}`;
  highScoreDisplay.innerText = `Legmagasabb pontszám: ${highScore}`;
}

function draw() {
  context.fillStyle = "orange";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "green");
  gradient.addColorStop(1, "green");
  context.fillStyle = gradient;

  for (const segment of snake) {
    context.fillRect(segment.x, segment.y, tileSize, tileSize);
  }

  context.drawImage(foodImage, food.x, food.y, tileSize, tileSize);
}

function collision(head) {
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && dy === 0) {
      dx = 0;
      dy = -tileSize;
    } else if (e.key === "ArrowDown" && dy === 0) {
      dx = 0;
      dy = tileSize;
    } else if (e.key === "ArrowLeft" && dx === 0) {
      dx = -tileSize;
      dy = 0;
    } else if (e.key === "ArrowRight" && dx === 0) {
      dx = tileSize;
      dy = 0;
    }
  });