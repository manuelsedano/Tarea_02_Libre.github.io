const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

//GAme Settings
const boardSize = 10;
const gameSpeed = 1000;
const squeareType = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowLeft: -1,
    ArrowRight: 1,
};

//Game Variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquare;
let moveInterval;

const setGame = () => {
    snake = ["00", "01", "02", "03"];
    score = snake.length;
    direction = directions.ArrowRight;
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squeareType.emptySquare));
    
}

const startGame = () => {
    setGame();
}

startButton.addEventListener('click', startGame);
