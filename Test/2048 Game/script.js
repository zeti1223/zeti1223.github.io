let grid = $(".grid");
const startButton = $("#start-button");
const container = $(".container");
const coverScreen = $(".cover-screen");
const result = $("#result");
const overText = $("#over-text");

let matrix,
  score,
  isSwiped,
  touchY,
  initialY = 0,
  touchX,
  initialX = 0,
  rows = 4,
  columns = 4,
  swipeDirection;

let rectLeft = grid.offset().left;
let rectTop = grid.offset().top;

const getXY = (e) => {
  touchX = e.originalEvent.touches[0].pageX - rectLeft;
  touchY = e.originalEvent.touches[0].pageY - rectTop;
};

const createGrid = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const boxDiv = $("<div>")
        .addClass("box")
        .attr("data-position", `${i}_${j}`);
      grid.append(boxDiv);
    }
  }
};

const adjacentCheck = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
};

const possibleMovesCheck = () => {
  for (let i in matrix) {
    if (adjacentCheck(matrix[i])) {
      return true;
    }
    let colarr = [];
    for (let j = 0; j < columns; j++) {
      colarr.push(matrix[i][j]);
    }
    if (adjacentCheck(colarr)) {
      return true;
    }
  }
  return false;
};

const randomPosition = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const hasEmptyBox = () => {
  for (let r in matrix) {
    for (let c in matrix[r]) {
      if (matrix[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
};

const gameOverCheck = () => {
  if (!possibleMovesCheck()) {
    coverScreen.removeClass("hide");
    container.addClass("hide");
    overText.removeClass("hide");
    result.text(`Final score: ${score}`);
    startButton.text("Restart Game");
  }
};

const generateTwo = () => {
  if (hasEmptyBox()) {
    let randomRow = randomPosition(matrix);
    let randomCol = randomPosition(matrix[randomPosition(matrix)]);
    if (matrix[randomRow][randomCol] == 0) {
      matrix[randomRow][randomCol] = 2;
      let element = $(`[data-position = '${randomRow}_${randomCol}']`);
      element.text(2).addClass("box-2");
    } else {
      generateTwo();
    }
  } else {
    gameOverCheck();
  }
};

const generateFour = () => {
  if (hasEmptyBox()) {
    let randomRow = randomPosition(matrix);
    let randomCol = randomPosition(matrix[randomPosition(matrix)]);
    if (matrix[randomRow][randomCol] == 0) {
      matrix[randomRow][randomCol] = 4;
      let element = $(`[data-position= '${randomRow}_${randomCol}']`);
      element.text(4).addClass("box-4");
    } else {
      generateFour();
    }
  } else {
    gameOverCheck();
  }
};

const removeZero = (arr) => arr.filter((num) => num);
const checker = (arr, reverseArr = false) => {
  arr = reverseArr ? removeZero(arr).reverse() : removeZero(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      arr[i] += arr[i + 1];
      arr[i + 1] = 0;
      score += arr[i];
    }
  }

  arr = reverseArr ? removeZero(arr).reverse() : removeZero(arr);

  let missingCount = 4 - arr.length;
  while (missingCount > 0) {
    if (reverseArr) {
      arr.unshift(0);
    } else {
      arr.push(0);
    }
    missingCount -= 1;
  }
  return arr;
};

const slideDown = () => {
  for (let i = 0; i < columns; i++) {
    let num = [];
    for (let j = 0; j < rows; j++) {
      num.push(matrix[j][i]);
    }
    num = checker(num, true);
    for (let j = 0; j < rows; j++) {
      matrix[j][i] = num[j];
      let element = $(`[data-position='${j}_${i}']`);
      element
        .text(matrix[j][i] ? matrix[j][i] : "")
        .removeClass()
        .addClass("box")
        .addClass(`box-${matrix[j][i]}`);
    }
  }

  let decision = Math.random() > 0.5 ? 1 : 0;
  if (decision) {
    setTimeout(generateFour, 200);
  } else {
    setTimeout(generateTwo, 200);
  }
};

const slideUp = () => {
  for (let i = 0; i < columns; i++) {
    let num = [];
    for (let j = 0; j < rows; j++) {
      num.push(matrix[j][i]);
    }
    num = checker(num);
    for (let j = 0; j < rows; j++) {
      matrix[j][i] = num[j];
      let element = $(`[data-position = '${j}_${i}']`);
      element
        .text(matrix[j][i] ? matrix[j][i] : "")
        .removeClass()
        .addClass("box")
        .addClass(`box-${matrix[j][i]}`);
    }
  }
  let decision = Math.random() > 0.5 ? 1 : 0;
  if (decision) {
    setTimeout(generateFour, 200);
  } else {
    setTimeout(generateTwo, 200);
  }
};

const slideRight = () => {
  for (let i = 0; i < rows; i++) {
    let num = [];
    for (let j = 0; j < columns; j++) {
      num.push(matrix[i][j]);
    }
    num = checker(num, true);
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = num[j];
      let element = $(`[data-position = '${i}_${j}']`);
      element
        .text(matrix[i][j] ? matrix[i][j] : "")
        .removeClass()
        .addClass("box")
        .addClass(`box-${matrix[i][j]}`);
    }
  }
  let decision = Math.random() > 0.5 ? 1 : 0;
  if (decision) {
    setTimeout(generateFour, 200);
  } else {
    setTimeout(generateTwo, 200);
  }
};

const slideLeft = () => {
  for (let i = 0; i < rows; i++) {
    let num = [];
    for (let j = 0; j < columns; j++) {
      num.push(matrix[i][j]);
    }

    num = checker(num);
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = num[j];
      let element = $(`[data-position = '${i}_${j}']`);
      element
        .text(matrix[i][j] ? matrix[i][j] : "")
        .removeClass()
        .addClass("box")
        .addClass(`box-${matrix[i][j]}`);
    }
  }
  let decision = Math.random() > 0.5 ? 1 : 0;
  if (decision) {
    setTimeout(generateFour, 200);
  } else {
    setTimeout(generateTwo, 200);
  }
};

$(document).on("keyup", (e) => {
  if (e.code == "ArrowLeft") {
    slideLeft();
  } else if (e.code == "ArrowRight") {
    slideRight();
  } else if (e.code == "ArrowUp") {
    slideUp();
  } else if (e.code == "ArrowDown") {
    slideDown();
  }
  $("#score").text(score);
});

grid.on("touchstart", (event) => {
  isSwiped = true;
  getXY(event);
  initialX = touchX;
  initialY = touchY;
});

grid.on("touchmove", (event) => {
  if (isSwiped) {
    getXY(event);
    let diffX = touchX - initialX;
    let diffY = touchY - initialY;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      swipeDirection = diffX > 0 ? "down" : "up";
    } else {
      swipeDirection = diffX > 0 ? "right" : "left";
    }
  }
});

grid.on("touchend", () => {
  isSwiped = false;
  let swipeCalls = {
    up: slideUp,
    down: slideDown,
    left: slideLeft,
    right: slideRight,
  };
  swipeCalls[swipeDirection]();
  $("#score").text(score);
});

const startGame = () => {
  score = 0;
  $("#score").text(score);
  grid.html("");
  matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  container.removeClass("hide");
  coverScreen.addClass("hide");
  createGrid();
  generateTwo();
  generateTwo();
};

startButton.on("click", () => {
  startGame();
  swipeDirection = "";
});
