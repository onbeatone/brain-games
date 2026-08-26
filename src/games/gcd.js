import runGame from '../index.js';

const gameDescription = 'Encuentra el máximo común divisor de los números dados.';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return {
    question,
    correctAnswer,
  };
};

const runGcdGame = () => {
  runGame(gameDescription, getRoundData);
};

export default runGcdGame;